<template>
  <div class="content">
    <!-- 列表页 与 内容详情页 同一模版 -->
    <div class="container">
      <div v-if="this.$route.params.id"> <!-- v-if="this.$route.params.id" -->
      <!-- 详情 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>资讯动态</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/news' }">新闻动态</el-breadcrumb-item>
        </el-breadcrumb>
        <div>{{cNew.title}}</div>
        <div>{{cNew.comefrom + '' + cNew.date.substr(0,10)}}</div>
        <div>{{cNew.content}}</div>
      </div>
      <div v-else>
        <div>
          <router-link to="/news">新闻动态</router-link>
          <router-link to="/notices">平台公告</router-link>
        </div>
        <router-link class="item" :to="'/news/' + item.id" v-for="(item, index) in news" :key="item.id">
          <img src="" alt="">
          <div>
            <div class="title">{{item.title}}</div>
            <div class="detail">{{item.content}}</div>
            <div class="date">{{item.date.substr(0,10)}}</div>
          </div>
        </router-link>
        <el-pagination layout="prev, pager, next" :total="50" :current-page="2"></el-pagination>
        <!-- :current-page="2"——:current-page说明 2是变量，而current-page=‘key’中key是常量 -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { pluralAsync } from '@/util/common'
export default {
  asyncData ({ store, route }) {
    let actions = [
      () => store.dispatch('getNotices'),
      () => store.dispatch('getNews')
    ]
    return pluralAsync(actions)
  },
  destroyed () {
    this.$store.unregisterModule('deal')
  },
  data () {
    return {
    }
  },
  computed: { // 计算
    ...mapGetters([
      'notices',
      'news'
    ]),
    'cNew' () {
      return this.$store.getters.cNew(this.$route.params.id)
      // getters
    }
  }
}
</script>

<style scoped>
@import '../assets/css/var.css';
.item{
  display: block;
  & img {
    float: left;
  }
  & .title{
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
