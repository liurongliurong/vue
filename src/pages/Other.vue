<template>
  <div class="content usercenter-content">
    <div class="container">
      <el-menu class="menu" :router="true" :default-openeds="['1','3']" :default-active="routeMatch">
        <el-menu-item index="/other/help">帮助中心</el-menu-item>
        <el-menu-item index="/other/accountGuide">开户指南</el-menu-item>
        <el-menu-item index="/other/dealGuide">交易指南</el-menu-item>
        <el-menu-item index="/other/authentication">账户认证</el-menu-item>
        <el-menu-item index="/other/recharge">充值体现</el-menu-item>
        <el-menu-item index="/other/illustrate">费率说明</el-menu-item>
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
  }
}
</style>

