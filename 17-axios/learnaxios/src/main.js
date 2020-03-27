import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })

// // 2.axios 发送并发请求
// axios.all([axios({
//   url: 'http://xmy1018.xmyeditor.com/home/test/styles',
//   params: {
//     page: 1,
//     limit: 1
//   }
// }), axios({
//   url: 'http://xmy1018.xmyeditor.com/home/test/tpl',
//   params: {
//     page: 1,
//     limit: 1
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

// 3.axios全局配置
// 使用全局配置进行网络请求
// axios.defaults.baseURL = 'http://xmy1018.xmyeditor.com'
// axios.defaults.timeout = 5000

// axios.all([axios({
//   url: '/home/test/styles',
//   params: {
//     page: 1,
//     limit: 1
//   }
// }), axios({
//   url: '/home/test/tpl',
//   params: {
//     page: 1,
//     limit: 1
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1)
//   console.log(res2)
// }))

// 4. 创践对应的 axios 的实例
const instances = axios.create({
  baseURL: 'http://xmy1018.xmyeditor.com',
  timeout: 5000
})

instances({
  url: '/home/test/styles'
}).then(res => {
  console.log(res)
})

instances({
  url: '/home/test/tpl',
  params:{
    page: 1,
    limit: 1
  }
}).then(res => {
  console.log(res)
})

import {request} from './network/request'

request({
  url: '/home/test/tpl'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})