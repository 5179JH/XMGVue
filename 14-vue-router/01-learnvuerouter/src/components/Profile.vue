<template>
  <div>
    <h2>我是Profile组件</h2>
    <h2>name:{{$route.query.name}}</h2>
    <h2>age:{{$route.query.age}}</h2>
    <h2>height:{{$route.query.height}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  created() {
    console.log('Profile created');
    // document.title = '用户'
  },
  destroyed() {
    console.log('Profile destroyed');
  }
}
</script>

<style>

</style>