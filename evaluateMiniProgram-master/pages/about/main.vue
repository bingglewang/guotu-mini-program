<template>
  <div class="about">
    <div class="about-content">
      <div class="about-img-title">
        <img src="../../static/images/logo.jpg" class="about-img"/>
      </div>
      <div class="about-text">深圳市国咨土地房地产资产评估有限公司广州分公司</div>
      <div class="about-info">
        公司简介：<br/>
        <p style="text-indent: 2em;margin-bottom: 20px">
         深圳市国咨土地房地产资产评估有限公司前身是深圳国际房地产咨询股份有限公司，成立于1988年，是中国内地第一家房地产评估交易代理机构,荣获国务院颁发“中华之最”证书、行业内第一家通过ISO9002国际质量认证；是中国房地产估价师学会会员单位、中国土地估价师协会会员单位、广东省房地产估价师学会会员单位、广东省土地估价师协会理事单位、深圳市不动产估价协会副会员单位；拥有国家建设部一级房地产评估资质、国土资源部A级土地评估资质及国家建设工程造价甲级资质。广州分公司成立于1999年6月，是国咨公司设在广州的分支机构。
        </p>
        联系电话：020-87695797、020-87767495<br/>
        传真: 020-87696096<br/>
		地址: 广州市越秀区中山二路马棚岗22号1801房    
      </div>
     <!-- <div class="about-wx-code">
       <img src="../../static/images/wxnode.png" class="about-img-code"/>
        <div style="font-size: 13px">公司微信号</div>
      </div> -->
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  page {
    height: 100%;
    width: 100%;
  }

  .about {
    overflow: hidden;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #eeeeee;
    .about-content {
      padding: 0px;
      border: 8px solid #eeeeee;
      height: 100%;
      width: 100%;
      background-color: white;
      box-sizing: border-box;
      .about-img-title {
        width: 100%;
        height: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        .about-img {
          width: 38%;
          height: 80%;
        }
      }
    }
    .about-text {
      text-align: center;
      font-size: 13px;
      color: #0000ae;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .about-info {
      font-size: 13px;
      width: 326px;
      margin: 0 auto;
    }
    .about-wx-code {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top:30px;
      .about-img-code {
        width: 100px;
        height: 100px;
      }
    }
  }
</style>
