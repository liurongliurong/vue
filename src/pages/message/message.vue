<template>
  <div>
    <tab :tab="tab" :tabIndex.sync="tabIndex"></tab>
    <div key="message" v-if="tabIndex === 0">
      <div class="item" v-for="item in notices" :key="item.id">
        <div class="title">{{item.title}}</div>
        <div class="text">{{item.content}}</div>
        <div class="date">{{item.date}}</div>
      </div>
      <el-pagination class="mt-30"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      :page-sizes="size"
      :layout="layout"
      :total="total">
      </el-pagination>
    </div>
    <div key="notices" v-if="tabIndex === 1">
      <div class="item" v-for="item in notices" :key="item.id">
        <div class="title">{{item.title}}</div>
        <div class="text">{{item.content}}</div>
        <div class="date">{{item.date}}</div>
      </div>
      <el-pagination class="mt-30"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      :page-sizes="size"
      :layout="layout"
      :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import pageData from '@/util/pageData'
import tab from '@/components/Tab'
export default {
  asyncData ({ store, route }) {
    return store.dispatch('getNotices')
  },
  data () {
    return {
      tabIndex: '',
      tab: ['我的消息', '平台公告'],
      pageSize: 10,
      currentPage: 1,
      size: [10, 20, 30, 40, 50, 100],
      total: 100
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
  computed: {
    ...mapGetters([
      'notices'
    ]),
    layout () {
      let layout = 'total, sizes' + (Math.ceil(this.total / this.pageSize) > 1 ? ', prev, pager, next, jumper' : '')
      return layout
    }
  },
  created () {
    this.tabIndex = parseInt(this.$route.query.tab) || 0
    this.currentPage = parseInt(pageData.get(this).page) || this.currentPage
    this.pageSize = parseInt(pageData.get(this).size) || this.pageSize
  },
  components: {
    tab
  }
}
</script>

<style scoped>
.item{
  border-bottom: 1px solid #ddd;
  padding-left: 40px;
  cursor: pointer;
  & .title{
    margin-top: 25px;
    margin-bottom: 13px;
    font-size: 16px;
  }
  & .text{
    font-size: 14px;
    color: #999;
    margin-bottom: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 1.5;
    padding-right: 40px;
  }
  & .date{
    color: #999;
    font-size: 14px;
    padding-right: 40px;
    text-align: right;
    margin-bottom: 20px;
  }
}
</style>
