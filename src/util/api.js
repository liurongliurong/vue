import axios from 'axios' // axios
// import qs from 'qs'
import config from '../config'
const { baseURL, api: apiUrl } = config

// mock

import Mock from 'mockjs'
import MockAdapter from 'axios-mock-adapter'

const mock1 = new MockAdapter(axios)
const list = ['北京配额', '广州配额', '上海配额', '深圳配额', '天津配额', '湖北配额', '重庆配额', '福建配额']
const bank = ['中国工商银行', '中国建设银行', '中国农业银行', '中国银行', '中国邮政储蓄银行', '交通银行']
let dealList = Mock.mock({
  'data|8': [
    {
      'one|+1': list,
      'two|1-100': 1,
      'three|10000-100000': 1,
      'four|10000-100000': 1,
      'five|1-100': 1,
      'six|1-100': 1,
      'seven|1-100.2': 1,
      'eight|1-2': true
    }
  ]
})
mock1.onGet(baseURL + apiUrl.dealList).reply(200, JSON.stringify(dealList))

let notices = Mock.mock({
  'data|5-10': [
    {
      'id|+1': 1,
      'title': '@cparagraph(1)',
      'content': '@cparagraph()',
      'date': '@datetime("yyyy-MM-dd HH:mm:ss")'
    }
  ]
})
mock1.onGet(baseURL + apiUrl.notices).reply(200, JSON.stringify(notices))

let news = Mock.mock({
  'data|5-10': [
    {
      'id|+1': 1,
      'title': '@cparagraph(1)',
      'content': '@cparagraph()',
      'date': '@datetime("yyyy-MM-dd HH:mm:ss")',
      'comefrom|1': ['原创内容']
    }
  ]
})
mock1.onGet(baseURL + apiUrl.news).reply(200, JSON.stringify(news))

let carousel = Mock.mock({
  'data|3-10': [
    Mock.Random.image('1920x320')
  ]
})
mock1.onGet(baseURL + apiUrl.carousel).reply(200, JSON.stringify(carousel))

let carbonAccount = Mock.mock({
  'data': {
    'balance|0-10000000.2': 1,
    'withdrawFreeze|0-10000.2': 1,
    'dealFreeze|0-10000.2': 1
  }
})
mock1.onGet(baseURL + apiUrl.carbonAccount).reply(200, JSON.stringify(carbonAccount))

let capitalAccount = Mock.mock({
  'data': {
    'balance|0-10000000.2': 1,
    'withdrawFreeze|0-10000.2': 1,
    'dealFreeze|0-10000.2': 1
  }
})
mock1.onGet(baseURL + apiUrl.capitalAccount).reply(200, JSON.stringify(capitalAccount))

let bankCard = Mock.mock({
  'data|0-6': [
    {
      'id|+1': 1,
      'name|1': bank,
      'account': '6222 **** **** **** 8888'
    }
  ]
})
mock1.onGet(baseURL + apiUrl.bankCard).reply(200, JSON.stringify(bankCard))

let bank1 = Mock.mock({
  'data|6': [
    {
      'id|+1': 1,
      'name|+1': bank
    }
  ]
})
mock1.onGet(baseURL + apiUrl.bank).reply(200, JSON.stringify(bank1))

let capitalOrder = Mock.mock({
  'data': {
    'amount': function () {
      return this.data.length >= 10 ? parseInt(Math.random() * 100) + 10 : this.data.length
    },
    'data|0-10': [
      {
        'date': '2017-09-26 10:21:48',
        'type|1': ['充值', '提现'],
        'money|1-10000.2': 1,
        'charge|1-100.2': 1,
        'actual|1-10000.2': 1,
        'status|1': ['审核中', '已完成', '失败']
      }
    ]
  }
})
mock1.onGet(baseURL + apiUrl.capitalOrder).reply(200, JSON.stringify(capitalOrder))
//

let api = axios.create({
  baseURL: baseURL,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
  responseType: 'json'
})

// 修改返回数据格式
api.defaults.transformResponse = (res) => {
  return JSON.parse(res).data
}

api.defaults.validateStatus = (status) => {
  return true
  // return status >= 200 && status < 300
}

api.interceptors.request.use(config => {
  // let token = localStorage.getItem('token')
  // if (token) {
  //   config.headers.sx = token
  // }
  // config.data = qs.stringify(config.data)
  return config
}, error => {
  return Promise.reject(error)
})

api.interceptors.response.use(response => {
  // console.log('response:' + response)
  // TODO:token过期等状态码处理
  return response.data
}, error => {
  return Promise.reject(error)
})

export default api
