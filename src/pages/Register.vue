<template>
  <div class="content">
    <div class="container">
      <div class="form-box1">
        <div class="head">欢迎注册</div>
        <el-form class="form" :model="form" ref="form" :rules="rules" label-position="left">
          <el-form-item prop="account" label="手机号/邮箱">
            <el-input v-model="form.account" placeholder="请输入手机号/邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="code" label="验证码">
            <el-input class="form-code-input" v-model="form.code" placeholder="请输入验证码"></el-input><span class="send-code-btn">获取验证码</span>
          </el-form-item>
          <el-form-item prop="inviteCode" label="邀请码">
            <el-input v-model="form.inviteCode" placeholder="请输入邀请码"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="设置密码">
            <el-input type="password" v-model="form.password" placeholder="请输入8-20位密码，必须包含字母、数字"></el-input>
          </el-form-item>
          <el-form-item prop="confirmPwd" label="确认密码">
            <el-input type="password" v-model="form.confirmPwd" placeholder="请再次确认密码"></el-input>
          </el-form-item>
          <el-button class="btn-block mt-60" type="success" @click="confirm('form')" size="large">同意协议并提交</el-button>
          <div class="protocol-line"><span class="protocol">《碳交易所用户注册协议》</span></div>
        </el-form>
      </div>
    </div>
    <div class="copyright">Copyright © 2011-{{year}}    浙江数秦科技有限公司    All Rights Reserved 浙ICP备15025396号-1</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        account: '',
        code: '',
        inviteCode: '',
        password: '',
        confirmPwd: ''
      },
      rules: {
        account: [
          {
            required: true,
            message: '请输入手机号/邮箱',
            trigger: 'blur'
          },
          {
            validator: (rule, value, cb) => {
              if (value.indexOf('@') !== -1) {
                if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
                  cb(new Error('邮箱格式有误，请修改'))
                }
              } else {
                if (!/^\d{11}$/.test(value)) {
                  cb(new Error('手机号格式有误，请修改'))
                }
              }
              cb()
            },
            trigger: 'blur'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
          },
          {
            validator: (rule, value, cb) => {
              if (!/^\d{6}$/.test(value)) {
                cb(new Error('请正确输入6位数字验证码'))
              }
              cb()
            },
            trigger: 'blur'
          }
        ],
        inviteCode: [
          {
            required: true,
            message: '请输入邀请码',
            trigger: 'blur'
          },
          {
            validator: (rule, value, cb) => {
              cb()
            },
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入8-20位密码，必须包含字母、数字',
            trigger: 'blur'
          },
          {
            validator: (rule, value, cb) => {
              cb()
            },
            trigger: 'blur'
          }
        ],
        confirmPwd: [
          {
            required: true,
            message: '请再次确认密码',
            trigger: 'blur'
          },
          {
            validator: (rule, value, cb) => {
              if (this.form.password !== this.form.confirmPwd) {
                cb(new Error('两次输入的密码不一致，请重新输入'))
              }
              cb()
            },
            trigger: 'blur'
          }
        ]
      }
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
}

.protocol-line{
  margin-top: 25px;
  padding-bottom: 115px;
  position: relative;
  border-top: 1px solid #ddd;
  & .protocol{
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    color: #1687ee;
    padding: 0 13px;
    background-color: #fff;
  }
}

.copyright{
  text-align: center;
  padding-bottom: 30px;
}
</style>
