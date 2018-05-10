<template>
  <div>
    <div class="title2">安全中心</div>
    <div class="safe-box">
      <img class="safe-img" src="../../assets/images/safe.png" alt="">
      <div>
        <div class="safe-line"><span class="account">176****1342</span>,&nbsp;&nbsp;您的账号安全等级&nbsp;<span class="safe-level">高</span></div>
        <div class="login-time">您上次登录的时间为：2017-10-13 15:27:46</div>
      </div>
    </div>
    <div class="item" v-for="(item, index) in items" :key="item.name">
      <span :class="['iconfont', item.completed ? 'completed icon-zhengquetianchong' : 'uncompleted icon-warning']"></span><span :class="['name', item.completed ? 'completed' : 'uncompleted']">{{item.name}}</span><span class="tip">{{item.tip}}</span><span class="data">{{item.data}}</span><div class="operation"><router-link v-if="item.operation.type !== 'text' && item.operation.name" :to="item.operation.to"><el-button type="warning" size="small">{{item.operation.name}}</el-button></router-link><router-link :to="item.operation.to" class="other" v-else>{{item.operation.name}}</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          completed: false,
          name: '手机绑定',
          tip: '提现，修改密码，及安全设置时用以收取验证短信',
          data: '',
          operation: {
            to: '',
            type: '',
            name: '去绑定'
          }
        },
        {
          completed: true,
          name: '邮箱绑定',
          tip: '绑定后可使用邮箱登录',
          data: '54fdf4455@163.com',
          operation: {
            to: '',
            type: '',
            name: ''
          }
        },
        {
          completed: true,
          name: '身份认证',
          tip: '验证后，可以下单，不可提现',
          data: '张**',
          operation: {
            to: '',
            type: '',
            name: ''
          }
        },
        {
          completed: true,
          name: '高级身份认证',
          tip: '进行高级身份认证后可以提现',
          data: '',
          operation: {
            to: '',
            type: '',
            name: ''
          }
        },
        {
          completed: true,
          name: '企业认证',
          tip: '未完成企业实名认证，暂不可进行冲碳、提碳',
          data: '浙江数字***********',
          operation: {
            to: '/security/center/company',
            type: 'text',
            name: '查看'
          }
        },
        {
          completed: true,
          name: '登录密码',
          tip: '登录碳交所时使用',
          data: '',
          operation: {
            to: '',
            type: 'text',
            name: '重置'
          }
        },
        {
          completed: false,
          name: '资金密码',
          tip: '资金变动时，需验证资金密码',
          data: '',
          operation: {
            to: '',
            type: '',
            name: '去设置'
          }
        },
        {
          completed: true,
          name: '谷歌验证器',
          tip: '提现，修改密码，及安全设置时用以输入谷歌验证码',
          data: '',
          operation: {
            to: '',
            type: 'text',
            name: '重置'
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '../../assets/css/var.css';
.safe-box{
  height: 120px;
  border-bottom: 1px dotted #ddd;
  &>div{
    margin-left: 140px;
  }
}
.safe-img{
  margin-top: 15px;
  margin-left: 20px;
  float: left;
}

.safe-line{
  padding-top: 30px;
  margin-bottom: 35px;
  font-size: 16px;
  & .account{
    font-weight: bold;
  }
  & .safe-level{
    font-size: 20px;
  }
}

.login-time{
  font-size: 12px;
  color: #666;
}

.item{
  height: 60px;
  line-height: 59px;
  border-bottom: 1px dotted #ddd;
  & .iconfont{
    display: inline-block;
    margin-left: 20px;
    margin-right: 10px;
    font-size: 20px;
    position: relative;
    top: 2px;
  }
  & .name{
    font-size: 16px;
    display: inline-block;
    width: 160px;
  }
  & .completed{
    color: var(--mainColor);
  }
  & .uncompleted{
    color: #ff7200;
  }
  & .tip{
    display: inline-block;
    width: 380px;
    color: #999;
  }
  & .data{
    font-weight: bold;
  }
  & .operation{
    float: right;
    width: 105px;
    text-align: center;
    & .other{
      color: var(--mainColor)
    }
    & .el-button--warning{
      background-color: #ff7200;
      border-color: #ff7200;
    }
  }
}
</style>
