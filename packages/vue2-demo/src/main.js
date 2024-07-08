import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

console.log(window.__POWERED_BY_WUJIE__)
console.log(window)

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
