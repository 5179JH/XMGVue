<template>
<div>
  <h2>我是用户界面</h2>
  <p>我是用户的相关信息,嘿嘿嘿</p>
  <h2>{{userId}}</h2>
  <h2>{{$route.params.userId}}</h2>
  <button @click="btnClick">按钮</button>
</div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
  methods: {
    btnClick() {
      // 所有的组件继承自vue的原型
     console.log( this.$router)
     console.log(this.$route);
     this.test()
     }
  }
}
</script>

<style>

</style>