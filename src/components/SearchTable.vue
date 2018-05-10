<template>
  <div>
    <slot name="list"></slot>
    <el-pagination
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      :page-sizes="size"
      :layout="layout"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import pageData from '../util/pageData'
export default {
  props: {
    total: Number
  },
  data () {
    return {
      pageSize: 10,
      currentPage: 1,
      size: [10, 20, 30, 40, 50, 100]
    }
  },
  computed: {
    layout () {
      let layout = 'total, sizes' + (Math.ceil(this.total / this.pageSize) > 1 ? ', prev, pager, next, jumper' : '')
      return layout
    }
  },
  methods: {
    handleCurrentChange (val) {
      pageData.save(this, {
        page: val
      })
    },
    handleSizeChange (size) {
      this.pageSize = size
      pageData.save(this, {
        size: size
      })
    }
  },
  beforeMount () {
    this.currentPage = parseInt(pageData.get(this).page) || this.currentPage
    this.pageSize = parseInt(pageData.get(this).size) || this.pageSize
  }
}
</script>

<style scoped>

</style>
