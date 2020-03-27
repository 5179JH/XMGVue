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
  meta: {
    title: '首页'
  },
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
  component: About,
  meta: {
    title: '关于'
  },
  beforeEnter: (to, from, next) => {
    // console.log('about beforeEnter');
    next()    
  }
},
{
  path: '/user/:userId',
  component: User,
  meta: {
    title: '用户'
  }
},
{
  path:'/profile',
  component: Profile,
  meta: {
    title: '档案'
  }
}
]

const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass:'active'
})

// 前置守卫(guard)
router.beforeEach((to, from, next) => {
  // 从 from 跳转到 to
  document.title = to.matched[0].meta.title
  // console.log(to);  
  // console.log('+++');
 next()
})

// 后置钩子(hook)
router.afterEach((to, from) => {
  // console.log('---');
})

// 3.将 router 对象传入到 Vue 实例
export default router
