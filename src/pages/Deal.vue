<template>
  <div class="content">
    <div class="container">
      <div class="overflow">
        <div class="left-side">
          <div class="head">配额区域</div>
          <div @click="activeIndex = index" :class="{item: true, active: activeIndex == index, up: true, down: false}" v-for="(item, index) in dealList" :key="index">
            <div class="title">{{item.one}}</div>
            <div class="price">单价（元/千克）<span class="num">{{item.two}}</span></div>
            <div class="trend">日涨跌 <span class="num">{{item.seven}}</span></div>
          </div>
        </div>
        <div class="right-side">
          <div class="detail-data">
            <div>{{deal.one}}</div>
            <div>
              <div>{{deal.two}}</div>
              <div>最新成交价（元/千克）</div>
            </div>
            <div>
              <div>{{deal.three}}</div>
              <div>24H成交量（元）</div>
            </div>
            <div>
              <div>{{deal.four}}</div>
              <div>24H成交量（千克）</div>
            </div>
            <div class="high">
              <div>{{deal.five}}</div>
              <div>24H最高价（元/千克）</div>
            </div>
            <div class="low">
              <div>{{deal.six}}</div>
              <div>24H最低价（元/千克）</div>
            </div>
          </div>
          <div class="chart-box"></div>
          <div class="overflow">
            <div class="order-box">
              <div class="title1 normal"><span class="bold">快速下单</span><div class="right">手续费：0.2%，成交后收取</div></div>
              <div class="danger-type">
                <div>余额（元）<span class="money">16100.00</span>可买入量（千克）<span class="num">10220</span></div>
                <div class="overflow">
                  <div class="price-input-box">
                    <div>单价（元）</div>
                    <input v-number:2="buyPrice" type="text">
                  </div>
                  <div class="iconfont icon-cheng"></div>
                  <div class="num-input-box">
                    <div>买入量（千克）</div>
                    <input v-number="buyNum" type="text">
                  </div>
                  <div class="iconfont icon-dengyu"></div>
                  <div class="total-input-box">
                    <div>总额（元）</div>
                    <input v-number:2="buyTotal" type="text">
                  </div>
                </div>
                <el-button class="btn-block" type="danger">买入</el-button>
              </div>
              <div class="line"></div>
              <div class="success-type">
                <div>余额（元）<span class="money">16100.00</span>可买入量（千克）<span class="num">10220</span></div>
                <div class="overflow">
                  <div class="price-input-box">
                    <div>单价（元）</div>
                    <input type="text">
                  </div>
                  <div class="iconfont icon-cheng"></div>
                  <div class="num-input-box">
                    <div>卖出量（千克）</div>
                    <input type="text">
                  </div>
                  <div class="iconfont icon-dengyu"></div>
                  <div class="total-input-box">
                    <div>总额（元）</div>
                    <input type="text">
                  </div>
                </div>
                <el-button class="btn-block" type="success">卖出</el-button>
              </div>
            </div>
            <div class="buy-sell-box">
              <div class="title1 normal"><span class="bold">买卖盘</span><div class="new">最新价：<span>28.01</span></div></div>
              <el-table :row-class-name="rowName" :data="dealList">
                <el-table-column prop="one" class-name="first" label="档口" width="80" algin="center"></el-table-column>
                <el-table-column prop="two" class-name="two" label="单价（元）" width="100" align="right"></el-table-column>
                <el-table-column prop="three" label="数量（千克）" width="110" align="right"></el-table-column>
                <el-table-column prop="four" class-name="total" label="总计（元）" align="right"></el-table-column>
              </el-table>
            </div>
          </div>
          <div class="entrustment">
            <div class="tab1">
              <div @click="tabIndex = index" v-for="(item, index) in tab" :key="index" :class="{ 'tab-item': true, 'active': tabIndex === index}">{{item}}</div>
            </div>
            <div>
              <el-table :row-class-name="rowName" :data="dealList">
                <el-table-column v-for="item in list" :key="item.prop" :prop="item.prop" :label="item.label" :algin="item.align"></el-table-column>
              </el-table>
              <div class="more">
                <router-link to="">查看更多></router-link>
              </div>
            </div>
          </div>
          <div class="current-box">
            <div class="title1 normal"><span class="bold">实时成交</span><div class="right">最高价：30.24&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;最低价：27.01</div></div>
            <el-table height="339" stripe :row-class-name="rowName" :data="dealList">
              <el-table-column v-for="item in list2" :key="item.prop" :prop="item.prop" :label="item.label" :algin="item.align"></el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  asyncData ({ store, route }) {
    return store.dispatch('getDealList')
  },
  data () {
    return {
      activeIndex: 0,
      buyPrice: 0,
      buyNum: 0,
      list: [
        {
          prop: 'one',
          label: '时间',
          algin: 'center'
        },
        {
          prop: 'two',
          label: '类型',
          algin: 'right'
        },
        {
          prop: 'three',
          label: '委托价格（元）',
          algin: 'right'
        },
        {
          prop: 'four',
          label: '委托数量（千克）',
          algin: 'right'
        },
        {
          prop: 'five',
          label: '操作',
          algin: 'center'
        }
      ],
      tab: ['当前委托', '历史委托', '成交记录'],
      tabIndex: 0,
      list2: [
        {
          prop: 'one',
          label: '时间',
          algin: 'center'
        },
        {
          prop: 'two',
          label: '成交价（元）',
          algin: 'right'
        },
        {
          prop: 'three',
          label: '数量（千克）',
          algin: 'right'
        },
        {
          prop: 'four',
          label: '总计（元）',
          algin: 'right'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'dealList'
    ]),
    deal () {
      return this.$store.getters.deal(this.activeIndex)
    },
    buyTotal () {
      return (this.buyNum * this.buyPrice).toFixed(2)
    }
  },
  methods: {
    rowName (row, index) {
      let str = ''
      if (index < 5) {
        str = 'sell'
        if (index === 4) {
          str += ' row-5'
        }
      } else {
        str = 'buy'
      }
      return 'row-' + str
    }
  }
}
</script>

