<template>
  <div class="bank-select">
    <div class="fix-selected" v-if="bank"><span :class="['iconfont', bankIcon(bank.name)]"></span>{{bank.name}}<span class="float-right">尾号{{bank.account.slice(bank.account - 4, 4)}}</span></div>
    <el-select popper-class="bank-select" v-model="bank" value-key="id" :placeholder="placeholder">
      <el-option v-for="(item, index) in banks" :key="item.id" :value="item">
        <div class="common-option"><span :class="['iconfont', bankIcon(item.name)]"></span>{{item.name}}<span v-if="type !== 'bank'" class="option-right">尾号{{item.account.slice(item.account - 4, 4)}}</span></div>
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { bankIcon } from '@/util/common'
export default {
  model: {
    event: 'change'
  },
  props: {
    type: {
      type: String,
      default: 'card'
    },
    value: [Object, String],
    banks: Array,
    placeholder: {
      type: String,
      default: '请选择银行卡'
    }
  },
  data () {
    return {
      bank: this.value
    }
  },
  methods: {
    bankIcon
  },
  watch: {
    bank (val, oldVal) {
      this.$emit('change', val)
    }
  }
}
</script>

<style scoped>
.bank-select{
  position: relative;
  display: inline-block;
  & .el-select{
    width: 260px;
  }
  & .option-right{
    float: right;
    margin: 4px 10px 0 0;
  }

  & .fix-selected{
    position: absolute;
    background-color: #fff;
    top: 3px;
    left: 3px;
    height: 30px;
    line-height: 30px;
    z-index: 1;
    width: 223px;
    pointer-events: none;
  }

  & .common-option{
    margin-left: -8px;
    width: 231px;
  }
}
</style>
