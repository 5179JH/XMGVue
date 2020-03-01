<template>
  <div class="hello">
    <h2>我是HelloVuex的组件</h2>
    <h2>{{$store.state.counter}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
