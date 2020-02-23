// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

// 1.通过 Vue.use(插件),安装插件
Vue.use(VueRouter)

// 2.创建 VueRouter 对象
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes: [{
    path:'',
    redirect: './home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:userId',
    component: User
  }
  ],
  mode: 'history',
  linkActiveClass:'active'
})

// 3.将 router 对象传入到 Vue 实例
export default router
