<template>
  <div id="app">
    <p>{{result}}</p>
  </div>
</template>

<script>
import axios from 'axios'
import {request} from './network/request'

export default {
  name: 'App',
  data() {
    return {
      result: ''
    }
  },
  created() {
    // axios({
    //   url: 'http://xmy1018.xmyeditor.com/home/test/styles'
    // }).then(res => {
    //   this.result = res
    // })
    request({
      url: '/home/test/styles'
    }).then(res => {
      this.result = res
    }).catch(err => {
      this.result = 404
    })
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
