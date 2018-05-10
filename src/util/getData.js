import api from './api'

let cacheConfig = {}

const getData = (url, options, judge, cache = judge) => {
  let { params, getDataType } = options // 解构
  if (!params && !getDataType) {
    params = options
  } else {
    let num = parseInt(getDataType)
    if (!Number.isNaN(num)) {
      if (judge) {
        let cacheTime = cacheConfig[url]
        let now = new Date().getTime()
        if (now - cacheTime > num * 1000) {
          cacheConfig[url] = new Date().getTime()
          return api.get(url, {
            params: params
          })
        } else {
          return Promise.reject()
        }
      } else {
        cacheConfig[url] = new Date().getTime()
      }
    }
  }
  if (getDataType !== 'nocache') {
    if (judge) {
      return Promise.reject()
    }
  }
  return api.get(url, {
    params: params
  })
}

export default getData
