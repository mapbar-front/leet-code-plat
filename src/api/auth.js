import axios from './index.js'

export function login (params) {
  return axios.get('/system/mgr/login', params)
}

export function logout () {
  return axios.post('system/mgr/logout')
}

/**
 * 修改密码
 * @param {*} params 参数
 */
export function changePwd (params) {
  return axios.post('system/user/modifyPwd', params)
}
