<template>
  <div>
    <div class="title2">登录密码重置</div>
    <el-form class="mt-60" label-position="left" :model="form" ref="form" :rules="formRules" label-width="98px">
      <el-form-item prop="oldPwd" label="原登录密码：">
        <el-input type="password" v-model="form.oldPwd"></el-input>
      </el-form-item>
      <el-form-item prop="newPwd" label="新登录密码：">
        <el-input type="password" v-model="form.newPwd"></el-input>
      </el-form-item>
      <el-form-item prop="checkPwd" label="确认新密码：">
        <el-input type="password" v-model="form.checkPwd"></el-input>
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
        oldPwd: '',
        newPwd: '',
        checkPwd: ''
      },
      formRules: {
      }
    }
  },
  methods: {
    submit () {
    }
  }
}
</script>

<style scoped>

</style>
