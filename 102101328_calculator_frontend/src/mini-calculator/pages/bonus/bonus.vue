<template>
	<view class="content bg_color">
		<MyNavigationbarVue title="利率计算器" :is_show_temp="is_show" @sendback="getNewData"/>
		<view class="bonus_table" v-if="bonus_table">
			<view class="save_bonus">
				<view style="font-size: 50rpx; margin: 20rpx;">
					存款利率
				</view>
				<form @submit="edit_save_bonus">
					<view class="bonus_txt">
						活期存款：
					</view>
					<input class="uni-input" type="number" placeholder="活期存款利率" v-model="alive_bonus" />
					<view class="bonus_txt">
						整存整取定期存款
					</view><br>
					<view class="bonus_txt">
						三个月：
					</view>
					<input class="uni-input" placeholder="定期存款三个月利率" v-model="three_month_save_bonus"/>
					<view class="bonus_txt">
						半年：
					</view>
					<input class="uni-input" placeholder="定期存款半年利率" v-model="half_year_save_bonus"/>
					<view class="bonus_txt">
						一年：
					</view>
					<input class="uni-input" placeholder="定期存款一年利率" v-model="a_year_save_bonus"/>
					<view class="bonus_txt">
						二年：
					</view>
					<input class="uni-input" placeholder="定期存款二年利率" v-model="two_year_save_bonus"/>
					<view class="bonus_txt">
						三年：
					</view>
					<input class="uni-input" placeholder="定期存款三年利率" v-model="three_year_save_bonus"/>
					<view class="bonus_txt">
						五年：
					</view>
					<input class="uni-input" placeholder="定期存款五年利率" v-model="five_year_save_bonus"/>
					<button form-type="submit">确认修改</button>
				</form>
			</view>
			<view class="borrow_bonus">
				<view style="font-size: 50rpx; margin: 20rpx;">
					贷款利息
				</view>
				<form @submit="edit_borrow_bonus">
					<view class="bonus_txt">
						各项贷款
					</view><br>
					<view class="bonus_txt">
						六个月：
					</view>
					<input class="uni-input" placeholder="六个月利息" v-model="interest_1"/>
					<view class="bonus_txt">
						一年：
					</view>
					<input class="uni-input" placeholder="六个月利息" v-model="interest_2"/>
					<view class="bonus_txt">
						一至三年：
					</view>
					<input class="uni-input" placeholder="一至三年利息" v-model="interest_3"/>
					<view class="bonus_txt">
						三至五年：
					</view>
					<input class="uni-input" placeholder="三至五年利息" v-model="interest_4"/>
					<view class="bonus_txt">
						五年：
					</view>
					<input class="uni-input" placeholder="五年利息" v-model="interest_5"/>
					<button form-type="submit">确认修改</button>
				</form>
			</view>
			<button @click="shut_down">Quit</button>
		</view>
		<button class="change_bonus" @click="bonus_table_show()">修改利率表</button>
		<view class="bonus_calc" style="padding: 40rpx;">
			<form @submit="bonus_calc">
				<view class="uni-form-item uni-column">
					<view class="title">计算类型</view>
						<radio-group name="radio" @change="radioChange">
							<label>
								<radio value="save" class="botton_dis"/><text>存款</text>
							</label>
							<label>
								<radio value="borrow" class="botton_dis"/><text>贷款</text>
							</label>
						</radio-group>
				</view>
				<view class="uni-form-item uni-column" v-if="select_option==='save'">
					<view class="title">活期/定期存款</view>
						<radio-group name="radio" @change="radioChange2">
							<label>
								<radio value="alive" class="botton_dis"/><text>活期</text>
							</label>
							<label>
								<radio value="dead" class="botton_dis"/><text>定期</text>
							</label>
						</radio-group>
				</view>
				<view class="input_box">
					<label class="inputTxt">存/贷款金额</label>
					<input type="text" class="uni-input" v-model="money">
					<label class="inputTxt">存/贷款年份(单位：年)</label>
					<input type="text" class="uni-input" v-model="years">
				</view>
				<button form-type="submit" class="btn_calc">计算</button>
			</form>
			<p style="font-size: 50rpx; margin: 50rpx;">利率：</p>
			<view class="ans_area">
				{{ans}}
			</view>
		</view>
	</view>
</template>

