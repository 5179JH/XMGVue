import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    counter: 1000,
    students: [
      { id: 1, name: '张三', age: 18 },
      { id: 2, name: '李四', age: 20 },
      { id: 3, name: '王五', age: 30 },
      { id: 4, name: '赵六', age: 10 }
    ],
    info: {
      id: 6,
      name: 'info',
      age: 80
    }
  },
  mutations: {
    // 方法
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // 1.普通提交方式接收 接收的就是一个数字
    // incrementCount(state, count) {
    //   state.counter += count
    //   console.log(count);

    // },
    // 2.特殊提交方式接收 收到的是一个对象
    incrementCount(state, payload) {
      console.log(payload);
      state.counter += payload.count

    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      // state.info.name = 'codewhy'
      // state.info['height'] = 1.88   这样增加的值不是响应式的
      // delete state.info.age  这样增加的值也不是响应式的
      // vue 支持响应式的方法有 
      // Vue.set(state.info, 'height', 1.88)
      Vue.delete(state.info, 'age')
    }
  },
  actions: {

  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age >= 20)
    },
    more20stuLength(state, getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      return age => state.students.filter(s => s.age > age)
    }
  },
  modules: {

  }
})

// 3.导出 store 对象
export default store