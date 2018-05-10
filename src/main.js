// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-default/index.css'
import './assets/css/index.css'
import './assets/iconfont/iconfont.css'
import ElementUI from 'element-ui'
import LoadingBar from 'iview/src/components/loading-bar'
import store from './store'

Vue.directive('number', {
  bind (el, binding, vnode) {
    let key = binding.expression
    let num = parseInt(binding.arg) > 0 ? parseInt(binding.arg) : 0
    let value = el.value
    let flag = true
    el.addEventListener('input', () => {
      let nowValue = el.value
      if (nowValue !== '') {
        if (num === 0) {
          if (nowValue.search(/^[0-9]+$/) === -1 || nowValue === '') {
            el.value = value
          }
        } else {
          let re = new RegExp('^[0-9]+(.[0-9]{0,' + num + '})?$')
          if (nowValue.search(re) === -1) {
            el.value = value
          }
        }
      }
      value = el.value
      flag = false
      vnode.context[key] = el.value
    })

    vnode.context.$watch(key, (val, oldVal) => {
      if (!flag) {
        flag = true
        return false
      }
      if (!Number.isNaN(val)) {
        if (num === 0) {
          el.value = parseInt(val)
        } else {
          el.value = parseFloat(val).toFixed(2)
        }
      }
    })
  }
})

Vue.use(ElementUI)

require('./mock')

Vue.config.productionTip = false

LoadingBar.config({
  color: '#2b85e4',
  height: 3
})

router.beforeEach((to, from, next) => {
  LoadingBar.start()
  next()
})

router.afterEach(route => {
  LoadingBar.finish()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
