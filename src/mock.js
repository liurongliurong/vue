import config from './config'
const { api, baseURL } = config
const Mock = require('mockjs')
// Mock.setup({
//  timeout: '200-600'
// })
Mock.mock(baseURL + api.dealList, (req, res) => {
  const arr = ['北京配额', '广州配额', '上海配额', '深圳配额', '天津配额', '湖北配额', '重庆配额', '福建配额']
  return Mock.mock({
    'data|8': [
      {
        'one|+1': arr,
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
})
Mock.mock(baseURL + api.notices, (req, res) => {
  return Mock.mock({
    'data|5-10': [
      {
        'id|+1': 1,
        'title': '@cparagraph(1)',
        'content': '@cparagraph()',
        'date': '@datetime("yyyy-MM-dd HH:mm:ss")'
      }
    ]
  })
})
Mock.mock(baseURL + api.news, (req, res) => {
  return Mock.mock({
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
})
Mock.mock(baseURL + api.carousel, (req, res) => {
  return Mock.mock({
    'data|3-10': [
      '@dataImage("1920x321")'
    ]
  })
})
Mock.mock(baseURL + api.carbonAccount, (req, res) => {
  return Mock.mock({
    'data': {
      'balance|0-10000000.2': 1,
      'withdrawFreeze|0-10000.2': 1,
      'dealFreeze|0-10000.2': 1
    }
  })
})
Mock.mock(baseURL + api.capitalAccount, (req, res) => {
  return Mock.mock({
    'data': {
      'balance|0-10000000.2': 1,
      'withdrawFreeze|0-10000.2': 1,
      'dealFreeze|0-10000.2': 1
    }
  })
})
Mock.mock(baseURL + api.bankCard, (req, res) => {
  return Mock.mock({
    'data|0-6': [
      {
        'id|+1': 1,
        'name|1': ['中国工商银行', '中国建设银行', '中国农业银行', '中国银行', '中国邮政储蓄银行', '交通银行'],
        'account': '6222 **** **** **** 8888'
      }
    ]
  })
})
Mock.mock(baseURL + api.bank, (req, res) => {
  return Mock.mock({
    'data|6': [
      {
        'id|+1': 1,
        'name|+1': ['中国工商银行', '中国建设银行', '中国农业银行', '中国银行', '中国邮政储蓄银行', '交通银行']
      }
    ]
  })
})
Mock.mock(baseURL + api.capitalOrder, (req, res) => {
  return Mock.mock({
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
})
