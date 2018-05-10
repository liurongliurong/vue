import config from '../config'

export default {
  save (self, data) {
    if (config.saveDataType === 'query') {
      self.$router.push({
        query: {
          ...self.$route.query, // 扩展运算符 es6
          ...data
        }
      })
    } else {
      localStorage.setItem('pageData', JSON.stringify({
        ...JSON.parse(localStorage.getItem('pageData')),
        path: self.$route.path,
        ...data
      }))
    }
  },
  get (self) {
    if (config.saveDataType === 'query') {
      return self.$route.query || {}
    } else {
      return JSON.parse(localStorage.getItem('pageData')) || {}
    }
  }
}
