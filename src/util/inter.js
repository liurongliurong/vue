import config from '../../config'
import api from '../../util/api'
const { api: apiUrl } = config

const sendNote = (options, cb) => {
  api.post(apiUrl.sendNote, options).then(cb)
}

const forgetPwd = (options, cb) => {
  api.post(apiUrl.forgetPwd, options).then(cb)
}

const changePwd = (options, cb) => {
  api.post(apiUrl.changePwd, options).then(cb)
}

export {
  sendNote,
  forgetPwd,
  changePwd
}
