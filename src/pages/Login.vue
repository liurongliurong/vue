<template>
  <div class="content">
    <div class="container">
      <div class="form-box1">
        <div class="head">会员登录</div>
        <!-- tab 切换 -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="账户登录" name="first">
            <el-form class="form" :model="form1" ref="form1" :rules="rules1" label-position="left">
              <el-form-item prop="username" label="手机号/邮箱">
                <el-input v-model="form1.username" placeholder="请输入手机号/邮箱"></el-input>
              </el-form-item>
              <el-form-item prop="password" label="登录密码">
                <el-input type="password" v-model="form1.password" placeholder="请输入登录密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="large" type="primary" @click="submit('form1')">立即登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="短信登录" name="second">
            <el-form class="form" :model="form2" ref="form2" :rules="rules2" label-position="left">
              <el-form-item prop="telNum" label="手机号/邮箱">
                <el-input v-model="form2.telNum" placeholder="请输入手机号/邮箱"></el-input>
              </el-form-item>
              <el-form-item prop="code" class="form-code" label="验证码">
                <el-input class="form-code-input" v-model="form2.code" placeholder="请输入验证码"></el-input><span class="send-code-btn">获取验证码</span>
              </el-form-item>
              <el-form-item>
                <el-button size="large" type="primary" @click="submit('form2')">立即登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
        <router-link class="link forget" to='/reset'>忘记密码</router-link>
        <div class="formFoot">
          没有账号？<router-link class="link" to='/register'>立即注册</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号/邮箱不能为空'));
      }
      setTimeout(() => {
        if (value.indexOf('@') !== -1) {
            if (!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value)) {
              callback(new Error('邮箱格式有误，请修改'))
            }
          } else {
            if (!/^\d{11}$/.test(value)) {
              callback(new Error('手机号格式有误，请修改'))
            } else {
            callback();
          }
        }
      }, 1000);
    };
    var checkCode = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'));
      }
      setTimeout(() => {
        if (!/^\d{6}$/.test(value)) {
          cb(new Error('请正确输入6位数字验证码'))
        } else {
          callback();
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        // 登录密码，只判断是否正确未判断格式
        callback();
      }
    };
    return {
       activeName: 'first',
      form1: {
        username: '',
        password: ''
      },
      form2: {
        telNum: '',
        code: ''
      },
      rules1: {
        username: [
          {
            required: true,
            validator: checkUsername,
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            // message: '请输入8-20位密码，必须包含字母、数字',
            validator: validatePass,
            trigger: 'blur'
          }
        ]
      },
      rules2: {
        telNum: [
          {
            required: true,
            validator: checkUsername,
            trigger: 'blur'
          }
        ],
        code: [
          {
            required: true,
            validator: checkCode,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'dealList',
      'notices',
      'news'
    ]),
    year () {
      let date = new Date()
      let year = date.getFullYear()
      return year
    }
  },
  methods: {
    ...mapActions([
      'getDealList',
      'getNotices',
      'getNews'
    ]),
    handleClick(tab, event) {
      console.log(tab, event);
    },
    tabClick (index) {
      pageData.save(this, {
        tab: index
      })
    },
    submit(formName) { // 提交表单，与借口交互：登录成功、密码错误、服务器错误
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '恭喜你，登录成功',
            type: 'success'
          });
        } else {
          this.$message.error('请重新登录');
          return false;
        }
      });
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
.form-box1{
  position: relative;
  border: 1px solid #ddd;
  & .formFoot{
    background: #ddd;
    height: 45px;
    line-height: 45px;
    text-align: center;
  }
  & div.el-input.form-code-input{
    width: 210px;
  }
  & .send-code-btn{
    position: absolute;
    margin-left: -1px;
  }
}
.link{
    color: #20a0ff;
  }
.forget{
  position:absolute;
  top:290px;
  right: 40px;
}
.form-box1{
  padding: 30px 0 0;
    & .head{
      padding: 0;
      margin: 0;
    }
}
.el-tabs__header{
  border: none;
}
.el-form-item{
  width: 80%;
  margin-left:auto;
  margin-right: auto;
}
button{
  width:100%;
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
