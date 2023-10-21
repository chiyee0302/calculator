package main

import (
	"encoding/json"
	"fmt"
	"io"
	"math"
	"strconv"

	//"math"
	"net/http"

	//"strconv"
	"github.com/dengsgo/math-engine/engine"
	//"github.com/Knetic/govaluate"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

// userinfo--->数据表
type UserInfo struct {
	Rank                int
	Calculate_string    string `json:"calc_s"`
	To_calculate_string string `json:"to_calc_s"`
	Result              string `json:"ans"`
}

type MsgSave struct {
	Alivebonus  string `json:"alive_bonus"`
	Three_month string `json:"three_month_save_bonus"`
	Half_year   string `json:"half_year_save_bonus"`
	A_year      string `json:"a_year_save_bonus"`
	Two_year    string `json:"two_year_save_bonus"`
	Three_year  string `json:"three_year_save_bonus"`
	Five_year   string `json:"five_year_save_bonus"`
}

type MsgBorrow struct {
	Interest_1 string `json:"interest_1"`
	Interest_2 string `json:"interest_2"`
	Interest_3 string `json:"interest_3"`
	Interest_4 string `json:"interest_4"`
	Interest_5 string `json:"interest_5"`
}

type Bonus struct {
	Money         string `json:"money"`
	Years         string `json:"years"`
	Select_option string `json:"select_option"`
	Ans           string
	Option2       string `json:"option2"`
}

func main() {

	//注册函数
	engine.RegFunction("lg", 1, func(expr ...engine.ExprAST) float64 {
		return math.Log10(engine.ExprASTResult(expr[0]))
	})

	engine.RegFunction("log2", 1, func(expr ...engine.ExprAST) float64 {
		return math.Log2(engine.ExprASTResult(expr[0]))
	})

	engine.RegFunction("log", 1, func(expr ...engine.ExprAST) float64 {
		return math.Log(engine.ExprASTResult(expr[0]))
	})

	//-------------------
	//建立路由
	r := gin.Default()
	//跨域
	r.Use(cors.Default())
	//连接mysql数据库
	//之前要手动创建一个数据库db1
	db, err := gorm.Open("mysql", "root:030223@tcp(127.0.0.1:3306)/db1?charset=utf8mb4&parseTime=True&loc=Local")
	if err != nil {
		panic(err)
	}
	//自动迁移，把结构体和数据表进行对应
	db.AutoMigrate(&UserInfo{})
	defer db.Close()
	var now_id int //数据库中的数据记录id
	now_id = 0
	// 创建
	r.POST("/calc", func(c *gin.Context) {
		// 将传送过来的数据接收
		now_id += 1
		var u1 UserInfo
		body, _ := io.ReadAll(c.Request.Body)
		defer c.Request.Body.Close()
		err := json.Unmarshal(body, &u1)
		if err != nil {
			return
		}
		calculate_string := u1.Calculate_string
		to_calculate_string := u1.To_calculate_string
		u2 := UserInfo{Rank: now_id, Calculate_string: calculate_string, To_calculate_string: to_calculate_string, Result: ""}

		db.Create(&u2)
	})
	//修改
	r.PUT("/calc", func(c *gin.Context) {
		//将传送过来的数据接收
		body, _ := io.ReadAll(c.Request.Body)
		defer c.Request.Body.Close()
		var u1 UserInfo
		err := json.Unmarshal(body, &u1)
		if err != nil {
			return
		}
		calculate_string := u1.Calculate_string
		to_calculate_string := u1.To_calculate_string
		//查找
		var u2 UserInfo
		//更新
		db.Model(&u2).Where("`rank` = ?", now_id).Debug().Updates(map[string]interface{}{
			"calculate_string":    calculate_string,
			"to_calculate_string": to_calculate_string,
		})
	})
	//返回计算结果
	r.GET("/calc", func(c *gin.Context) {
		// GET

		var u1 UserInfo
		// 根据ID从数据库中查找用户
		db.Where("`rank` = ?", now_id).Debug().First(&u1)
		result, err := engine.ParseAndExec(u1.To_calculate_string)
		if err != nil {
			u1.Result = "error"
		} else {
			u1.Result = fmt.Sprintf("%v", result)
		}

		db.Model(&u1).Where("`rank`=?", now_id).Update(&u1)

		c.JSON(http.StatusOK, gin.H{
			"calculate_string":    u1.Calculate_string,
			"to_calculate_string": u1.To_calculate_string,
			"ans":                 u1.Result,
		})
	})
	//删除
	r.DELETE("/calc", func(c *gin.Context) {
		var u1 UserInfo
		// db.Where("`rank` = ?", now_id).Debug().Find(&u1)
		db.Where("`rank` = ?", now_id).Debug().Delete(&u1)
		now_id--
	})

	//返回历史记录（前十条）
	r.GET("/calc/history", func(c *gin.Context) {
		var history_list []UserInfo
		db.Debug().Where("`rank` >= ?", max(now_id-9, 1)).Order("rank").Find(&history_list)

		c.JSON(http.StatusOK, gin.H{
			"history_list": history_list,
		})
	})

	//利率计算器
	//修改存款利率
	db.AutoMigrate(&MsgSave{})
	msg1 := MsgSave{Alivebonus: "0.5", Three_month: "2.85", Half_year: "3.05", A_year: "3.25", Two_year: "4.15", Three_year: "4.75", Five_year: "5.25"}
	db.Create(msg1)
	r.PUT("/calc/bonus/save", func(c *gin.Context) {
		body, _ := io.ReadAll(c.Request.Body)
		defer c.Request.Body.Close()
		var u1 MsgSave
		err := json.Unmarshal(body, &u1)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		if u1.Alivebonus == "" {
			u1.Alivebonus = msg1.Alivebonus
		}
		if u1.Three_month == "" {
			u1.Three_month = msg1.Three_month
		}
		if u1.Half_year == "" {
			u1.Half_year = msg1.Half_year
		}
		if u1.A_year == "" {
			u1.A_year = msg1.A_year
		}
		if u1.Two_year == "" {
			u1.Two_year = msg1.Two_year
		}
		if u1.Three_year == "" {
			u1.Three_year = msg1.Three_year
		}
		if u1.Five_year == "" {
			u1.Five_year = msg1.Five_year
		}
		db.Model(&u1).Debug().Updates(map[string]interface{}{
			"alivebonus":  u1.Alivebonus,
			"three_month": u1.Three_month,
			"half_year":   u1.Half_year,
			"a_year":      u1.A_year,
			"two_year":    u1.Two_year,
			"three_year":  u1.Three_year,
			"five_year":   u1.Five_year,
		})
		db.First(&msg1)
	})
	//修改贷款利息
	db.AutoMigrate(&MsgBorrow{})
	msg2 := MsgBorrow{Interest_1: "5.85", Interest_2: "6.31", Interest_3: "6.40", Interest_4: "6.65", Interest_5: "6.80"}
	db.Create(msg2)
	r.PUT("/calc/bonus/borrow", func(c *gin.Context) {
		body, _ := io.ReadAll(c.Request.Body)
		defer c.Request.Body.Close()
		var u1 MsgBorrow
		err := json.Unmarshal(body, &u1)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		if u1.Interest_1 == "" {
			u1.Interest_1 = msg2.Interest_1
		}
		if u1.Interest_2 == "" {
			u1.Interest_2 = msg2.Interest_2
		}
		if u1.Interest_3 == "" {
			u1.Interest_3 = msg2.Interest_3
		}
		if u1.Interest_4 == "" {
			u1.Interest_4 = msg2.Interest_4
		}
		if u1.Interest_5 == "" {
			u1.Interest_5 = msg2.Interest_5
		}
		db.Model(&u1).Debug().Updates(u1)
		db.First(&msg2)
	})

	//计算利率
	r.POST("/calc/bonus", func(c *gin.Context) {
		body, _ := io.ReadAll(c.Request.Body)
		defer c.Request.Body.Close()
		var u1 Bonus
		err := json.Unmarshal(body, &u1)
		if err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}
		yearsFloat, err := strconv.ParseFloat(u1.Years, 64)
		if err != nil {
			// 处理转换错误的情况
			u1.Ans = "error"
			c.JSON(http.StatusOK, gin.H{
				"ans": u1.Ans,
			})
			return
		}
		temp := "xxx"
		if u1.Select_option == "save" {
			if u1.Option2 == "alive" {
				temp = msg1.Alivebonus
			} else if yearsFloat <= 0.25 {
				temp = msg1.Three_month
			} else if yearsFloat <= 0.5 {
				temp = msg1.Half_year
			} else if yearsFloat <= 1 {
				temp = msg1.A_year
			} else if yearsFloat <= 2 {
				temp = msg1.Two_year
			} else if yearsFloat <= 3 {
				temp = msg1.Three_year
			} else if yearsFloat > 3 {
				temp = msg1.Five_year
			}
			// temp = temp
		} else {
			if yearsFloat <= 0.5 {
				temp = msg2.Interest_1
			} else if yearsFloat <= 1 {
				temp = msg2.Interest_2
			} else if yearsFloat <= 3 {
				temp = msg2.Interest_3
			} else if yearsFloat < 5 {
				temp = msg2.Interest_4
			} else if yearsFloat >= 5 {
				temp = msg2.Interest_5
			}
			// temp = temp
		}

		calcS := fmt.Sprintf("%s * %s * %s", u1.Money, temp, u1.Years)
		result, err := engine.ParseAndExec(calcS)
		if err != nil {
			u1.Ans = "error"
		} else {
			result /= 100
			u1.Ans = fmt.Sprintf("%v", result)
		}
		c.JSON(http.StatusOK, gin.H{
			"ans": u1.Ans,
		})
	})
	r.Run(":9090")
}
