import Vue from 'vue'

const modalBus = {}

modalBus.install = function(Vue) {
  Vue.prototype.$bus = new Vue()
}

Vue.use(modalBus)
