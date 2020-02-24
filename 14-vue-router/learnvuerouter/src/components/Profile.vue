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
  name: 'Profile'
}
</script>

<style>

</style>