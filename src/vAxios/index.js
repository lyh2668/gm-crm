import axios from 'axios'
// import errno from 'common/js/errno'

const instance = axios.create()

// instance.interceptors.request.use(config => {
//   return config
// })
//
// instance.interceptors.response.use(response => {
//   let datas = response.data
//   console.log(`[url]: ${response.config.url}\n[response]: `, datas)
//   if (datas.errno === errno.ERR_OK) {
//     return datas
//   }
// }, err => {
//   // console.log(err.response)
//   if (err.response) {
//     // axios.post('/v1/error', err.response)
//     return Promise.reject(err.response.data)
//   }
//   return Promise.reject({
//     code: 1024,
//     message: err.message
//   })
// })

function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  Vue.prototype.$http = instance
}

// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(plugin)
// }

export default plugin
