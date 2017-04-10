import AnimateNumber from './AnimateNumber.vue'

let VueAnimateNumber = {
  install: function (Vue, options) {
    Vue.component('animate-number', AnimateNumber)
  }
}

export default VueAnimateNumber

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueAnimateNumber)
}
