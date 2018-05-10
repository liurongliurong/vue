<template>
  <div class="order-content">
    <div class="title2">碳交易订单管理</div>
    <filtrate :items="items" label-width="79px">
      <date-picker slot="0" :value="time"></date-picker>
    </filtrate>
    <search-table :total="total">
      <template slot="list">
        <el-table class="search-table" :data="tableData">
          <el-table-column prop="date" label="日期" align="center" width="170">
          </el-table-column>
          <el-table-column prop="type" label="类型" align="center" width="70">
          </el-table-column>
          <el-table-column prop="breed" label="交易品种" align="right" width="100">
          </el-table-column>
          <el-table-column prop="price" label="单价(元)" align="right">
          </el-table-column>
          <el-table-column prop="amount" label="数量" align="right">
          </el-table-column>
          <el-table-column prop="money" label="金额" align="center">
          </el-table-column>
          <el-table-column prop="charge" label="手续费" align="center">
          </el-table-column>
          <el-table-column label="状态" align="center">
            <template slot-scope="scope"><span :style="{'font-weight': 'bold', color: color(scope.row.status)}">{{scope.row.status}}</span></template>
          </el-table-column>
          <el-table-column prop="operation" label="操作" align="center">
            <template slot-scope="scope"><el-button class="btn-dark" size="small">撤销</el-button></template>
          </el-table-column>
        </el-table>
      </template>
    </search-table>
  </div>  
</template>

<script>
import filtrate from '@/components/Filtrate'
import searchTable from '@/components/SearchTable'
import datePicker from '@/components/DatePicker'

export default {
  data () {
    return {
      items: [
        {
          label: '起始时间：'
        },
        {
          label: '订单状态：',
          value: ['已成交', '未成交', '部分成交']
        },
        {
          label: '交易类型：',
          value: ['出售', '购买']
        },
        {
          label: '交易品种',
          value: ['北京配额', '深圳配额', '上海配额']
        }
      ],
      time: '',
      total: 100,
      tableData: [
        {
          date: '2017-09-26 10:21:48',
          type: '充值',
          breed: '上海配额',
          price: 51.33,
          amount: 1231212,
          money: 123234134.00,
          charge: 324.22,
          status: '部分成交',
          operation: '撤销'
        }
      ]
    }
  },
  methods: {
    color (status) {
      return status === '部分成交' ? '#4D5C6F' : status === '未成交' ? '#FF7200' : '#29C086'
    }
  },
  components: {
    filtrate,
    searchTable,
    datePicker
  }
}
</script>

<style>
.order-content{
  & .el-table .cell{
    padding-left: 8px;
    padding-right: 8px; 
  }
}
</style>
