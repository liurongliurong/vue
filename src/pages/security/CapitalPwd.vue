<template>
  <div>
    <div class="title2">资金密码重置</div>
    <el-form class="mt-60" label-position="right" :model="form" ref="form" :rules="formRules" label-width="126px">
      <el-form-item prop="newPwd" label="新资金密码：">
        <el-input type="password" v-model="form.newPwd"></el-input>
      </el-form-item>
      <el-form-item prop="checkPwd" label="确认新资金密码：">
        <el-input type="password" v-model="form.checkPwd"></el-input>
      </el-form-item>
      <el-form-item label="账号：">
        <span class="bold">{{form.account}}</span>
      </el-form-item>
      <el-form-item prop="code" label="验证码:">
        <el-input class="code-input" v-model="form.code"></el-input><el-button :plain="true" class="send-code is-hover" type="success">获取验证码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button class="form-btn-block" type="success" @click="submit('form')" size="large">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        newPwd: '',
        checkPwd: '',
        account: '134****4125',
        code: ''
      },
      formRules: {
      }
    }
  },
  methods: {
    submit () {}
  }
}
</script>
