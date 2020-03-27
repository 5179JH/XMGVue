export default {
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
    state.info.name = 'codewhy'
    // 错误代码: Vuex要求我们的Mutation中的方法必须是同步的,这样devtools才能帮助我们捕捉mutation的快照
    // setTimeout(() => {
    // state.info.name = 'codewhy'
    // }, 1000);

    // state.info['height'] = 1.88   这样增加的值不是响应式的
    // delete state.info.age  这样增加的值也不是响应式的
    // vue 支持响应式的方法有 
    // Vue.set(state.info, 'height', 1.88)
    // Vue.delete(state.info, 'age')
  }
}