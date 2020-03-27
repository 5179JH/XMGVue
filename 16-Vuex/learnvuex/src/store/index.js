import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

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
  mutations,
  actions,
  getters,
  modules: {}
})

// 3.导出 store 对象
export default store