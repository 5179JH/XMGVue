<template>
  <div>
    <h2>我是关于</h2>
    <p>我是关于内容,啊哈哈</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  // created() {
  //   console.log('created');
  //   document.title = '关于'
  // },
  created() {
    console.log('user created');
    // document.title = '用户'
  },
  destroyed() {
    console.log('user destroyed');
  }
}
</script>

<style>

</style>