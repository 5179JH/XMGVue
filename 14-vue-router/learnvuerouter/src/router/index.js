// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

// 直接导入
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载方式导入
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')



// 1.通过 Vue.use(插件),安装插件
Vue.use(VueRouter)

// 2.创建 VueRouter 对象

const routes = [
{
  path:'',
  redirect: './home'
},
{
  path: '/home',
  component: Home,
  children:[
    {
      path: '',
      redirect: 'news'
    },
    {
      path: 'news',
      component: HomeNews
    },
    {
      path: 'message',
      component: HomeMessage
    }    
  ]
},
{
  path: '/about',
  component: About
},
{
  path: '/user/:userId',
  component: User
},
{
  path:'/profile',
  component: Profile
}
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass:'active'
})

// 3.将 router 对象传入到 Vue 实例
export default router
