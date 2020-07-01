import Vue from 'vue'
import App from './App.vue'
import acUi from './packages/index'

Vue.config.productionTip = false
Vue.use(acUi)

new Vue({
  render: h=>h(App)
}).$mount('#app')
