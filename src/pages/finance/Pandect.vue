<template>
  <div>
    <div class="title2">账户总览</div>
    <div class="box box1">
      <div class="title2 normal">资金账户<router-link class="link" to="/finance/capital">查看明细</router-link><div class="right"><router-link to="/finance/capital?tab=1"><el-button type="success" size="small">充值</el-button></router-link><router-link class="ml-10" to="/finance/capital?tab=2"><el-button class="is-hover" :plain="true" size="small" type="success">提现</el-button></router-link></div></div>
      <table class="list-table">
        <thead>
          <tr>
            <th>可用余额（元）</th>
            <th>提现冻结（元）</th>
            <th>交易冻结（元）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{capitalAccount.balance}}</td>
            <td>{{capitalAccount.withdrawFreeze}}</td>
            <td>{{capitalAccount.dealFreeze}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="box box2">
      <div class="title2 normal">碳账户<router-link class="link" to="/finance/carbon">查看明细</router-link><div class="right"><router-link to="/finance/carbon?tab=2"><el-button type="success" size="small">充值</el-button></router-link><router-link class="ml-10" to="/finance/carbon?tab=3"><el-button class="is-hover" :plain="true" size="small" type="success">提现</el-button></router-link></div></div>
      <table class="list-table">
        <thead>
          <tr>
            <th>可用余额（千克）</th>
            <th>提现冻结（千克）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{carbonAccount.balance}}</td>
            <td>{{carbonAccount.withdrawFreeze}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="box box3">
      <div class="title2">银行卡</div>
      <div>
        <div class="bank-card" v-for="(item, index) in bankCard" :key="index">
          <div class="top">
            <span :class="['iconfont', bankIcon(item.name)]"></span>{{item.name}}
          </div>
          <div class="bottom">{{item.account}}</div>
        </div>
        <div class="add-card" @click="dialogVisible = true;">
          <div>
            <span class="iconfont icon-jiahao"></span>
          </div>
          <div class="tip">添加银行卡</div>
        </div>
      </div>
    </div>
    <el-dialog class="dialog" title="绑定银行卡" :visible.sync="dialogVisible" size="tiny">
      <div class="tip"><span class="iconfont icon-warning"></span>充值、提现时银行等姓名信息必须与您的认证姓名一致。</div>
      <el-form :model="form" :rules="rules" label-width="96px">
        <el-form-item label="持卡人姓名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="证件号码：">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="卡类型：">
          <el-input v-model="form.cardType"></el-input>
        </el-form-item>
        <el-form-item label="开户银行：">
          <bank-select v-model="form.bank" type="bank" :banks="bank" placeholder="请选择开户银行"></bank-select>
        </el-form-item>
        <el-form-item label="银行卡账号：">
          <el-input v-model="form.account"></el-input>
        </el-form-item>
        <el-form-item label="绑定手机号：">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="短信验证码：">
          <el-input class="code-input" v-model="form.code"></el-input><el-button class="send-code" type="success">获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="confirm">确定</el-button>
          <el-button class="btn-grey" @click="dialogVisible = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { bankIcon, pluralAsync } from '@/util/common'
import bankSelect from '@/components/BankSelect'
export default {
  asyncData ({ store, route }) {
    let actions = [
      () => store.dispatch('getCarbonAccount'),
      () => store.dispatch('getCapitalAccount'),
      () => store.dispatch('getBankCard'),
      () => store.dispatch('getBank')
    ]
    return pluralAsync(actions)
  },
  data () {
    return {
      dialogVisible: false,
      form: {
        name: '',
        number: '',
        cardType: '',
        bank: '',
        account: '',
        phone: '',
        code: ''
      },
      rules: {
        name: [],
        number: [],
        cardType: [],
        bank: [],
        account: [],
        phone: [],
        code: []
      }
    }
  },
  methods: {
    confirm () {
      this.dialogVisible = false
    },
    bankIcon
  },
  computed: {
    ...mapGetters([
      'carbonAccount',
      'capitalAccount',
      'bankCard',
      'bank'
    ])
  },
  components: {
    bankSelect
  }
}
</script>

<style scoped>
@import '../../assets/css/var.css';
.box{
  border: 1px solid #ddd;
  background-color: #f9f9f9;
  margin-top: 19px;
  padding: 0 20px;
  & .title2{
    padding: 25px 0 24px;
  }
}

.box1{
  width: 530px;
  display: inline-block;
}

.box2{
  width: 361px;
  display: inline-block;
  margin-left: 24px;
}

.box3{
  padding-bottom: 29px;
}

.link{
  color: #1698EB;
  font-size: 12px;
  margin-left: 16px;
}

.bank-card{
  width: 231px;
  height: 131px;
  border: 1px solid #C8D7DC;
  border-radius: 5px;
  display: inline-block;
  vertical-align: top;
  margin-top: 29px;
  margin-right: 19px;
  background-color: #fff;
  & .top{
    height: 46px;
    line-height: 46px;
    border-bottom: 1px solid #C8D7DC;
  }
  & .bottom{
    color: #999;
    padding-top: 35px;
    text-align: center;
  }
}

.add-card{
  display: inline-block;
  vertical-align: top;
  width: 231px;
  height: 131px;
  border: 1px dashed #C8D7DC;
  margin-top: 29px;
  text-align: center;
  padding-top: 37px;
  background-color: #fff;
  cursor: pointer;
  & .iconfont{
    color: #C8D7DC;
    font-size: 32px;
  }
  & .tip{
    margin-top: 25px;
    color: #999;
  }
}

.dialog{
  & .tip{
    color: #999;
    text-align: center;
    margin-bottom: 31px;
  }
  & .el-button{
    width: 123px;
  }
  & .el-form{
    width: 357px;
    margin: 0 auto;
  }
}

.icon-warning{
  color: #FF7200;
  margin-right: 8px;
  vertical-align: middle;
}
</style>

<style>
.el-dialog{
  width: 521px;
}
</style>

