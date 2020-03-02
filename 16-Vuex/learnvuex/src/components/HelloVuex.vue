<template>
  <div class="hello">
    <h2>------------{{message}}------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{messages}}</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(8)}}</h2>
    <h2>------------App内容: info 对象的内容是否是响应式的------------</h2>
    <h2>{{$store.state.info}}</h2>
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
