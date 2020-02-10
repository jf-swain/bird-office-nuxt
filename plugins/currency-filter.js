import Vue from 'vue'

Vue.filter('currency', (value, type) => {
  return value.toLocaleString(type)
})
