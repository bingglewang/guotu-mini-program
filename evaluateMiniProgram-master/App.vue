<script>
	/* export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	} */
	export default {
    methods: {
	 async getOpenId(){
		  let _this = this;
		  let getUserInfo = {
		   openId:wx.getStorageSync('userSession').token
		  };
		 let resp2 = await _this.$post1('admin/getUserInfo',getUserInfo);
		 if(!(resp2.data.length > 0) ){
			 const url = '../login/main'
			wx.reLaunch({
			  url: url,
			}) 
		 }
	  },
      getSetting() {
        let _this = this;
        wx.login({
          success: async function (reslogin) {
            if (reslogin.code) {
              let url = "api/wx/session";
              let data = {
                code: reslogin.code
              }
              let res1 = await _this.$post(url, data);
              wx.setStorageSync('userSession', res1);
							console.log("app刚进来：" + res1);
							// 调用后台获取房价token
							let url2 = "fj/getToken";
							let res2 = await _this.$post(url2);
							wx.setStorageSync('fjSession', res2);
              console.log("app刚进来2：" + res2);
            }
          }
        })
        wx.getSetting({
          success: function (resSetting) {
            if (resSetting.authSetting['scope.userInfo']) {
              console.log('app用户已经授权过')
			  _this.getOpenId()
            } else {
              const url = '../login/main'
              wx.reLaunch({
                url: url,
              })
              console.log('app用户还未授权过')
            }
          }
        })
      },
    },
   onLaunch: function() {
   	console.log('App Launch')
	this.getSetting()
   },
   onShow: function() {
   	console.log('App Show')
	this.getSetting()
   }
  }
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";
	/*每个页面公共css */
	 .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 200 rpx 0;
    box-sizing: border-box;
  }

  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }
	
	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 40upx 0px;
		justify-content: space-between;
	}
	
	.nav-li {
		padding: 30upx;
		border-radius: 12upx;
		width: 45%;
		margin: 0 2.5% 40upx;
		background-image: url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}
	
	.nav-li::after {
		content: "";
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		border-radius: 10upx;
		opacity: 0.2;
		transform: scale(0.9, 0.9);
	}
	
	.nav-li.cur {
		color: #fff;
		background: rgb(94, 185, 94);
		box-shadow: 4upx 4upx 6upx rgba(94, 185, 94, 0.4);
	}
	
	.nav-title {
		font-size: 32upx;
		font-weight: 300;
	}
	
	.nav-title::first-letter {
		font-size: 40upx;
		margin-right: 4upx;
	}
	
	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		margin-top: 20upx;
		position: relative;
	}
	
	.nav-name::before {
		content: "";
		position: absolute;
		display: block;
		width: 40upx;
		height: 6upx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}
	
	.nav-name::after {
		content: "";
		position: absolute;
		display: block;
		width: 100upx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40upx;
		opacity: 0.3;
	}
	
	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36upx;
		margin-right: 1px;
	}
	
	.nav-li text {
		position: absolute;
		right: 30upx;
		top: 30upx;
		font-size: 52upx;
		width: 60upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
	}
	
	.text-light {
		font-weight: 300;
	}
	
	@keyframes show {
		0% {
			transform: translateY(-50px);
		}
	
		60% {
			transform: translateY(40upx);
		}
	
		100% {
			transform: translateY(0px);
		}
	}
	
	@-webkit-keyframes show {
		0% {
			transform: translateY(-50px);
		}
	
		60% {
			transform: translateY(40upx);
		}
	
		100% {
			transform: translateY(0px);
		}
	}
	
</style>
