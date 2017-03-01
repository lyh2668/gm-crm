// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from './vAxios'
import 'normalize.css/normalize.css'
import 'common/scss/index.scss'
import errno from 'common/js/errno.js'
import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'
import { LoadingPlugin } from 'vux'

Vue.use(LoadingPlugin)

Vue.use(axios)
Vue.prototype.errno = errno
sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
