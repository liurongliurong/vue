<template>
  <div>
    <tab :tab="tab" :tabIndex.sync="tabIndex"></tab>
    <div v-if="tabIndex === 0">
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
              <td>{{carbonAccount.balance}}</td>
              <td>{{carbonAccount.withdrawFreeze}}</td>
              <td>{{carbonAccount.dealFreeze}}</td>
            </tr>
          </tbody>
        </table>
        <div class="btn-box">
          <el-button type="success" size="small">充值</el-button><el-button class="is-hover" :plain="true" size="small" type="success">提现</el-button>
        </div>
      </div>
      <div class="title3"><span>碳明细</span></div>
      <el-table class="search-table mt-20" :data="tableData">
        <el-table-column prop="breed" label="交易品种" align="center" width="120">
        </el-table-column>
        <el-table-column prop="balance" label="可用余额（千克）" align="right" width="160">
        </el-table-column>
        <el-table-column prop="freeze" label="交易冻结（千克）" align="right" width="160">
        </el-table-column>
        <el-table-column prop="total" label="总计（千克）" align="right" width="170">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope"><el-button type="success" size="small">充值</el-button><el-button class="is-hover" :plain="true"  type="success" size="small">提现</el-button><el-button class="btn-orange" size="small">交易</el-button></template>
        </el-table-column>
      </el-table>
    </div>
    <div v-if="tabIndex === 1">
      <filtrate :items="items" label-width="79px">
        <date-picker slot="0" v-model="time"></date-picker>
      </filtrate>
      <search-table :total="carbonOrderAmount">
        <template slot="list">
          <el-table class="search-table" :data="capitalOrder">
            <el-table-column prop="date" label="日期" align="center">
            </el-table-column>
            <el-table-column prop="type" label="类型" align="center">
            </el-table-column>
            <el-table-column prop="money" label="交易所" align="right">
            </el-table-column>
            <el-table-column prop="charge" label="账户" align="right">
            </el-table-column>
            <el-table-column prop="actual" label="种类" align="right">
            </el-table-column>
            <el-table-column prop="actual" label="数量（KG）" align="right">
            </el-table-column>
            <el-table-column prop="actual" label="手续费（KG）" align="right">
            </el-table-column>
            <el-table-column prop="actual" label="存证" align="right">
            </el-table-column>
            <el-table-column prop="actual" label="合同" align="right">
            </el-table-column>
            <el-table-column label="状态" align="center">
              <template slot-scope="scope"><span :style="{'font-weight': 'bold', color: color(scope.row.status)}">{{scope.row.status}}</span></template>
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope"></template>
            </el-table-column>
          </el-table>
        </template>
      </search-table>
    </div>
    <div v-if="tabIndex === 2">
      <el-form class="mt-20" label-position="right" :model="form" ref="form" :rules="formRules" label-width="120px">
        <el-form-item prop="exchange" label="交易所：">
          <el-input v-model="form.exchange"></el-input>
        </el-form-item>
        <el-form-item prop="exchangeAccount" label="交易所账户名：">
          <el-input v-model="form.exchangeAccount" placeholder="请输入您在此交易所的账户名"></el-input>
        </el-form-item>
        <el-form-item prop="account" label="充值账户地址：">
          <span class="bold">{{form.account}}</span>
        </el-form-item>
        <el-form-item prop="amount" label="充值数量：">
          <el-input v-model="form.amount" placeholder="请输入充值数量"></el-input> 吨
          <div class="mt-10">备注：请在您选择的交易所，向相应的账户充值碳排放量（<router-link class="help" to="">使用帮助</router-link>）</div>
        </el-form-item>
        <el-form-item>
          <el-button class="form-btn-block mt-10" type="success" @click="submit('form')" size="large">立即提交</el-button>
        </el-form-item>
      </el-form>
      <div class="title3 mt-60"><span>充值记录</span></div>
      <el-table class="search-table mt-20" :data="capitalOrder">
        <el-table-column prop="date" label="日期" align="center">
        </el-table-column>
        <el-table-column prop="type" label="类型" align="center">
        </el-table-column>
        <el-table-column prop="money" label="交易所" align="right">
        </el-table-column>
        <el-table-column prop="charge" label="账户" align="right">
        </el-table-column>
        <el-table-column prop="actual" label="种类" align="right">
        </el-table-column>
        <el-table-column prop="actual" label="数量（KG）" align="right">
        </el-table-column>
        <el-table-column prop="actual" label="存证" align="right">
        </el-table-column>
        <el-table-column prop="actual" label="合同" align="right">
        </el-table-column>
        <el-table-column label="状态" align="center">
          <template slot-scope="scope"><span :style="{'font-weight': 'bold', color: color(scope.row.status)}">{{scope.row.status}}</span></template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope"></template>
        </el-table-column>
      </el-table>
    </div>
    <div v-if="tabIndex === 3">
      <el-form class="mt-20" label-position="right" :model="form" ref="form" :rules="formRules" label-width="120px">
        <el-form-item prop="exchange" label="请选择交易所：">
          <el-select v-model="form.exchange" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="exchangeAccount" label="账户名称：">
          <el-input v-model="form.exchangeAccount" placeholder="请输入您在对应交易所的账户名称"></el-input>
        </el-form-item>
        <el-form-item prop="account" label="账户地址：">
          <el-input v-model="form.exchangeAccount" placeholder="请输入您在对应交易所的账户地址"></el-input>
        </el-form-item>
        <el-form-item prop="amount" label="提取数量：">
          <el-input v-model="form.amount" placeholder="请输入您的提取数量"></el-input>
        </el-form-item>
         <el-form-item prop="amount" label="资金密码：">
          <el-input v-model="form.amount" placeholder="请输入您的资金密码"></el-input>
        </el-form-item>
         <el-form-item prop="amount" label="短信校验码：">
          <el-input class="code-input" v-model="form.amount" placeholder="请输入您的短信校验码"></el-input><el-button class="send-code" type="success">获取验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-button class="form-btn-block mt-10" type="success" @click="submit('form')" size="large">立即提交</el-button>
        </el-form-item>
      </el-form>
      <div class="title3 mt-60"><span>提取记录</span></div>
      <el-table class="search-table mt-20" :data="capitalOrder">
        <el-table-column prop="date" label="日期" align="center">
        </el-table-column>
        <el-table-column prop="type" label="类型" align="center">
        </el-table-column>
        <el-table-column prop="money" label="交易所" align="right">
        </el-table-column>
        <el-table-column prop="charge" label="账户" align="right">
        </el-table-column>
        <el-table-column prop="actual" label="种类" align="right">
        </el-table-column>
        <el-table-column prop="actual" label="数量（KG）" align="right">
        </el-table-column>
        <el-table-column prop="actual" label="手续费（KG）" align="right">
        </el-table-column>
        <el-table-column prop="actual" label="存证" align="right">
        </el-table-column>
        <el-table-column prop="actual" label="合同" align="right">
        </el-table-column>
        <el-table-column label="状态" align="center">
          <template slot-scope="scope"><span :style="{'font-weight': 'bold', color: color(scope.row.status)}">{{scope.row.status}}</span></template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope"></template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pageData from '@/util/pageData'
