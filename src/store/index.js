import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import modules from './modules'
import createLogger from 'vuex/dist/logger'
// import business from './modules/business'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
// console.log('modules: ', modules)

const store = new Vuex.Store({
  modules: modules,
  getters,
  actions,
  plugins: debug ? [createLogger()] : []
})

console.log('getters: ', store)

export default store
