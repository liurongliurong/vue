import getData from '../../util/getData'
import config from '../../config'
import api from '../../util/api'
import { empty } from '@/util/common'
const { api: apiUrl } = config

const state = {
  capital: null,
  capitalList: null,
  carbon: null,
  carbonList: null
}

const getters = {
  capital: state => state.capital || {},
  carbon: state => state.carbon || {},
  capitalList: state => state.capitalList || [],
  carbonList: state => state.carbonList || []
}

const mutations = {
  saveCapital (state, data) {
    state.capital = data
  },
  saveCarbon (state, data) {
    state.carbon = data
  },
  saveCapitalList (state, data) {
    state.capitalList = data
  },
  saveCarbonList (state, data) {
    state.carbonList = data
  }
}

const actions = {
  getCapital ({ commit, state }, options = {}) {
    return getData(apiUrl.capital, options, state.capital).then((data) => {
      commit('saveCapital', data)
    }, empty)
  },
  getCarbon ({ commit, state }, options = {}) {
    return getData(apiUrl.carbon, options, state.carbon).then((data) => {
      commit('saveCarbon', data)
    }, empty)
  },
  getCapitalList ({ commit, state }, options = {}) {
    return getData(apiUrl.capitalList, options, state.capitalList).then((data) => {
      commit('saveCapitalList', data)
    }, empty)
  },
  getCarbonList ({ commit, state }, options = {}) {
    return getData(apiUrl.carbonList, options, state.carbonList).then((data) => {
      commit('saveCarbonList', data)
    }, empty)
  },
  capitalRecharge ({ commit, state }, options = {}) {
    return api.post(apiUrl.capitalRecharge, options).then((data) => {
      commit('saveCapital', data)
    })
  },
  carbonRecharge ({ commit, state }, options = {}) {
    return api.post(apiUrl.carbonRecharge, options).then((data) => {
      commit('saveCarbon', data)
    })
  },
  capitalWithdraw ({ commit, state }, options = {}) {
    return api.post(apiUrl.capitalWithdraw, options).then((data) => {
      commit('saveCapital', data)
    })
  },
  carbonWithdraw ({ commit, state }, options = {}) {
    return api.post(apiUrl.carbonWithdraw, options).then((data) => {
      commit('saveCarbon', data)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
