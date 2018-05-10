<template>
  <div>
    <div class="title2"><div class="breadcrumb"><router-link to="/security/center">安全中心</router-link><span class="angle">></span>绑定手机号</div></div>
    <el-form class="mt-60" label-position="right" :model="form" ref="form" :rules="formRules" label-width="100px">
      <el-form-item prop="phone" label="手机号：">
        <el-input v-model="form.phone"></el-input>
        <div class="tip">绑定的手机号可以用来登录，密码与原密码一致，绑定后不可修改</div>
      </el-form-item>
      <el-form-item prop="phoneCode" label="短信验证码：">
        <el-input class="code-input" v-model="form.phoneCode"></el-input><el-button :plain="true" class="send-code is-hover" type="success">获取验证码</el-button>
      </el-form-item>
       <el-form-item label="邮箱：">
        <span class="bold">{{form.email}}</span>
      </el-form-item>
      <el-form-item prop="emailCode" label="邮箱验证码：">
        <el-input class="code-input" v-model="form.emailCode"></el-input><el-button :plain="true" class="send-code is-hover" type="success">获取验证码</el-button>
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
        email: 'ma***@qq.com',
        emailCode: '',
        phone: '',
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
