<template>
  <div id="app">
    <h2>我是Vue组件</h2>
    <!-- <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link> -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button> -->
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/'+userId" tag="button">用户</router-link>
    <!-- <router-link to="/profile" tag="button">档案</router-link> -->
    <router-link :to="{ path: '/profile', query: { name:'JH', age:21, height:183 } }" tag="button">档案</router-link>
    <keep-alive exclude="Profile,User">
      <router-view>
        <!-- 所有路径匹配到的视图组件都会被缓存 -->
      </router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick() {
      // 通过代码的方式管理路由 vue-router
      // this.$router.push('/home')
      this.$router.replace('/home')
      console.log(this.$route.params);
      
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about')
    },
    // userClick() {
    //   // this.$router.push('/about')
    //   this.$router.replace('/user')
    // }
  }
}
</script>

<style>
.active {
  color: red
}
</style>
