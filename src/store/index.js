import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import app from './modules/app'
import table from './modules/table'
// import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    a: 123
  },
  modules: {
    app,
    auth,
    table
  }
  // getters
})

export default store
