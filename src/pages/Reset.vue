<template>
  <div class="content">
    <div class="container">
      <div class="form-box1">
        <div class="head">
          <span :class="{active: isValidation}">验证信息</span><span :class="{line: true, active: !isValidation}" ></span><span :class="{active: !isValidation}">重置密码</span>
        </div>
        <template v-if="isValidation">
          <el-form class="form" :model="form" ref="form" :rules="rules" label-position="left">
            <el-form-item prop="account" label="手机号/邮箱">
              <el-input v-model="form.account" placeholder="请输入手机号/邮箱"></el-input>
            </el-form-item>
            <el-form-item prop="code" label="验证码">
              <el-input class="form-code-input" v-model="form.code" placeholder="请输入验证码"></el-input><span class="send-code-btn">获取验证码</span>
            </el-form-item>
            <el-form-item prop="userType" label="用户类型">
              <el-select v-model="form.userType" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="idNumber" label="身份证">
              <el-input v-model="form.idNumber" placeholder="请输入身份证号"></el-input>
            </el-form-item>
            <el-button class="btn-block mt-60" type="success" @click="confirm('form')" size="large">下一步</el-button>
          </el-form>
        </template>
        <template v-else>
          <el-form class="form" :model="resetForm" ref="resetForm" :rules="resetRules" label-position="left">
            <el-form-item prop="password" label="设置新密码">
              <el-input type="password" v-model="resetForm.password" placeholder="请输入8-20位密码，必须包含字母、数字"></el-input>
            </el-form-item>
            <el-form-item prop="confirmPwd" label="确认密码">
              <el-input v-model="form.confirmPwd" placeholder="请再次确认密码"></el-input>
            </el-form-item>
            <el-button class="btn-block mt-60" type="success" @click="confirm('resetForm')" size="large">下一步</el-button>
          </el-form>
        </template>
      </div>
    </div>
    <div class="copyright">Copyright © 2011-{{year}}    浙江数秦科技有限公司    All Rights Reserved 浙ICP备15025396号-1</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isValidation: true,
      options: [],
      form: {},
      rules: {},
      resetForm: {},
      resetRules: {}
    }
  },
  computed: {
    year () {
      let date = new Date()
      let year = date.getFullYear()
      return year
    }
  },
  methods: {
    confirm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
          this.isValidation = false
        }
      })
    }
  }
}
</script>

<style scoped>
@import '../assets/css/var.css';
.container{
  background-color: #fff;
  margin: 20px auto 30px;
  padding-bottom: 200px;
}

.copyright{
  text-align: center;
  padding-bottom: 30px;
}

.line{
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
  width: 130px;
  border-bottom: 3px solid #eee;
}

.form-box1 .head .active{
  color: var(--mainColor);
  &.line{
    border-color: var(--mainColor);
  }
}
</style>
