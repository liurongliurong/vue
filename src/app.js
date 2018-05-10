import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import { sync } from 'vuex-router-sync'
import titleMixin from './util/title'
import './assets/css/index.css'
import './assets/iconfont/iconfont.css'
import { createStore } from './store'
import { createRouter } from './router'

Vue.use(ElementUI)

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

// mixin for handling title
Vue.mixin(titleMixin)

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
export function createApp () {
  // create store and router instances
  const store = createStore()
  const router = createRouter()

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}
