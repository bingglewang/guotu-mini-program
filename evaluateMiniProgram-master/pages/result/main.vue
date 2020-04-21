<template>
	<view class="query-result">
		<view class="bg-green">
			<view class="grid margin-bottom text-center col-1">
				<view class="" ><span style="color: white;font-size: 20px;font-weight: bold;"> {{ detailAddress }}</span></view>
			</view>
			  <div class="result-form-input">
			        <div class="result-input-item" v-if="ownStatus!=''">{{ownStatus}}</div>
			        <div class="result-input-item">{{area}}㎡</div>
			        <div class="result-input-item" v-if="house_type!=''">{{house_type}}</div>
			        <div class="result-input-item" v-if="floor!=''">{{floor}}</div>
			        <div class="result-input-item" v-if="orientation!=''">{{orientation}}</div>
			        <div class="result-input-item" v-if="degree_decoration!=''">{{degree_decoration}}</div>
			        <div class="result-input-item" v-if="build_type!=''">{{build_type}}</div>
			      </div>
			<view class="grid margin-bottom text-center col-1">
					<view class="" style="font-weight: bold;">一 评估于{{ queryTime }} 一</view>
			</view>
			<view class="grid margin-bottom text-center col-2">
				<view class="" ><span style="font-size: 20px;font-weight: bold;"> {{totalPrice}}</span></view>
				<view class="" ><span style="font-size: 20px;font-weight: bold;"> {{ queryResult11 }}</span></view>
				<view class="" ><span style="font-weight: bold;">总价(万元)</span></view>
				<view class="" style="margin-bottom: 15px;"><span style="font-weight: bold;">单价(元/平方米)</span></view>
			</view>
		</view>

	<!-- <view class="flex">
		<view class="bg-white flex-sub radius shadow-lg">
			<image src="http://47.110.55.133:8080/uploads/gif/20191017/1571316544215.gif" mode="aspectFit" class="gif-white response" style="height:240upx"></image>
		</view>
	</view> -->
	<view class="bg-white">      
		<view class="grid text-center col-2">
			<view class=" bg-white" ><button class="bg-gradual-green" style="margin-top: 15px;border-radius: 100px;width: 80%;" @click="toEvaluatePage"><span>继续</span><span>评估</span></button></view>
			<view class="bg-white "><button class="bg-gradual-green" style="margin-top: 15px;border-radius: 100px;width: 80%;" @click="toAboutPage"><span>联系</span><span>国咨</span></button></view>
		</view>
	</view>
		
	</view>
</template>

<script>
import { dateFormat } from '@/utils/index';
import uniTag from '@/components/uni-tag/uni-tag.vue';
export default {
	components: {
		uniTag
	},
	data() {
		return {
			queryTime: '2019-09-10 22:11:22',
			detailAddress: '万象心都',
			buildYear: '',
			area: '33',
			house_type: '33室22厅33卫',
			floor: '22层22层',
			orientation: '南北',
			degree_decoration: '豪装',
			build_type: '',
			ownStatus: '',
			queryResult11: '32',
			totalPrice: '2345'
		};
	},
	methods: {
		//获取缓存里面的数据
		getLocalStory() {
			let queryResult = wx.getStorageSync('queryRecord');
			this.queryTime = dateFormat(new Date(queryResult.queryDate), 'yyyy-MM-dd hh:mm:ss');
			this.detailAddress = queryResult.detailAddress;
			this.buildYear = queryResult.buildYear != '' ? queryResult.buildYear + '年' : ' ';
			this.area = queryResult.area != '' ? queryResult.area + 'm²' : ' ';
			this.house_type = queryResult.houseType;
			this.floor = queryResult.floor;
			this.orientation = queryResult.orientation;
			this.degree_decoration = queryResult.degreeDecoration;
			this.build_type = queryResult.buildType;
			this.ownStatus = queryResult.ownStatus;
			this.queryResult11 = queryResult.queryResult != '' ? queryResult.queryResult : '0';
			this.totalPrice = ((parseFloat(this.queryResult11) * parseFloat(this.area)) / 10000).toFixed(0);
		},
		//关于公司页面
		toAboutPage() {
			const url = '../about/main';
			wx.navigateTo({ url });
		},
		//关于公司页面
		toEvaluatePage() {
			const url = '../evaluate/main';
			wx.navigateTo({ url });
		}
	},
	mounted() {
		this.getLocalStory();
	}
};
</script>

<style lang="scss">
page {
	height: 100%;
	width: 100%;
}
 .result-form-input{
	 display: flex;
	 justify-content: center;
	 align-items: center;
        .result-input-item{
          font-size: 10px;
          display: inline-block;
          margin-left: 10px;
          margin-bottom: 10px;
		  border: 2px solid white;
          border-radius: 6px;
		  padding: 0px 2px;
          color: white;
          background-color: bg-green;
        }
      }
.example-body {
	display: flex;
	align-items: center;
	padding: 20upx;
}
.tag-view {
	margin: 5upx 10upx;
	display: inline-block;
}
.danweiresult {
	border: 2px solid #e7e7e7;
	font-size: 12px;
	float: right;
	color: gray;
	border-radius: 3px;
	padding: 0 5px;
	margin-top: 10px;
	/* text-align: right;*/
	font-family: 'Microsoft YaHei UI';
}

</style>
