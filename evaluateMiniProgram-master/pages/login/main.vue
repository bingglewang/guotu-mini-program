<template>
  <div class="user-center">
    <div class="container-user">
      <div class="result-img-title">
        <img src="../../static/images/logo.jpg" class="result-img"/>
      </div>
      <!-- <div class="about-text">广东腾业资产评估及土地房地产估价有限公司</div> -->
      <div class="login-form">
        <div class="form-item">
          <div class="item-label"><span style="color: red;">*</span>姓&nbsp;&nbsp;&nbsp;名</div>
          <div class="item-value">
            <input class="item-input" type="text" v-model="account"/>
          </div>
        </div>
        <div style="height: 25px">
          <span style="display: block;text-align: left;font-size: 13px;color: red;margin-left:35px"
                v-if="!isLoginButton2">请输入中文真实姓名</span>
        </div>
        <div class="form-item">
          <div class="item-label"><span style="color: red;">*</span>手机号</div>
          <div class="item-value">
            <input class="item-input" type="number" maxlength="11" v-model="phoneNumber"/>
          </div>
        </div>
        <div style="height: 25px">
          <span style="display: block;text-align: left;font-size: 13px;color: red;margin-left:35px"
                v-if="!isLoginButton1">请输入合法的11位手机号</span>
        </div>
      </div>
      <button v-if="canIUse" open-type="getUserInfo" @getuserinfo="bindGetUserInfo" type="primary" class="login-button bg-gradual-green"
              :disabled="!(isLoginButton1 && isLoginButton2)">同意授权登录
      </button>
      <view v-else>请升级微信版本</view>
      <div class="about-text" style="color: #9a9a9a;margin-top: 15px">用户首次登陆小程序,需绑定手机号</div>
    </div>

    <div
      style="z-index:998;position: fixed; width:100%;height:30px;top: 0;left:0;background-color: #bfbfbf;opacity:0.42;">
    </div>
    <div style="z-index:998;position: fixed; width:100%;height:30px;top: 0;left:20px;">
      <label style="line-height: 30px;margin-left: 15px;font-size: 1rem;color: #fff;">
        <span style="color:#ffffff;font-size: 15px;text-align: center;font-weight: bold;">绑定手机号体验更优质服务,并提升信息安全性</span>
      </label>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        isLoginButton1: false,
        isLoginButton2: false,
        phoneNumber: '',
        account: ''
      }
    },
    components: {},
    watch: {
      phoneNumber(val) {
        if (/(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/.test(val)) {
          this.isLoginButton1 = true;
        } else {
          this.isLoginButton1 = false;
        }
      },
      account(val) {
        if (/^[\u4E00-\u9FA5]{2,4}$/.test(val)) {
          this.isLoginButton2 = true;
        } else {
          this.isLoginButton2 = false;
        }
      }

    },
    methods: {
      async bindGetUserInfo(e) {
				console.log(666,e)
        let _this = this;
        //此处授权得到userInfo
        if (e.mp.detail.userInfo) {
          let wxUserInfo = e.mp.detail.userInfo;                               //微信用户信息
          let nameAndPhone = {
            userName: this.account,                                            //用户姓名
            phoneNumber: this.phoneNumber,                                     //用户电话号码
            openId: wx.getStorageSync('userSession').token,                    //用户token
            nickName:wxUserInfo.nickName,                                      //微信用户昵称
            userImage:wxUserInfo.avatarUrl,                                    //微信用户头像
            sex:wxUserInfo.gender                                              //用户性别
          };
          let res1 = await _this.$post1('admin/insertUser', nameAndPhone);
          console.log("后台请求数据：" + res1);
					if(res1.status == 0 || res1.status == -1){
						 wx.reLaunch({
							url: '../evaluate/main'
						})	
					}else{
							wx.showToast({
							  title: 登录失败,
							  icon: 'none',
							  duration: 2000
							});
					}
        } else {
          wx.showToast({
            title: "为了您更好的体验,请先同意授权",
            icon: 'none',
            duration: 2000
          });
        }
      }
    },
    mounted() {
    },
    created() {
    }
  }
</script>

<style lang="scss">
  page {
    height: 100%;
    width: 100%;
  }

  .user-center {
    overflow: hidden;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #fff;
    .container-user {
      box-sizing: border-box;
      padding: 0px;
      height: 100%;
      margin-top: 50px;
      background-color: white;
      text-align: center;
      .result-img-title {
        width: 100%;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        .result-img {
           width: 38%;
          height: 80%;
        }
      }
      .about-text {
        text-align: center;
        font-size: 13px;
        color: #0000ae;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .login-form {
        width: 100%;
        height: 150px;
        .form-item {
          border-radius: 4px;
          font-size: 15px;
          border: 1px solid #cfcfcf;
          width: 80%;
          margin-right: auto;
          margin-left: auto;
          height: 45px;
          line-height: 45px;
          .item-label {
            color: #9d9d9d;
            font-weight: bold;
            margin-left: 8px;
            float: left;
            display: inline-block;
            height: 45px;
            line-height: 45px;
          }
          .item-value {
            display: inline-block;
            height: 45px;
            line-height: 45px;
            .item-input {
              height: 45px;
              line-height: 45px;
              text-align: left;
            }
          }
        }
      }
      .login-button {
				border-radius: 100px;
				background-color: #39b54a;
        width: 80%;
      }
    }
  }

</style>
