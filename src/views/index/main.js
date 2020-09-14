import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import '@/icons'
import '../../plugins'
import store from '@/store'
import Tinymce from '@/components/tinymce/index.vue'

Vue.component('tinymce', Tinymce)

Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
