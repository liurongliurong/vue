<template>
  <div>
    <div class="title2"><div class="breadcrumb"><router-link to="/security/center">安全中心</router-link><span class="angle">></span>绑定邮箱</div></div>
    <el-form class="mt-60" label-position="right" :model="form" ref="form" :rules="formRules" label-width="100px">
      <el-form-item prop="email" label="邮箱：">
        <el-input v-model="form.email"></el-input>
        <div class="tip">绑定的邮箱可以用来登录，密码与原密码一致，绑定后不可修改</div>
      </el-form-item>
      <el-form-item prop="emailCode" label="邮箱验证码：">
        <el-input class="code-input" v-model="form.emailCode"></el-input><el-button :plain="true" class="send-code is-hover" type="success">获取验证码</el-button>
      </el-form-item>
       <el-form-item label="手机：">
        <span class="bold">{{form.phone}}</span>
      </el-form-item>
      <el-form-item prop="phoneCode" label="短信验证码：">
        <el-input class="code-input" v-model="form.phoneCode"></el-input><el-button :plain="true" class="send-code is-hover" type="success">获取验证码</el-button>
      </el-form-item>
       <el-form-item>
        <el-button class="form-btn-block mt-40" type="success" @click="submit('form')" size="large">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        emailCode: '',
        phone: '134****4125',
        phoneCode: ''
      },
      formRules: {}
    }
  }
}
</script>

<style scoped>
.tip{
  color: #999;
  font-size: 12px;
}

.el-form-item{
  margin-bottom: 7px;
}
</style>
