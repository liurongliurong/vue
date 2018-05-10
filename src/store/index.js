import Vue from 'vue'
import Vuex from 'vuex'
import deal from './modules/deal'
import user from './modules/user'
import account from './modules/account'
import assets from './modules/assets'
import getData from '../util/getData'
import config from '../config'
import { empty } from '@/util/common'
const { api: apiUrl } = config

Vue.use(Vuex)

const state = {
  notices: null,
  news: null,
  carousel: null
}

const getters = {
  notices: state => state.notices || [],
  news: state => state.news || [],
  cNew: (state, getters) => (id) => {
    return getters.news.filter((value) => {
      return parseInt(value.id) === parseInt(id)
    })[0] || {'title': '', 'date': ''}
  },
  carousel: state => state.carousel || []
}

const mutations = {
  saveNotices (state, data) {
    state.notices = data
  },
  saveNews (state, data) {
    state.news = data
  },
  saveCarousel (state, data) {
    state.carousel = data
  }
}

const actions = {
  getNotices ({ state, commit }, options = {}) {
    getData(apiUrl.notices, options, state.notices).then((data) => {
      commit('saveNotices', data)
    }, empty)
  },
  getNews ({ state, commit }, options = {}) {
    return getData(apiUrl.news, options, state.news).then((data) => {
      commit('saveNews', data)
    }, empty)
  },
  getCarousel ({ state, commit }, options = {}) {
    return getData(apiUrl.carousel, options, state.carousel).then((data) => {
      commit('saveCarousel', data)
    }, empty)
  }
}

export function createStore () {
  return new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: [
      deal,
      account,
      assets,
      user
    ]
  })
}
