import getData from '../../util/getData'
import config from '../../config'
// import api from '../../util/api'
import { empty } from '@/util/common'
const { api: apiUrl } = config

const state = {
  carbonAccount: null,
  carbonOrder: null,
  carbonOrderAmount: null,
  capitalAccount: null,
  capitalOrder: null,
  capitalOrderAmount: null,
  bankCard: null,
  bank: null
}

const getters = {
  carbonAccount: state => state.carbonAccount || {},
  carbonOrder: state => state.carbonOrder || [],
  carbonOrderAmount: state => state.carbonOrderAmount || 0,
  capitalAccount: state => state.capitalAccount || {},
  capitalOrder: state => state.capitalOrder || [],
  capitalOrderAmount: state => state.capitalOrderAmount || 0,
  bankCard: state => state.bankCard || [],
  bank: state => state.bank || []
}

const mutations = {
  saveCarbonAccount (state, data) {
    state.carbonAccount = data
  },
  saveCapitalAccount (state, data) {
    state.capitalAccount = data
  },
  saveBankCard (state, data) {
    state.bankCard = data
  },
  saveBank (state, data) {
    state.bank = data
  },
  saveCapitalOrder (state, data) {
    state.capitalOrder = data
  },
  saveCapitalOrderAmount (state, data) {
    state.capitalOrderAmount = data
  },
  saveCarbonOrder (state, data) {
    state.carbonOrder = data
  },
  saveCarbonOrderAmount (state, data) {
    state.carbonOrderAmount = data
  }
}

const actions = {
  getCarbonAccount ({ commit, state }, options = {}) {
    return getData(apiUrl.carbonAccount, options, state.carbonAccount).then((data) => {
      commit('saveCarbonAccount', data)
    }, empty)
  },
  getCapitalAccount ({ commit, state }, options = {}) {
    return getData(apiUrl.capitalAccount, options, state.capitalAccount).then((data) => {
      commit('saveCapitalAccount', data)
    }, empty)
  },
  getCapitalOrder ({ commit, state }, options = {}) {
    return getData(apiUrl.capitalOrder, options, state.capitalOrder, { data: state.capitalOrder, amount: state.capitalOrderAmount }).then((data) => {
      commit('saveCapitalOrder', data.data)
      commit('saveCapitalOrderAmount', data.amount)
    }, empty)
  },
  getCarbonOrder ({ commit, state }, options = {}) {
    return getData(apiUrl.carbonOrder, options, state.carbonOrder, { data: state.carbonOrder, amount: state.carbonOrderAmount }).then((data) => {
      commit('saveCarbonOrder', data.data)
      commit('saveCarbonOrderAmount', data.amount)
    }, empty)
  },
  getBankCard ({ commit, state }, options = {}) {
    return getData(apiUrl.bankCard, options, state.bankCard).then((data) => {
      commit('saveBankCard', data)
    }, empty)
  },
  getBank ({ commit, state }, options = {}) {
    return getData(apiUrl.bank, options, state.bank).then((data) => {
      commit('saveBank', data)
    }, empty)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