<style scoped>
@import '../assets/css/var.css';
.content{
  padding-top: 20px;
}

.container{
  background-color: #fff;
}

.left-side{
  float: left;
  width: 200px;
  background: rgb(14,14,14) url('../assets/images/left_bg.jpg') no-repeat;
  & .head{
    font-size: 20px;
    color: #fff;
    padding: 20px;
  }
}

.item{
  cursor: pointer;
  height: 120px;
  padding: 26px 20px 0;
  color: #b5b5b5;
  & .num{
    float: right;
  }
  &.up .num{
    color: var(--redColor);
  }
  &.down .num{
    color: var(--mainColor);
  }
  & .title{
    font-size: 18px;
    margin-bottom: 17px;
    color: #fff;
    font-weight: bold;
  }
  & .price{
    margin-bottom: 10px;
  }
  &.active{
    color: #333;
    background-color: #fff;
    & .title{
      color: var(--mainColor);
    }
    & .price{

    }
  }
}

.right-side{
  width: 922px;
  float: right;
  margin-right: 18px;
}

.detail-data{
  padding: 30px 0 23px;
  border-bottom: 1px solid #ddd;
  &:after{
    display: block;
    clear: both;
    content: '';
  }
  &>div{
    margin-left: 27px;
    float: left;
    text-align: right;
    font-size: 18px;
    color: #333;
    font-weight: bold;
    &:first-child{
      margin-left: 0;
      margin-right: 39px;
    }
    &>div{
      &:last-child{
        font-weight: normal;
        font-size: 14px;
        color: #999;
        margin-top: 8px;
      }
      &:first-child{
        font-size: 20px;
      }
    }
  }
  & .high{
    color: var(--redColor);
  }
  & .low{
    color: var(--mainColor);
  }
}

