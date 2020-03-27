import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: function (h) { return h(App)}
  render: h => h(App)
})

// 那么 .vue 文件中的 template 是由谁处理的呢?
// 是由 vue-template-compiler 处理的
// render -> vdom -> UI