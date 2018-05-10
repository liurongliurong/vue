// import getData from '../../util/getData'
import config from '../../config'
import api from '../../util/api'
const { api: apiUrl } = config

const state = {
  user: null,
  token: null
}

const getters = {
  user: state => state.user || {}
}

const mutations = {
  saveUser (state, data) {
    state.user = data
  },
  removeUser (state) {
    state.user = null
  }
}

const actions = {
  login ({ commit, state }, options) {
    return api.post(apiUrl.login, options).then((data) => {
      commit('saveUser', data)
    })
  },
  logout ({ commit, state }) {
    commit('removeUser')
  },
  register ({ commit, state }, options) {
    return api.post(apiUrl.register, options).then((data) => {
      commit('saveUser', data)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