.order-box{
  width: 460px;
  float: left;
  & .iconfont{
    float: left;
    color: #333;
    font-size: 12px;
    margin: 35px 3px 0;
  }
  & input{
    display: block;
    width: 100%;
    margin-top: 7px;
    height: 39px;
    border: 1px solid #ccc;
    border-radius: 2px;
    padding: 0 11px;
    &:focus{
      border-color: var(--mainColor);
    }
  }
  & .overflow{
    margin-top: 23px;
    color: #999;
    margin-bottom: 19px;
  }
  & .line{
    margin-top: 35px;
    margin-bottom: 39px;
    border-bottom: 1px solid #ddd;
  }
}

.money{
  width: 128px;
  display: inline-block;
  margin-left: 12px;
}

.num{
  margin-left: 12px;
}

.danger-type .money,
.danger-type .num{
  color: var(--redColor);
}

.success-type .money,
.success-type .num{
  color: var(--mainColor);
}

.num-input-box,
.total-input-box,
.price-input-box{
  width: 141px;
  float: left;
}

.buy-sell-box{
  width: 420px;
  float: right;
  & .new{
    float: right;
    font-size: 14px;
    margin-top: 11px;
    & span{
      font-size: 22px;
      color: var(--mainColor);
      vertical-align: middle;
    }
  }
  & .el-table{
    border: 1px solid #ddd;
  }
}

.el-button{
  height: 39px;
  line-height: 39px;
  padding: 0;
}

.entrustment{
  border: 1px solid #ddd;
  margin-top: 49px;
  margin-bottom: 50px;
  border-top: none;
  & .active.tab-item:first-child{
    border-left-color: transparent;
  }
}

.current-box {
  & .title1 .right{
    color: #333;
  }
}
</style>

<style>
@import '../assets/css/var.css';
.buy-sell-box {
  & td{
    border: none;
    height: auto;
    padding-top: 9px;
    padding-bottom: 9px;
  }
  & th .cell{
    padding-top: 14px;
    padding-bottom: 14px;
    line-height: 1;
    background-color: #F9F9F9;
    border-bottom: 1px solid #ddd;
  }
  & .cell{
    padding-left: 0;
    padding-right: 0;
    line-height: 1;
    position: relative;
    z-index: 1;
    overflow: visible !important;
  }
  & .first .cell{
    text-align: center;
    padding-left: 18px;
  }
  & .total .cell{
    padding-right: 20px;
  }
  & tr:hover td{
    background-color: #f5f5f5 !important;
  }
  & tbody .row-5 .cell:after{
    content: '';
    display: block;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
  }
  & tbody .row-5:hover{
    & td{
      background-color: #fff !important;
    }
    & .cell:before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: -10px;
      left: 0;
      background-color: #f5f5f5;
      z-index: -1;
    }
  }
  & .row-sell {
    & .first,
    & .two{
      color: var(--mainColor);
    }
  }
  & .row-buy {
    & .first,
    & .two{
      color: var(--redColor);
    }
  }
}

.entrustment{
  & th .cell{
    line-height: 1;
    padding-top: 27px;
    padding-bottom: 27px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }
  & td{
    padding-top: 22px;
    padding-bottom: 22px;
    border-bottom: 1px dotted #ddd;
    & .cell{
      line-height: 1;
    }
  }
  & .more{
    font-size: 12px;
    text-align: center;
    padding: 24px 0;
    border-top: 1px dotted #ddd;
    & a{
      color: #999;
    }
  }
}

.current-box{
  & .el-table{
    border: 1px solid #ddd;
    margin-bottom: 50px;
  }
  & th .cell{
    line-height: 1;
    padding-top: 16px;
    padding-bottom: 15px;
    background-color: #f9f9f9;
    border-bottom: 1px solid #ddd;
  }
  & td{
    padding-top: 14px;
    padding-bottom: 12px;
    border-bottom: none;
    & .cell{
      line-height: 1;
    }
  }
}
</style>
