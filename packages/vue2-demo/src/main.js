import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

console.log(window.__POWERED_BY_WUJIE__)

new Vue({
  render: h => h(App),
}).$mount('#app')
