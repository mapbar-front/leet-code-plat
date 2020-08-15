import Vue from 'vue'
import './plugins'
import App from './App.vue'
import router from './router'
import store from './store'

import './permission'

// 接入监控

import WpkReporter from 'wpk-reporter' // 导入基础sdk

const __wpk = new WpkReporter({
  bid: 'h9raxk5p-i1mcdo9n', // 新建应用时确定
  plugins: []
})

__wpk.installAll() // 初始化sdk 必须调用

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