<script>
	import MyNavigationbarVue from '../../components/MyNavigationbar.vue'
	
	export default{
		data(){
			return{
				title:"利率计算器",
				is_show:true,
				bonus_table:false,
				
				alive_bonus:"",
				three_month_save_bonus:"",
				half_year_save_bonus:"",
				a_year_save_bonus:"",
				two_year_save_bonus:"",
				three_year_save_bonus:"",
				five_year_save_bonus:"",
				
				interest_1:"",
				interest_2:"",
				interest_3:"",
				interest_4:"",
				interest_5:"",
				
				select_option:'',
				option2:"",
				
				money:"",
				years:"",
				ans:"",
				
				
				
			}
			
		},
		components:{
			MyNavigationbarVue
		},
		methods:{
			menu_hide(){
				this.is_show=true;
				this.history_hide=true;
			},
			shut_down(){
				this.bonus_table=false;
			},
			
			getNewData(data){
				this.is_show=data;
			},
			
			bonus_table_show(){
				this.bonus_table=true;
			},
			//提交存款表单
			edit_save_bonus(){
				//console.log(this.alive_bonus);
				var msg={
					alive_bonus:this.alive_bonus,
					three_month_save_bonus:this.three_month_save_bonus,
					half_year_save_bonus:this.half_year_save_bonus,
					a_year_save_bonus:this.a_year_save_bonus,
					two_year_save_bonus:this.two_year_save_bonus,
					three_year_save_bonus:this.three_year_save_bonus,
					five_year_save_bonus:this.five_year_save_bonus
				};
				fetch('http://localhost:9090/calc/bonus/save',{
					method:'PUT',
					headers: {
					    'Content-Type': 'application/json'  
					},  
					body: JSON.stringify(msg)
				})
			},
			
			edit_borrow_bonus(){
				var msg={
					interest_1:this.interest_1,
					interest_2:this.interest_2,
					interest_3:this.interest_3,
					interest_4:this.interest_4,
					interest_5:this.interest_5,
				};
				fetch('http://localhost:9090/calc/bonus/borrow',{
					method:'PUT',
					headers: {
					    'Content-Type': 'application/json'  
					},  
					body: JSON.stringify(msg)
				})
			},
			
			bonus_calc(){
				//console.log(this.select_option);
				// this.$forceUpdate();
				var msg={
					money:this.money,
					years:this.years,
					select_option:this.select_option,
					option2:this.option2,
				};
				fetch('http://localhost:9090/calc/bonus',{
					method:'POST',
					headers: {
					    'Content-Type': 'application/json'  
					},  
					body: JSON.stringify(msg)
				})
				.then(response => {
				    if (!response.ok) {  
				        throw new Error('Network response was not ok');  
				    }  
				    return response.json(); // 或者 response.text()，取决于服务器返回的内容类型  
				})  
				.then(data=>{
					//console.log(data)
					this.ans=data.ans;
				})
			},
			
			radioChange: function(evt){
				this.select_option=evt.detail.value;
			},
			radioChange2: function(evt){
				this.option2=evt.detail.value;
			},
		}
		
	}
</script>

<style>
	@import ".././calculate/calculate.css";
	
	.bonus_table{
		display: flex;
		flex-direction: column;
		position: absolute;
		left: 0px;
		top:0px;
		width: 100%;
		z-index: 99;
		background-color: #f8f8f8;
	}
	.save_bonus{
		flex:1;
		margin: 40rpx;
	}
	.borrow_bonus{
		flex:1;
		margin: 40rpx;
	}
	.bonus_txt{
		margin-bottom: ;
	}
	.uni-input{
		background-color: #ffffff;
		margin-bottom: 50rpx;
	}
	
	.bg_color{
		background-color: #f8f8f8;
	}
	.btn_calc{
		background-color: #00bbbe;
		color: #ffffff;
	}
	.change_bonus{
		/* background-color: #fafafa; */
		/* border-width:50px; */
		color: #787878;
		border-radius: 50rpx;
		position: relative;
		left: 100rpx;
		top: 10rpx;
	}
	.bonus_txt{
		margin-bottom: 40rpx;
	}
	.uni-input{
		font-size: 45rpx;
		
	}
	.title{
		margin-bottom: 20rpx;
	}
	.botton_dis{
		margin-bottom: 40rpx;
	}
</style>