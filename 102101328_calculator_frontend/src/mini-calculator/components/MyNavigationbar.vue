<template>
    <view>
        <view class="status_bar">
            <!-- 这里是状态栏 -->
        </view>
        <view class="navBar" style="height:93rpx;">
             <view  style="display: flex; flex-direction: row;align-items: center;">
             	<image src="../static/back.png" style="height: 80rpx;width: 80rpx;" @click="goback"></image>
				<image src="../static/menu.png" style="height: 60rpx;width: 60rpx; margin-right: 40rpx;" @click="menu_show"></image>
				<p style="line-height: 80rpx;">{{title}}</p>
             </view>
        </view>
		
		
		<view class="menu_content" :hidden="is_show_temp">
			
			<!-- <view :hidden="title === '科学计算器' "> -->
			<view v-if="title === '标准计算器'">
				<view class="standar" style="background-color: #dbdbdb;" >
					<view style="width: 10rpx; height: 40rpx; background-color: #00bbbe; margin-left: 10rpx; border-radius: 30%;" ></view>
					<image src="../static/standar_icon.png" style="width:50rpx; height:55rpx; margin-right: 7rpx;" ></image>
					<p style="line-height: 40rpx;">标准计算器</p>
				</view>
				<view class="standar" hover-class="hover_option" hover-stay-time="10s" style="margin-top: 40rpx;" @click="goto_science">
					<view style="width: 10rpx; height: 40rpx; background-color: #f8f8f8; margin-left: 10rpx; border-radius: 30%;" ></view>
					<image src="../static/science_icon.png" style="width:35rpx; height:45rpx; margin-right: 10rpx; margin-left: 10rpx;" ></image>
					<p style="line-height: 40rpx;">科学计算器</p>
				</view>
				<view class="standar" hover-class="hover_option" hover-stay-time="10s" style="margin-top: 40rpx;" @click="goto_bonus">
					<view style="width: 10rpx; height: 40rpx; background-color: #f8f8f8; margin-left: 10rpx; border-radius: 30%;" ></view>
					<image src="../static/bonus.png" style="width:50rpx; height:50rpx; margin-right: 7rpx;" ></image>
					<p style="line-height: 40rpx;">利率计算器</p>
				</view>
			</view>
			
			
			<!-- <view :hidden="title === '标准计算器'"> -->
			<view v-if="title === '科学计算器'">
				<view class="standar" @click="goto_standar" hover-class="hover_option" hover-stay-time="10s" style="margin-top: 40rpx;" >
					<view style="width: 10rpx; height: 40rpx; background-color: #f8f8f8; margin-left: 10rpx; border-radius: 30%;" ></view>
					<image src="../static/standar_icon.png" style="width:50rpx; height:55rpx; margin-right: 7rpx;" ></image>
					<p style="line-height: 40rpx;">标准计算器</p>
				</view>
				<view class="standar" style="background-color: #dbdbdb;">
					<view style="width: 10rpx; height: 40rpx; background-color: #00bbbe; margin-left: 10rpx; border-radius: 30%;" ></view>
					<image src="../static/science_icon.png" style="width:35rpx; height:45rpx; margin-right: 10rpx; margin-left: 10rpx;" ></image>
					<p style="line-height: 42rpx;">科学计算器</p>
				</view>
				<view class="standar" @click="goto_bonus" hover-class="hover_option" hover-stay-time="10s" style="margin-top: 40rpx;" >
					<view style="width: 10rpx; height: 40rpx; background-color: #f8f8f8; margin-left: 10rpx; border-radius: 30%;" ></view>
					<image src="../static/bonus.png" style="width:50rpx; height:50rpx; margin-right: 7rpx;" ></image>
					<p style="line-height: 40rpx;">利率计算器</p>
				</view>
			</view>
			
			<view v-if="title === '利率计算器'">
				<view class="standar" @click="goto_standar" hover-class="hover_option" hover-stay-time="10s" style="margin-top: 40rpx;" >
					<view style="width: 10rpx; height: 40rpx; background-color: #f8f8f8; margin-left: 10rpx; border-radius: 30%;" ></view>
					<image src="../static/standar_icon.png" style="width:50rpx; height:55rpx; margin-right: 7rpx;" ></image>
					<p style="line-height: 40rpx;">标准计算器</p>
				</view>
				<view class="standar" @click="goto_science" hover-class="hover_option" hover-stay-time="10s" style="margin-top: 40rpx;">
					<view style="width: 10rpx; height: 40rpx; background-color: #f8f8f8; margin-left: 10rpx; border-radius: 30%;" ></view>
					<image src="../static/science_icon.png" style="width:35rpx; height:45rpx; margin-right: 10rpx; margin-left: 10rpx;" ></image>
					<p style="line-height: 42rpx;">科学计算器</p>
				</view>
				<view class="standar" style="background-color: #dbdbdb;" >
					<view style="width: 10rpx; height: 40rpx; background-color: #00bbbe; margin-left: 10rpx; border-radius: 30%;" ></view>
					<image src="../static/bonus.png" style="width:50rpx; height:50rpx; margin-right: 7rpx;" ></image>
					<p style="line-height: 40rpx;">利率计算器</p>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		
		data(){
			return{
				// is_show:this.is_show_temp,
			}
		},
	    props:{
			title:{
				type:String,
				default:"",
				
			},
			is_show_temp:{
				type:Boolean,
				default:true,
				
			},
			
		},
			
		methods:{
			goback(){
				uni.navigateBack()
			},
			
			
			
			menu_show(){
				// this.is_show=!this.is_show;
				this.$emit("sendback",!this.is_show_temp);
				
			},
			
			goto_standar(){
				uni.navigateTo({
					url:'/pages/calculate/calculate'
				})
			},
			
			goto_science(){
				uni.navigateTo({
					url:'/pages/science/science'
				})
			},
			
			goto_bonus(){
				uni.navigateTo({
					url:'/pages/bonus/bonus'
				})
			}
		}
			
	}
</script>

<style>
	
	 .status_bar {
	        height: var(--status-bar-height);
	        width: 100%;
	    }
	
/* 	.menu{
		position: absolute;
		left: 0px;
		top: 0px;
		z-index: 100;
		display: flex;
		background-color: #f8f8f8;
		justify-content: center;
		align-items: center;
	} */
	
	/* .hover_menu_icon{
		width: 25rpx;
		height: 50rpx;
	} */
	
	.menu_content{
		position: absolute;
		width: 50%;
		height: 100%;
		background-color: #f8f8f8;
		z-index: 99;
	}
	
	.menu_icon{
			
			height: 45rpx;
			width:45rpx;
			
	}
	
	.standar{
		margin-top: 10rpx;
		display: flex;
		align-items: center;
		flex-direction: row;
		width: 100%;
		height: 100rpx;
	}
	
	.hover_option{
		color: #8e8e8e;
		background-color: #6c6c6c;
	}
</style>