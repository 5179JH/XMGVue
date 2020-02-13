// 1. 使用 common.js 的模块化规范
const {add, mul} = require('./js/mathUtils.js')

console.log(add(20,30))
console.log(mul(20,30))

// 2. 使用 ES6 的模块化规范
import {name ,age, height} from './js/info.js'

console.log(name)
console.log(age)
console.log(height)

// 3. 依赖 css 文件
require('./css/normal.css')

// 4. 依赖 less 文件
require('./css/special.less')

document.writeln('<h3>你好啊,webpack!</h3>')

// 5.使用 vue 进行开发
import Vue from 'vue'

new Vue({
  el: '#app',
  template: `
  <div>
  <h2>{{message}}</h2>
  <button @click='btnClick'>按钮</button>
  <h2>{{name}}</h2>
  </div>
  `,
  data: {
    message: 'Hello Webpack',
    name: 'coderwhy'
  },
  methods: {
    btnClick() {
      
    }
  }
})