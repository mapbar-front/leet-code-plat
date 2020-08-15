import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'
import config from './config'
console.log(process.env.VUE_APP_ISMOCK)
if (process.env.VUE_APP_ISMOCK === 'TRUE') {
  require('../../mock/index.js')
}

// 创建axios实例
const instance = axios.create(config)
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

instance.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.error(error)
)
// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  response => {
    if (response.status === 200) {
      return response.data
    }
  },
  // 请求失败
  error => {
    const { response } = error
    if (response) {
      const message = response.data && response.data.message

      Message.error(message)

      return Promise.reject(response)
    } else {
      if (!window.navigator.onLine) {
        Message.error('当前无网络')
      }
      return Promise.reject(error)
    }
  }
)

Vue.prototype.$http = instance

export default instance
