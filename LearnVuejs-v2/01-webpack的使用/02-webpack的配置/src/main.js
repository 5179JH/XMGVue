// 1. 使用 common.js 的模块化规范
const {add, mul} = require('./mathUtils.js')

console.log(add(20,30))
console.log(mul(20,30))

// 2. 使用 ES6 的模块化规范
import {name ,age, height} from './info.js'

console.log(name)
console.log(age)
console.log(height)