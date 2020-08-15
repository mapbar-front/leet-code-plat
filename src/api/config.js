export default {
  // 自定义的请求头
  headers: {
    'Content-Type': 'application/json'
  },
  // 超时设置s
  timeout: 10000,
  // 跨域是否带Token
  withCredentials: true,
  // 响应的数据格式 json / blob /document /arraybuffer / text / stream
  responseType: 'json',
  // 自定义错误状态码范围
  validateStatus () {
    return true
  }
}