import { pluralAsync } from '@/util/common'
import filtrate from '@/components/Filtrate'
import searchTable from '@/components/SearchTable'
import datePicker from '@/components/DatePicker'
import bankSelect from '@/components/BankSelect'
import tab from '@/components/Tab'
export default {
  asyncData ({ store, route }) {
    let actions = [
      () => store.dispatch('getCarbonAccount'),
      () => store.dispatch('getCarbonOrder')
    ]
    return pluralAsync(actions)
  },
  data () {
    return {
      tab: ['碳账户', '账单明细', '充值', '提现'],
      tabIndex: '',
      tableData: [
        {
          breed: '北京配额',
          balance: 1322533423,
          freeze: 123124241253,
          total: 23446342134
        },
        {
          breed: '北京配额',
          balance: 1322533423,
          freeze: 123124241253,
          total: 23446342134
        },
        {
          breed: '北京配额',
          balance: 1322533423,
          freeze: 123124241253,
          total: 23446342134
        }
      ],
      items: [
        {
          label: '起始时间：'
        },
        {
          label: '操作类型：',
          value: ['充值', '提取', '交易']
        },
        {
          label: '当前状态：',
          value: ['审核中', '已完成', '失败', '进行中']
        }
      ],
      time: '',
      capitalOrder: [],
      form: {
        account: '22102102010000100（xx公司）',
        amount: ''
      },
      formRules: {},
      options: []
    }
  },
  computed: {
    ...mapGetters([
      'carbonAccount',
      'carbonOrder',
      'carbonOrderAmount'
    ])
  },
  methods: {
    tabClick (index) {
      pageData.save(this, {
        tab: index
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
    display: block;
    clear: both;
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

.help{
  color: #1698EB;
}
</style>
