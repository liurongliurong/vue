<template>
  <div id="app">
    <header>
      <div class="header-top" v-show="!otherType">
        <div class="container">
          <span>最新成交价格：<span class="new-price">324元/吨</span></span>
          <div class="float-right">
            <template v-if="account.name">
              <span class="account">{{account.name}}</span><router-link to="/login" class="exit">退出</router-link>
            </template>
            <template v-else>
              <router-link class="register" to="/register">注册</router-link><router-link class="login" to="/login">登录</router-link>
            </template>
          </div>
        </div>
      </div>
      <div :class="{'header-bottom': true, 'other-type' : otherType}">
        <div class="container">
          <router-link to="/"><img class="logo" src="./assets/images/logo.png" alt=""></router-link>
          <el-menu v-show="!otherType" :default-active="$route.path" :router='true' class="float-right" mode="horizontal">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/deal">碳交易</el-menu-item>
            <el-menu-item index="/finance/pandect">我的财务</el-menu-item>
            <el-menu-item index="/news">资讯动态</a></el-menu-item>
            <el-menu-item index="/other/help">帮助</a></el-menu-item>
          </el-menu>
          <div v-show="isRegisterPage" class="right-box">已有账号？<router-link class="go-login" to="/login">去登录</router-link></div>
          <div v-show="isResetPage" class="right-box normal">咨询电话：<span class="tel">400-800-5200</span></div>
          <div v-show="isLogin" class="right-box normal"></div>
        </div>
      </div>
    </header>
    <router-view></router-view>
    <footer>
      <div v-show="!otherType" class="container">
        <div class="footer-top">
          <div class="float-left phone-box">
            <img src="./assets/images/logo_white.png" alt="">
            <div>咨询电话：<span class="phone">400-800-5200</span></div>
            <div>商务邮箱：1234123@kefu.com</div>
            <div>客服 QQ：20012010</div>
          </div>
          <div class="float-left link-box">
            <div><router-link to="">关于我们</router-link><router-link to="">公司介绍</router-link><router-link to="">加入我们</router-link></div>
            <div><router-link to="">API接入</router-link><router-link to="">免责声明</router-link><router-link to="">注册协议</router-link><router-link to="">法律声明</router-link></div>
            <div><router-link to="">帮助中心</router-link><router-link to="">开户指南</router-link><router-link to="">交易指南</router-link><router-link to="">实名认证</router-link><router-link to="">充值提现</router-link><router-link to="">费率说明</router-link></div>
            <div><router-link to="">友情链接</router-link><router-link class="border" to="">保全网</router-link><router-link class="border" to="">上海碳交易所</router-link><router-link class="border" to="">北京碳交易所</router-link></div>
          </div>
          <div class="float-left">
            <img class="erweima" src="./assets/images/erweima.jpg" alt="">
            <div>扫描二维码 关注我们</div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">Copyright © 2011-{{year}}　 浙江数秦科技有限公司 All Rights Reserved 浙ICP备33010402000402号</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      account: {
        name: '186***1231'
      },
      activeIndex: '1'
    }
  },
  computed: {
    year () {
      let date = new Date()
      let year = date.getFullYear()
      return year
    },
    otherType () {
      return this.isRegisterPage || this.isResetPage || this.isLogin
    },
    isRegisterPage () {
      return this.$route.path === '/register'
    },
    isLogin () {
      return this.$route.path === '/login'
    },
    isResetPage () {
      return this.$route.path === '/reset'
    }
  }
}
</script>

<style scoped>
@import './assets/css/var.css';
.login{
  border-left: 1px solid #999;
  color: #999;
  padding: 0 10px;
  line-height: 1;
  display: inline-block;
}

.register{
  color: #999;
  padding: 0 10px;
  display: inline-block;
}

.account{
  margin-right: 10px;
}

.exit{
  cursor: pointer;
}

.new-price{
  color: var(--mainColor);
}

.header-top{
  height: var(--headerTopHeight);
  line-height: var(--headerTopHeight);
  background-color: var(--headerTopBgColor);
  padding: 0 var(--contentHorizontalPadding);
  color: #fff;
}

.header-bottom{
  background-color: #fff;
  height: 80px;
  padding: 10px 0;
  &.other-type{
    height: 100px;
    & .logo{
      margin-top: 15px;
    }
  }
  & .right-box{
    margin-top: 40px;
    float: right;
    font-size: 16px;
    &.normal{
      font-size: 14px;
    }
    & .go-login{
      color: var(--mainColor);
    }
    & .tel{
      font-weight: bold;
    }
  }
}

#app {
  & .el-menu-item{
    font-size: 16px;
    transition: none;
    &.is-active{
      color: var(--mainColor);
      font-weight: bold;
    }
    &:hover{
      background-color: transparent;
      border: none;
    }
  }
}

footer{
  background-color: #333;
  color: #999;
  padding-top: 34px;
}

.phone-box{
  width: 384px;
  line-height: 30px;
}

.phone{
  color: #fff;
  font-weight: bold;
  font-size: 16px;
}

.link-box{
  width: 648px;
  margin-top: 15px;
  &>div{
    display: inline-block;
  }
  & a {
    display: inline-block;
    margin-bottom: 20px;
    padding: 0 12px;
    color: #999;
    &:first-child{
      color: #fff;
    }
    &.border{
      border-right: 1px solid #999;
      &:last-child{
        border: none;
      }
    }
  }
}

.footer-top{
  height: 195px;
}

.footer-bottom{
  height: 41px;
  line-height: 41px;
  text-align: center;
  background-color: #2c2c2c;
}

.erweima{
  display: block;
  margin: 15px auto;
}
</style>
