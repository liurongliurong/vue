<template>
  <div>
    <tab :tab="tab" :tabIndex.sync="tabIndex"></tab>
    <div key="capitalOrder" v-if="tabIndex === 0">
      <div class="detail-box">
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
        <div class="btn-box">
          <el-button type="success" size="small">充值</el-button><el-button class="is-hover" :plain="true" size="small" type="success">提现</el-button>
        </div>
      </div>
      <div>
        <div class="title3"><span>账单明细</span></div>
        <filtrate :items="items" label-width="79px">
          <date-picker slot="0" v-model="time"></date-picker>
        </filtrate>
        <search-table :total="capitalOrderAmount">
          <template slot="list">
            <el-table class="search-table" :data="capitalOrder">
              <el-table-column prop="date" label="日期" align="center" width="200">
              </el-table-column>
              <el-table-column prop="type" label="类型" align="center" width="110">
              </el-table-column>
              <el-table-column prop="money" label="金额（元）" align="right">
              </el-table-column>
              <el-table-column prop="charge" label="手续费（元）" align="right">
              </el-table-column>
              <el-table-column prop="actual" label="实际到账（元）" align="right">
              </el-table-column>
              <el-table-column label="状态" align="center">
                <template slot-scope="scope"><span :style="{'font-weight': 'bold', color: color(scope.row.status)}">{{scope.row.status}}</span></template>
              </el-table-column>
            </el-table>
          </template>
        </search-table>
      </div>
    </div>
    <div key="recharge" v-if="tabIndex === 1">
      <el-form class="recharge-form" label-position="left" :model="rechargeForm" ref="rechargeForm" :rules="rechargeRules" label-width="113px">
        <el-form-item prop="bankCard" label="银行卡:">
          <bank-select v-model="rechargeForm.bankCard" :banks="bankCard"></bank-select>
        </el-form-item>
        <el-form-item prop="money" label="充值金额(元):">
          <el-input-number :min="1" :controls='false' v-model="rechargeForm.money"></el-input-number>
        </el-form-item>
        <el-form-item label="到账时间(元):">
          <span>预计40分钟内到账</span>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="recharge('rechargeForm')" size="large">立即充值</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div key="withdrawal" v-if="tabIndex === 2">
      <div class="tip">当前每日最高可提现<span>1000.00</span>元</div>
      <el-form class="withdrawal-form" label-position="left" :model="withdrawalForm" ref="withdrawalForm" :rules="withdrawalRules" label-width="113px">
        <el-form-item prop="bankCard" label="提现到银行卡:">
          <span class="add-card">添加银行卡</span>
          <bank-select :value="withdrawalForm.bankCard" :banks="bankCard"></bank-select>
        </el-form-item>
        <el-form-item prop="money" label="提现金额(元):">
          <el-input v-model="withdrawalForm.money"></el-input>
          <div class="money-tip">可提现最大金额(元):<span>0</span></div>
        </el-form-item>
        <el-form-item label="提现手续费(元):">
          <span>0</span>
        </el-form-item>
        <el-form-item label="实收金额(元):">
          <span class="actual-money">0</span>
        </el-form-item>
        <el-form-item prop="password" label="资金密码:">
          <el-input type="password" v-model="withdrawalForm.password"></el-input>
          <router-link class="forget" to="">忘记资金密码</router-link>
        </el-form-item>
        <el-form-item prop="code" label="短信验证码:">
          <el-input class="code-input" v-model="withdrawalForm.code"></el-input><el-button class="send-code" type="success">获取验证码</el-button>
        </el-form-item>
        <el-form-item prop="googleCode" label="谷歌验证码:">
          <el-input v-model="withdrawalForm.googleCode"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="withdrawal('withdrawalForm')" size="large">立即提现</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import pageData from '@/util/pageData'
import { pluralAsync } from '@/util/common'
import filtrate from '@/components/Filtrate'
import searchTable from '@/components/SearchTable'
import datePicker from '@/components/DatePicker'
import bankSelect from '@/components/BankSelect'
import tab from '@/components/Tab'
export default {
  asyncData ({ store, route }) {
    let actions = [
      () => store.dispatch('getCapitalAccount'),
      () => store.dispatch('getCapitalOrder')
    ]
    actions.push(() => store.dispatch('getBankCard'))
    return pluralAsync(actions)
  },
  data () {
    return {
      tabIndex: '',
      tab: ['资金账户', '充值', '提现'],
      time: '',
      items: [
        {
          label: '起始时间：'
        },
        {
          label: '操作类型：',
          value: ['充值', '提现']
        },
        {
          label: '当前状态：',
          value: ['审核中', '已完成', '失败']
        }
      ],
      rechargeForm: {
        bankCard: '',
        money: 0
      },
      rechargeRules: {
        bankCard: [{
          required: true,
          message: '请选择银行卡'
        }],
        money: [
          {
            required: true
          }
        ]
      },
      withdrawalForm: {
        bankCard: ''
      },
      withdrawalRules: {
        money: []
      }
    }
  },
  computed: {
    ...mapGetters([
      'capitalAccount',
      'capitalOrder',
      'capitalOrderAmount',
      'bankCard'
    ])
  },
  methods: {
    color (status) {
      return status === '审核中' ? '#29C086' : status === '已完成' ? '#4D5C6F' : '#FF7200'
    },
    recharge (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
        }
      })
    },
    withdrawal (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
        }
      })
    }
  },
  components: {
    filtrate,
    searchTable,
    datePicker,
    bankSelect,
    tab
  },
  created () {
    this.tabIndex = parseInt(this.$route.query.tab) || 0
  }
}
</script>

<style scoped>
.detail-box{
  margin-top: 19px;
  margin-bottom: 40px;
  border: 1px solid #ddd;
  padding-left: 15px;
  &:after{
    content: '';
    clear: both;
    display: block;
  }
}

.list-table{
  float: left;
  width: 576px;
  margin-top: 31px;
  margin-bottom: 33px;
}

.btn-box{
  display: inline-block;
  margin-top: 29px;
}

.recharge-form,
.withdrawal-form{
  margin-top: 27px;
}

.tip{
  background-color: #FFF9E0;
  padding-left: 17px;
  height: 46px;
  line-height: 46px;
  margin-top: 19px;
  & span{
    color: #FF7200;
  }
}

.add-card{
  color: #1698EB;
  margin-right: 66px;
}

.money-tip{
  font-size: 12px;
  color: #666;
  line-height: 1;
  margin-top: 8px;
  & span{
    color: #FF7200;
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
  }
}

.actual-money{
  color: #FF7200;
}

.forget{
  color: #1698EB;
  display: block;
  font-size: 12px;
  line-height: 1;
  margin-top: 8px;
}
</style>
