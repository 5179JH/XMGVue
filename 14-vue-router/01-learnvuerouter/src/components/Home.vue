<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容,啊哈哈</p>
    <router-link to="/home/news" tag="button">新闻</router-link>
    <router-link to="/home/message" tag="button">信息</router-link>
    <router-view></router-view>
    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      message: '你好啊'
    }
  },
  created() {
    console.log('home created');
    document.title = '首页'
  },
  destroyed() {
    console.log('home destroyed');
  },
  activated() {
    console.log('home activated');
    
  },
  deactivated() {
    console.log('home deactivated');
    
  }
  // mounted() {
  //   console.log('mounted');
  // },
  // updated() {
  //   console.log('updated');
  // },
}
</script>

<style>

</style>