<template>
  <el-date-picker v-model="time" type="daterange" :placeholder="placeholder" :picker-options="pickerOptions"></el-date-picker>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: '选择日期范围'
    },
    pickerOptions: {
      type: Object,
      default: () => {
        return {
          shortcuts: [{
            text: '今天',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '7天内',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '14天内',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 14)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '1个月内',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setMonth(start.getMonth() - 1)
              picker.$emit('pick', [start, end])
            }
          }]
        }
      }
    },
    value: {
      type: [String, Array]
    }
  },
  data () {
    return {
      time: this.value
    }
  },
  watch: {
    time (val, oldVal) {
      this.$emit('input', val)
    }
  }
}
</script>
