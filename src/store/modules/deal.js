import getData from '../../util/getData'
import config from '../../config'
import api from '../../util/api'
import { empty } from '@/util/common'
const { api: apiUrl } = config

const state = {
  list: null,
  type1: null,
  ownBargainList: null
}

const getters = {
  dealList: state => state.list || [],
  ownBargainList: state => state.ownBargainList || [],
  deal: (state, getters) => (index) => getters.dealList[index] || {}
}

const mutations = {
  saveDealList (state, data) {
    state.list = data
  },
  saveSaleList (state, data) {
    // TODO:
    state.type1 = data
  },
  saveBuyList (state, data) {
    // TODO:
    state.type1 = data
  },
  saveBargainList (state, data) {
    // TODO:
    state.type1 = data
  },
  saveOwnBargainList (state, data) {
    state.ownBargainList = data
  }
}

const actions = {
  getDealList ({ commit, state }, options = {}) {
    return getData(apiUrl.dealList, options, state.list).then((data) => {
      commit('saveDealList', data)
    }, empty)
  },
  getSaleList ({ commit, state }, options = {}) {
    // TODO:
    let cache = state.type1
    return getData(apiUrl.saleList, options, cache).then((data) => {
      commit('saveSaleList', {
        type: '',
        data: data
      })
    }, empty)
  },
  getBuyList ({ commit, state }, options = {}) {
    // TODO:
    let cache = state.type1
    return getData(apiUrl.buyList, options, cache).then((data) => {
      commit('savebuyList', {
        type: '',
        data: data
      })
    }, empty)
  },
  getBargainList ({ commit, state }, options = {}) {
    // TODO:
    let cache = state.type1
    return getData(apiUrl.bargainList, options, cache).then((data) => {
      commit('saveBargainList', {
        type: '',
        data: data
      })
    }, empty)
  },
  getOwnBargainList ({ commit, state }, options = {}) {
    return getData(apiUrl.ownBargainList, options, state.ownBargainList).then((data) => {
      commit('saveOwnBargainList', data)
    }, empty)
  },
  buy ({ commit, state }, options = {}) {
    return api.post(apiUrl.buy, options).then((data) => {
      commit('saveOwnBargainList', data)
    })
  },
  sell ({ commit, state }, options = {}) {
    return api.post(apiUrl.sell, options).then((data) => {
      commit('saveOwnBargainList', data)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
