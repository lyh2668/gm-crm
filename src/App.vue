<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import errno from 'common/js/errno'
export default {
  name: 'app',
  beforeCreate () {
    this.$http.interceptors.request.use(config => {
      this.$vux.loading.show({
        text: '加载...'
      })
      return config
    })
    this.$http.interceptors.response.use(response => {
      setTimeout(() => {
        this.$vux.loading.hide()
      }, 100)

      let datas = response.data
      console.log(`[url]: ${response.config.url}\n[response]: `, datas)
      if (datas.errno === errno.ERR_OK) {
        return datas
      }
    }, err => {
      // console.log(err.response)
      if (err.response) {
        // axios.post('/v1/error', err.response)
        return Promise.reject(err.response.data)
      }
      return Promise.reject({
        code: 1024,
        message: err.message
      })
    })
  }
}
</script>

<style>
#app {

}
</style>
