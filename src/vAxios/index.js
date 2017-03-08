import axios from 'axios'

const instance = axios.create()

function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  Vue.prototype.$http = instance
}

export default plugin
