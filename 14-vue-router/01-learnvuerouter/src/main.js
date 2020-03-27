import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false


// Vue.prototype.test = () => console.log('tset')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// console.log(router);
