<template>
  <div class="content">
    <el-carousel trigger="click" height="320px">
      <el-carousel-item v-for="item in carousel" :key="item">
        <img class="carousel-img" :src="item">
      </el-carousel-item>
    </el-carousel>
    <div class="container">
      <div class="top-notices" v-if="notices.length">
        最新动态：{{notices[0].title}}
      </div>
      <div class="box">
        <!-- <div class="title1">碳交易</div> -->
          <div class="table-head-add">
            <span style="width:266px;">（元/千克）</span><span style="width:160px;">（元）</span><span style="width:160px;">（千克）</span><span style="width:180px;">（元/千克）</span><span style="width:180px;">（元/千克）</span>
          </div>
          <el-table :data="dealList" class="deal-table">
            <el-table-column prop="one" label="交易品种" width="100" align="center"></el-table-column>
            <el-table-column label="最新成交价" width="170" align="right">
              <template slot-scope="scope">
                <div :style="{color: scope.row.eight ? '#FD7175':'#29C086'}">{{scope.row.two + '&nbsp;&nbsp;&nbsp;' + (scope.row.eight ? '&uarr;':'&darr;')}}</div>
              </template>
            </el-table-column>
            <el-table-column prop="three" label="24H成交量" width="160" align="right"></el-table-column>
            <el-table-column prop="four" label="24H成交量" width="160" align="right"></el-table-column>
            <el-table-column prop="five" label="24H最高价" width="175" align="right"></el-table-column>
            <el-table-column prop="six" label="24H最低价" width="175" align="right"></el-table-column>
            <el-table-column label="日涨跌" width="100" align="center">
              <template slot-scope="scope">
                <div :style="{color: scope.row.eight ? '#FD7175':'#29C086'}">{{(scope.row.eight ? '+': '-') + scope.row.seven}}%</div>
              </template>
            </el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button size="small" type="success"  @click="handleEdit(scope.$index, scope.row)">交易</el-button>
              </template>
            </el-table-column>
          </el-table>
      </div>
      <div class="box overflow">
        <div class="news-box">
          <div class="title1"><span>新闻动态</span><router-link v-if="news.length > 5" to="/news" class="right">查看更多</router-link></div>
          <router-link :to="'/news/' + item.id" class="item" v-for="(item, index) in news" v-if="index < 5" :key="item.id"><span class="date">{{item.date.substr(5,2) + '.' + item.date.substr(8,2)}}</span>{{item.title}}</router-link>
        </div>
        <div class="notices-box">
          <div class="title1"><span>平台公告</span><router-link v-if="notices.length > 5" to="/notices" class="right">查看更多</router-link></div>
          <router-link :to="'/notices/' + item.id" class="item" v-for="(item, index) in notices" v-if="index < 5" :key="item.id"><span class="date">{{item.date.substr(5,2) + '.' + item.date.substr(8,2)}}</span>{{item.title}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { pluralAsync } from '@/util/common'
import { mapGetters } from 'vuex'
export default {
  asyncData ({ store, route }) {
    let actions = [
      () => store.dispatch('getDealList'),
      () => store.dispatch('getNotices'),
      () => store.dispatch('getNews'),
      () => store.dispatch('getCarousel')
    ]
    return pluralAsync(actions)
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([ // mapGetters
      'dealList',
      'notices',
      'news',
      'carousel'
    ])
  }
}
</script>

<style scoped>
@import '../assets/css/var.css';
.container{
  background-color: #fff;
}

.carousel-img{
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
}

.top-notices{
  height: 37px;
  line-height: 37px;
  text-align: center;
  background-color: #fcf8e3;
  color: #ee7028;
}

.box{
  position: relative;
  padding: var(--contentVerticalPadding) var(--contentHorizontalPadding);
  & .table-head-add{
    position: absolute;
    z-index: 1;
    color: #999;
    font-size: 12px;
    top: 85px;
    text-align: right;
    & span{
      display: inline-block;
    }
  }
}

.notices-box,
.news-box{
  float: right;
  width: 45%;
  & .item{
    display: block;
    color: #333;
    height: 35px;
    line-height: 35px;
    & .date{
      display: inline-block;
      color: #999;
      line-height: 1;
      padding-right: 15px;
      margin-right: 16px;
      border-right: 1px solid #aaa;
    }
  }
}

.news-box{
  float: left;
}
</style>

<style>
.deal-table {
  & td:last-child .cell{
    padding: 0;
  }
}
</style>
