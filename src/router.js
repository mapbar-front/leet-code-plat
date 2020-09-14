import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/index/Home.vue'
import CodeGenerator from '@/views/codeGenerator/index.vue'

// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }

const baseRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/codeGenerator',
    name: 'codeGenerator',
    component: CodeGenerator
  },
  {
    path: '/parser',
    name: 'parser',
    component: () => import(/* webpackChunkName: "parser-example" */'@/components/parser/example/Index.vue')
  },
  {
    path: '/tinymce',
    name: 'tinymce',
    component: () => import(/* webpackChunkName: "tinymce-example" */'@/components/tinymce/example/Index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login')
  },
  {
    path: '/403',
    name: 'page403',
    component: () => import(/* webpackChunkName: "403" */ '@/views/page-403')
  }, {
    path: '/404',
    name: 'page404',
    component: () => import(/* webpackChunkName: "404" */ '@/views/page-404')
  }
]

Vue.use(Router)
const router = new Router({
  routes: baseRoutes
})
export default router
