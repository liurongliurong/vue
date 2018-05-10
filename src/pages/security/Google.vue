<template>
  <div class="relative">
    <div class="title2">谷歌验证</div>
    <div class="erweima-box">
      <img src="../../assets/images/google.png" alt="">
      <div class="tip">可通过谷歌验证码扫一扫即可绑定</div>
    </div>
    <el-form class="mt-40" label-position="right" :model="form" ref="form1" :rules="formRules" label-width="97px">
      <el-form-item prop="key" label="密钥：">
        <span class="bold">{{form.key}}</span>
      </el-form-item>
      <el-form-item prop="googleCode" label="谷歌验证码：">
        <el-input v-model="form.googleCode"></el-input>
        <div><el-checkbox v-model="form.checked1">设置二次认证方式为通过“短信验证码+谷歌验证码”</el-checkbox></div>
        <div class="check2"><el-checkbox v-model="form.checked2">设置提现验证方式为通过“资金密码+短信验证码+谷歌验证码”</el-checkbox></div>
      </el-form-item>
      <el-form-item prop="phone" label="手机：">
        <span class="bold">{{form.phone}}</span>
      </el-form-item>
      <el-form-item prop="code" label="短信验证码：">
        <el-input class="code-input" v-model="form.code"></el-input><el-button class="send-code is-hover" :plain="true" type="success">获取验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button class="form-btn-block mt-20" type="success" @click="submit('form')" size="large">提交</el-button>
      </el-form-item>
    </el-form>
    <div class="install-box">
      <div class="title">如何安装谷歌验证码?</div>
      <div class="item"><span class="name">iPhone手机</span><span class="describe">在App Store中搜索Google Authenticator</span><span class="download">下载应用</span></div>
      <div class="item"><span class="name">Android手机</span><span class="describe">在安卓应用市场中搜索“谷歌身份验证器”，或搜索Google Authenticator</span><span class="download">下载应用</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        key: '3949HKHK8990',
        checked1: false,
        checked2: false,
        phone: '134****4125'
      },
      formRules: {
      }
    }
  }
}
</script>

<style scoped>
.check2{
  line-height: 0;
}

.erweima-box{
  position: absolute;
  top: 101px;
  right: 0;
  width: 350px;
  height: 297px;
  border-left: 1px dashed #ddd;
  text-align: center;
  & .tip{
    margin-top: 14px;
    color: #999;
  }
  & img{
    width: 124px;
    height: 123px;
  }
}

.install-box{
  margin-top: 80px;
  border: 1px solid #ddd;
  & .title{
    height: 60px;
    line-height: 60px;
    padding-left: 24px;
    font-weight: bold;
    background-color: #f9f9f9;
  }
  & .item{
    height: 55px;
    line-height: 55px;
    border-top: 1px solid #ddd;
    & .name{
      display: inline-block;
      width: 179px;
      padding-left: 24px;
    }
    & .describe{
      display: inline-block;
      width: 581px;
    }
    & .download{
      color: #1698EB;
      cursor: pointer;
    }
  }
}
</style>
