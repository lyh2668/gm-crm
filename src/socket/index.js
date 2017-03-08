import socket from 'socket.io-client'

// var socket = io.connect('192.168.0.104:8080')

function plugin (Vue) {
  if (plugin.installed) {
    return
  }
  Vue.prototype.$socket = socket
}

export default plugin
