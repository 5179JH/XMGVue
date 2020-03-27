import axios from 'axios'

export function request(config) {
  // 1.创践axios的实例
  const instance = axios.create({
    baseURL: 'http://xmy1018.xmyeditor.com',
    timeout: 5000
  })

  // 2. axios 的拦截器
  // 2.1 请求拦截的作用
  // instance.interceptors.request.use(config => {
  //   console.log(config)
  //   // 1 比如 config 中的一些信息不符合服务器的要求

  //   // 2 比如每次发送网络请求时,都希望在页面中携带一个请求图标

  //   // 3 某些网络请求(比如登录(token)),必须携带一些特殊的信息
  //   return config
  // },err => {
  //   console.log(err)
  // })
  instance.interceptors.response.use(res => {
    console.log(res)
    return res.data
  }, err => {
    console.log(err)
  })

  // 3.发送真正的网络请求
  return instance(config)
}