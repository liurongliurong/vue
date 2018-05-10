<template>
  <div class="content usercenter-content">
    <div class="container">
      <el-menu class="menu" :router="true" :default-openeds="['1','3']" :default-active="routeMatch">
        <el-submenu index="1">
          <template slot="title"><i class="icon-salary_icon iconfont"></i>资产总额</template>
          <el-menu-item-group>
            <el-menu-item index="/finance/pandect">账户总览</el-menu-item>
            <el-menu-item index="/finance/capital">资金账户</el-menu-item>
            <el-menu-item index="/finance/carbon">碳账户</el-menu-item>
            <el-menu-item index="1-2">充提管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/deal/order"><i class="icon-copy_icon iconfont"></i>交易订单</el-menu-item>
        <el-submenu index="3">
          <template slot="title"><i class="icon-business_license_ico iconfont"></i>安全设置</template>
          <el-menu-item-group>
            <el-menu-item index="/security/center">安全中心</el-menu-item>
            <el-menu-item index="/security/identity">身份认证</el-menu-item>
            <el-menu-item index="/security/google">谷歌验证</el-menu-item>
            <el-menu-item index="/security/loginpwd">登录密码</el-menu-item>
            <el-menu-item index="/security/capitalpwd">资金密码</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/message"><i class="icon-message_icon iconfont"></i>消息中心</el-menu-item>
      </el-menu>
      <router-view class="usercenter-subcontent"></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
    ]),
    routeMatch () {
      if (this.$route.path.indexOf('/security/center') !== -1) {
        return '/security/center'
      }
      return this.$route.path
    }
  },
  methods: {
  },
  created () {
  }
}
</script>

<style scoped>
@import '../assets/css/var.css';
.container{
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  position: relative;
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 200px;
    background-color: #f9f9f9;
  }
  &:after{
    content: '';
    display: block;
    clear: both;
  }
}

.menu{
  width: 200px;
  background-color: #f9f9f9;
  float: left;
}

.usercenter-subcontent{
  background-color: #fff;
  float: left;
  width: 980px;
  padding: 0 30px 30px;
}
</style>

<style>
@import '../assets/css/var.css';
.usercenter-content{
  & .el-menu-item,
  & .el-submenu__title{
    &:hover{
      background-color: transparent;
    }
    font-size: 16px;
  }
  & .el-menu-item-group__title{
    padding-top: 0;
  }
  & .el-menu-item{
    border-left: 3px solid transparent;
    &.is-active{
      color: var(--mainColor);
      font-weight: bold;
      background-color: #fff;
      border-left-color: var(--mainColor);
      & .iconfont{
        font-weight: normal;
      }
    }
  }
  & .el-menu-item-group .el-menu-item{
    font-size: 14px;
    background-color: #f9f9f9;
    padding-left: 50px !important;
    border-left: 3px solid transparent;
    &.is-active{
      color: var(--mainColor);
      background-color: #fff;
      border-left-color: var(--mainColor);
      font-weight: bold;
    }
  }
  & .menu .iconfont{
    color: var(--mainColor);
    width: 31px;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    position: relative;
    top: -2px;
  }
}
</style>

