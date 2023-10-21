<template>
	<view class="content" >
		
		<MyNavigationbarVue title="科学计算器" :is_show_temp="is_show" @sendback="getNewData"/>
		
		
		<view class="screen" @click="menu_hide">
			<view class="calculate_string_area">
				{{calculate_string}}
			</view> 
			<view class="ans_area">
				{{ans}}
			</view>
		</view>
		
		<view class="button_group" >
			<view v-for="(item,index) in button_items" :key="index" class="button_item" 
			:id="item.id" hover-class="hover_button_item" hover-stay-time="1.5s" @click="click_button(item)">
				{{item.value}}
			</view>
		</view>
		
		
		<view class="history_list" :hidden="history_hide">
			<view class="history_title">
				<h1>History</h1>
			</view>
			<view class="history_item_group">
				<view class="history_item" v-for="(item,index) in history_list" :key="index" 
				hover-class="hover_item" hover-stay-time="1.5s" @click="get_history_item(item)">
					{{ item.calc_s}}
					<p class="cu">={{item.ans}}</p>
				</view>
			</view>
			
		</view>
		
	</view>
</template>


<script>
	// import {evalMath} from "../../components/eval-math.js";
	import MyNavigationbarVue from '../../components/MyNavigationbar.vue'
	
	export default{
		data(){
			return{
				title:"科学计算器",
				
				is_show:true,
				to_calculate_string:"",
				calculate_string:"",
				ans:"0",
				is_new:1,
				history_hide:true,
				//历史记录
				history_list:[{
					
				}],
				
				
				button_items:[
					{
						id:'clear',
						value:"C",
						item_type:"function",
						
					},
					{
						id:"history",
						value:"Ans",
						item_type:"function"
					},
					{
						id:"sqrt",
						value:"√",
						item_type:"operation",
						
					},
					{
						id:"mod",
						value:"%",
						item_type:"operation",
						
					},
					{
						id:"backspace",
						value:"Back",
						item_type:"function",
						
					},
					{
						id:"sec",
						value:"sec",
						item_type:"function",
						
					},
					{
						id:"csc",
						value:"csc",
						item_type:"function",
						
					},
					{
						id:"cot",
						value:"cot",
						item_type:"function",
						
					},
					{
						id:"log2",
						value:"log2",
						item_type:"function",
						
					},
					{
						id:"e",
						value:"E",
						item_type:"function",
						
					},
					{
						id:"sin",
						value:"sin",
						item_type:"function",
						
					},
					{
						id:"(",
						value:"(",
						item_type:"number",
						
					},
					{
						id:")",
						value:")",
						item_type:"number",
						
					},
					{
						id:"mi",
						value:"^",
						item_type:"function",
						
					},
					{
						id:"divide",
						value:"÷",
						item_type:"operation",
						
					},
					{
						id:"cos",
						value:"cos",
						item_type:"function",
					},
					{
						id:"7",
						value:"7",
						item_type:"number",
						
					},
					{
						id:"8",
						value:"8",
						item_type:"number",
						
					},
					{
						id:"9",
						value:"9",
						item_type:"number",
						
					},
					{
						id:"mul",
						value:"×",
						item_type:"operation",
						
					},
					{
						id:"tan",
						value:"tan",
						item_type:"function",
						
					},
					{
						id:"4",
						value:"4",
						item_type:"number",
						
					},
					{
						id:"5",
						value:"5",
						item_type:"number",
						
					},
					{
						id:"6",
						value:"6",
						item_type:"number",
						
					},
					{
						id:"sub",
						value:"-",
						item_type:"operation",
						
					},
					{
						id:"lg",
						value:"lg",
						item_type:"function",
						
					},
					{
						id:"1",
						value:"1",
						item_type:"number",
						
					},
					{
						id:"2",
						value:"2",
						item_type:"number",
						
					},
					{
						id:"3",
						value:"3",
						item_type:"number",
						
					},
					{
						id:"add",
						value:"+",
						item_type:"operation",
						
					},
					{
						id:"ln",
						value:"ln",
						item_type:"function",
						
					},
					{
						id:"pai",
						value:"π",
						item_type:"number",
						
					},
					{
						id:"0",
						value:"0",
						item_type:"number",
						
					},
					{
						id:"dot",
						value:".",
						item_type:"number",
						
					},
					{
						id:"equal",
						value:"=",
						item_type:"function",
						
					},
				],
			}
		},
		
		components:{
			MyNavigationbarVue
		},
		
		methods:{
			
			math_trans(v){
			    // 添加你的数学转换逻辑  
				if(v==='×'){
					this.ans+='×';
					this.to_calculate_string+='*';
				}
				else if(v==='÷'){
					//return '/';
					this.ans+='÷';
					this.to_calculate_string+='/';
				}
				else if(v==='√'){
					//return "sqrt(";
					this.ans+="√("	;
					this.to_calculate_string+="sqrt(";
				}
				else if(v==='sec'){
					this.to_calculate_string+="sec(";
					this.ans+="sec("
				}
				else if(v==="csc"){
					this.to_calculate_string+="csc(";
					this.ans+="csc(";
				}
				else if(v==="cot"){
					this.to_calculate_string+="cot(";
					this.ans+="cot(";
				}
				else if(v==="log2"){
					this.to_calculate_string+="log2(";
					this.ans+="log2(";
				}
				else if(v==="sin"){
					this.to_calculate_string+="sin(";
					this.ans+="sin(";
				}
				else if(v==="cos"){
					this.to_calculate_string+="cos(";
					this.ans+="cos(";
				}
				else if(v==="tan"){
					this.to_calculate_string+="tan(";
					this.ans+="tan(";
				}
				else if(v==='E'){
					this.to_calculate_string+="e";
					this.ans+="E";
				}
				else if(v==="lg"){
					this.to_calculate_string+="lg(";
					this.ans+="lg(";
				}
				else if(v==="ln"){
					this.to_calculate_string+="log(";
					this.ans+="ln(";
				}
				else if(v==="π"){
					this.to_calculate_string+="pi";
					this.ans+="π";
				}
				else{
					this.ans+=v;
					this.to_calculate_string+=v;
				}
				return;
			},  
			//返回历史记录
			get_history(){
				this.history_hide=!this.history_hide;
				console.log(this.history_hide);
				fetch('http://localhost:9090/calc/history',{
					method:'GET',
				})
				.then(response => {  
				    if (!response.ok) {  
						console.log(response);
				        throw new Error('Network response was not ok');  
				    }
				    return response.json();
				})  
				.then(data=>{
					//返回前十个历史内容
					this.history_list=data.history_list;
					console.log(this.history_list);
				})
				.catch(error => {
				    console.error('请求出错:', error);  
				    // 这里可以添加更多的错误处理逻辑  
				});
			},
			//删除
			delete_input(){
				if(this.ans[this.ans.length>=2&&this.ans.length-1]=="n"&&this.ans[this.ans.length-2]=="l"){
					this.ans=this.ans.slice(0,-2);
					this.to_calculate_string=this.to_calculate_string.slice(0,-3);
				}
				else if(this.ans.length>=1&&this.ans[this.ans.length-1]=="π"){
					this.ans = this.ans.slice(0, -1);
					this.to_calculate_string=this.to_calculate_string.slice(0,-2);
				}
				else if(this.ans.length>=1&&this.ans[this.ans.length-1]=='√'){
					this.ans = this.ans.slice(0, -1);
					this.to_calculate_string=this.to_calculate_string.slice(0,-4);
				}else{
					this.ans = this.ans.slice(0, -1);
				this.to_calculate_string=this.to_calculate_string.slice(0,-1);
				}
				
				if(this.ans===""){
					this.ans=0;
				}
				return;              
			},
			//按下等号为get,创建为post，修改为put
			click_button(item){
				//定义一个发送的对象
				var tran_data={
					calc_s:this.calculate_string,
					to_calc_s:this.to_calculate_string
				};
				//如果按下的是等号
				if(item.value==='='){
					//console.log(this.to_calculate_string);
					this.is_new=1;
					fetch('http://localhost:9090/calc',{
						method:'GET',
					})
					.then(response => {  
					    if (!response.ok) {  
					        throw new Error('Network response was not ok');  
					    }  
					    return response.json(); // 或者 response.text()，取决于服务器返回的内容类型  
					})  
					.then(data=>{
						console.log(data)
						this.calculate_string=data.calculate_string
						this.to_calculate_string=data.to_calculate_string
						this.ans=data.ans
						
					})
					.catch(error => {  
					    console.error('请求出错:', error);  
					    // 这里可以添加更多的错误处理逻辑  
					});
					this.to_calculate_string="";
					console.log(this.to_calculate_string);
					return;
				}
				//读取历史记录
				else if(item.value==="Ans"){
					this.get_history();
				}
				//清除
				else if(item.value==="C"){
					this.ans="0";
					this.is_new=1;
					this.calculate_string="";
					fetch('http://localhost:9090/calc',{
						method:'DELETE',
						headers: {
						    'Content-Type': 'application/json'  
						},  
						//body: JSON.stringify(tran_data)
					})
				}
			
				else if(item.value==='Back'){
					if(this.ans===0)
						return;
					this.delete_input();
					//清完了
					//console.log(this.ans);
					if(this.to_calculate_string===""){
						this.is_new=1;
						fetch('http://localhost:9090/calc',{
							method:'DELETE',
							headers: {
							    'Content-Type': 'application/json'  
							},  
							body: JSON.stringify(tran_data)
						})
					}
					else{
						tran_data.calc_s=this.ans;
						tran_data.to_calc_s=this.to_calculate_string;
						fetch('http://localhost:9090/calc',{
							method:'PUT',
							headers: {
							    'Content-Type': 'application/json'  
							},  
							body: JSON.stringify(tran_data)
						})
					}
				}
				//按下的不是等号
				else if(this.is_new===1){    //创建
					this.ans="";
					this.to_calculate_string="";
					this.math_trans(item.value);
					tran_data.calc_s=this.ans;
					tran_data.to_calc_s=this.to_calculate_string;
					this.is_new=0;
					
					fetch('http://localhost:9090/calc',{
						method:'POST',
						headers: {  
						    'Content-Type': 'application/json'  
						},  
						body: JSON.stringify(tran_data)
					})
					
				}
				else if(this.is_new==0){    //修改
					this.math_trans(item.value);
					tran_data.calc_s=this.ans;
					tran_data.to_calc_s=this.to_calculate_string;
					fetch('http://localhost:9090/calc',{
						method:'PUT',
						headers: {
						    'Content-Type': 'application/json'  
						},  
						body: JSON.stringify(tran_data)
					})
					
				}
				
			},
			
			
			
			
			menu_hide(){
				this.is_show=true;
				this.history_hide=true;
			},
			
			
			getNewData(data){
				this.is_show=data;
			},
			get_history_item(e){
				this.calculate_string=e.calc_s;
				this.ans=e.ans;
				this.history_hide=true;
			}
			
		}
	}
</script>

<style>
	@import ".././calculate/calculate.css";
	
	.button_item{
		
		width: 20%;
		display: inline;
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		border: 1rpx solid #ffffff;
		background-color: #ffffff;
		font-size: 40rpx;
		text-align: center;
		padding: auto;
	}
	
	
</style>