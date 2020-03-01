<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <Hello-vuex :counter="counter"></Hello-vuex>
  </div>
</template>

<script>

import HelloVuex from './components/HelloVuex'

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '我是App组件',
      counter: 0
    }
  },
  methods: {
    addition() {
      this.$store.commit('increment')
    },
    subtraction() {
      this.$store.commit('decrement')
    }
  },
}
</script>

<style>
</style>
