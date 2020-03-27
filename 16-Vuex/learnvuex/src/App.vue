<template>
  <div id="app">
    <h2>------------App内容: info 对象的内容是否是响应式的------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>------------{{message}}------------</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(8)}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <Hello-vuex :counter="counter"></Hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

export default {
  name: "App",
  components: {
    HelloVuex
  },
  data() {
    return {
      message: "我是App组件",
      counter: 0
    };
  },
  methods: {
    addition() {
      this.$store.commit("increment");
    },
    subtraction() {
      this.$store.commit("decrement");
    },
    addCount(count) {
      // payload: 负载
      // 1.普通提交风格
      // this.$store.commit('incrementCount', count)

      // 2.特殊提交风格
      this.$store.commit({
        type: "incrementCount",
        count
      });
    },
    addStudent() {
      const stu = { id: 5, name: "周七", age: 18 };
      this.$store.commit("addStudent", stu);
    },
    updateInfo() {
      // this.$store.commit('updateInfo')

      // 1.
      // this.$store.dispatch('aUpdateInfo',() => {
      //   console.log('里面已经完成了');        
      // })

      // 2.
      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log('里面已经完成了');          
      //   }
      // })

      // 3.
      this.$store
      .dispatch('aUpdateInfo', '我是携带的信息')
      .then( res => {
        console.log('里面完成了提交');        
        console.log(res);        
      })
    }
  }
  // computed: {
  //   more20stu() {
  //     return this.$store.state.students.filter(s => s.age > 20)
  //   }
  // },
};
</script>

<style>
</style>
