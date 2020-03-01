<template>
  <div class="hello">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{messages}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  data() {
    return {
      message: '我是HelloVuex的组件',
      messages: 'getters'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
