// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (h) { return h(App)}
})

// runtime-compiler(v1)
// template -> ast -> render -> vdom -> UI

// runtime-only(v2)(1.性能更高 2.代码量更少)
// render -> vdom -> UI