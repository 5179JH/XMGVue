# XMGVue
Learn Vue.js

**Vue 知识点汇总（上）**

**附案例代码及项目地址 https://blog.csdn.net/wuyxinu/article/details/103965753 **

**Vue 知识点汇总（下）**

**附案例代码及项目地址   https://blog.csdn.net/wuyxinu/article/details/103966175**

## 10-组件化开发

### 1. 什么是组件化
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/RZ1ozzYe8NK5uHsLD07y1Da7gOtxEr9oF6cD6qttzF8!/b/dL4AAAAAAAAA&bo=UgXfAlIF3wIDCSw!&rf=viewer_4)

### 2. Vue组件化思想
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/hyoVyjerIucVnez4Uxn26IRI8vzxNqrlrBRrXMkYnUQ!/b/dL8AAAAAAAAA&bo=6gPfAuoD3wIDCSw!&rf=viewer_4)

### 3.注册组件的基础步骤
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/d5VfPMVwdVIDvFrBVII7SUSGM.7sLTP24d893U6U7Rc!/b/dL4AAAAAAAAA&bo=wQMFAsEDBQIDORw!&rf=viewer_4)

```JavaScript
    <div id="app">
    	<my-cpn></my-cpn>
    	<my-cpn></my-cpn>
    </div>
    <script src="../js/vue.js" type="text/javascript   charset="utf-8"></script>
    <script type="text/javascript">
    	// 1.创建组件构造器对象
    	const cpnC = Vue.extend({
    		template: `
    		<div>
    			<h2>这是一个标题</h2>
    			<p>这是一段内容,哈哈哈</p>
    		</div>`
    	})
    	// 2.注册组件
    	Vue.component('my-cpn', cpnC)
    	const app = new Vue({
    		el: '#app'
    	})
    </script>
```
### 4. 注册组件步骤解析
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/91ZS54RGcWV5Eqw0h1QDRyS7hfkUfby.lsVqsC7GzUM!/b/dL4AAAAAAAAA&bo=XQWyAl0FsgIDCSw!&rf=viewer_4)

![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/nY*Kqyr67cCftFcnzkjANbNTY74Srk9.x5UfP7XAXNs!/b/dL8AAAAAAAAA&bo=TgVPAk4FTwIDORw!&rf=viewer_4)

### 5. 局部组件和全局组件
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/MROdHyYW*fC9a6foDEbI4uOvcHVj6YLPAMVeJsoXUY0!/b/dL4AAAAAAAAA&bo=ZgTbAmYE2wIDCSw!&rf=viewer_4)
```JavaScript
    <div id="app2">
		<cpn></cpn>
	</div>
	<div id="app">
		<cpn></cpn>
		<cpn></cpn>
	</div>
	<script src="../js/vue.js" type="text/javascript"charset="utf-8"></script>
	<script type="text/javascript">
		// 1. 创建组件构造器
		const cpnC = Vue.extend({
			template:`
			<div>
				<h2>标题</h2>
				<p>内容</p>
			</div>
			`				
		})
		// 2. 注册组件(全局组件,意味着可以在多个vue的实例下面使用)
		
		// 疑问: 怎么注册的组件才是局部组件
		// 全局组件
		// Vue.component('cpn', cpnC)
		const app = new Vue({
			el: '#app',
			data:{
				message:'你好啊'
			},
			// 局部组件
			components:{
				// cpn 使用组件时的标签名
				cpn: cpnC
			}
		})
		const app2 = new Vue({
			el: '#app2'
		})
	</script>
```
### 6. 父组件和子组件
![image](http://a4.qpic.cn/psb?/V13nxsPN3V5ukd/c32nn3NdUH6THuUo63kNRiXgDWNCKx6aom1BVHUR5Ao!/b/dIMAAAAAAAAA&ek=1&kp=1&pt=0&bo=ZwRcAmcEXAIDORw!&tl=1&vuin=1448557338&tm=1573822800&sce=60-2-2&rf=viewer_4)
```JavaScript
    <div id="app">
		<cpn1></cpn1>
		<cpn2></cpn2>
	</div>
	<script src="../js/vue.js" type="text/javascript"charset="utf-8"></script>
	<script type="text/javascript">
		// 1. 创建第一个组件构造器(子组件)
		const cpnC1 = Vue.extend({
			template:`
			<div>
				<h3>我是标题1</h3>
				<p>我是内容1</p>
			</div>
			`
		})
		// 2. 创建第二个组件构造器(父组件)
		const cpnC2 = Vue.extend({
			template:`
			<div>
				<h3>我是标题2</h3>
				<cpn1></cpn1>
				<p>我是内容2</p>
			</div>
			`,
			components:{
				cpn1:cpnC1
			}
		})
		
		// root 组件(根组件)
		const app = new Vue({
			el:'#app',
			components:{
				cpn2: cpnC2
			}
		})
	</script>
```
### 7. 注册组件语法糖
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/yAd5HOlN5af2nLm3VaW3*52Bj.UqS7yb3ed1h1sgwdA!/b/dLYAAAAAAAAA&bo=YwN7AmMDewIDCSw!&rf=viewer_4)
```JavaScript
    <div id="app">
		{{message}}
		<cpn1></cpn1>
		<cpn2></cpn2>
	</div>
	<script src="../js/vue.js" type="text/javascript"charset="utf-8"></script>
	<script type="text/javascript">
		// 注册全局组件的语法糖
		Vue.component("cpn1", {
			template:`
			<div>
				<h2>标题1</h2>
				<p>内容1</p>
			</div>
			`
		})
		const app = new Vue({
			el: '#app',
			data: {
				message: "你好啊"
			},
			// 注册局部组件的语法糖
			components: {
				cpn2: {
					template: `
					<div>
						<h2>标题2</h2>
						<p>内容2</p>
					</div>`
				}
			}
		})
	</script>
```
### 8. 模板的分离写法
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/RkXacLUIihOMEsNFhVMQMWjED11czTd3rcBQlbjB0Ms!/b/dLYAAAAAAAAA&bo=YgZmA2IGZgMDCSw!&rf=viewer_4)
```JavaScript
    <div id="app">
		{{message}}
		<cpn></cpn>
	</div>
	<!-- 1. script 标签,注意:类型必须是text/x-template -->
	<!-- <script type="text/x-template" id="cpn">
		<div>
			<h3>我是标题1</h3>
			<p>我是内容1</p>
		</div>
	</script> -->
	<!-- 2.template标签 -->
	<template id="cpn">
		<div>
			<h2>我是标题2</h2>
			<p>我是内容2</p>
		</div>
	</template>
	<script src="../js/vue.js" type="text/javascript"charset="utf-8"></script>
	<script type="text/javascript">
		Vue.component('cpn',{
			template:"#cpn"
		})
		const app = new Vue({
			el: '#app',
			data: {
				message: "你好啊"
			}
		})
	</script>
```
### 9. 组件可以访问Vue实例中的数据吗?
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/RjLW8rwa6pFUD66T4.qiJRXkocUOKMEnrc4hbTC2GCU!/b/dMMAAAAAAAAA&bo=iQP.AYkD*gEDCSw!&rf=viewer_4)
```JavaScript
    <div id="app">
		{{message}}
		<cpn></cpn>
	</div>
	<template id="cpn">
		<div>
			<h2>{{title}}</h2>
			<p>我是内容2</p>
		</div>
	</template>
	<script src="../js/vue.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
		Vue.component('cpn',{
			template:"#cpn",
			data() {
				return {
					title:"abc"
				}
			}
		})
		const app = new Vue({
			el: '#app',
			data: {
				message: "你好啊"
			}
		})
	</script>
```
### 10. 父子组件之间的通信
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/Rw6Rp.A6ewTP2bR0WYCVu908zQLPW6hEEoDuPRPetMQ!/b/dLYAAAAAAAAA&bo=4wMMAuMDDAIDCSw!&rf=viewer_4)
### 11. props数据验证
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/Wlo7JFo6PSHMpdtaTqDMHCTe4*z2U*CcRhgeghzEupU!/b/dDQBAAAAAAAA&bo=WgZnA1oGZwMDSWw!&rf=viewer_4)
```JavaScript
    <div id="app">
		<cpn :cmovies="movies" :cmessage="message"></cpn>
	</div>
	<template id="cpn">
		<div>
			<ul>
				<li v-for="item in cmovies">{{item}}</li>
			</ul>
			<h2>{{name}}</h2>
			<p>{{cmessage}}</p>
		</div>
	</template>
	<script src="../js/vue.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
		const cpn = {
			template: '#cpn',
			// props:['cmovies','cmessage']
			props: {
				// 1.类型限制
				// cmovies: Array,
				// cmessage: String
				// 2. 提供一些默认值,以及必传值
				cmessage: {
					type: String,
					default: 'aaaaaaa',
					required: true
				},
				cmovies: {
					type: Array,
				// Object/Array类型的Props必须使用工厂函数返回默认值。
					default() {
						return [1,2,3]
					}
				}
			},
			data() {
				return {
					name:'张'
				}
			}
		}
		const app = new Vue({
			el: '#app',
			data: {
				message: "你好啊",
				movies: ['海王', '海贼王', '海尔兄弟']
			},
			components: {
				cpn
			}
		})
	</script>
```
### 12. 组件通信-父传子(props中的驼峰标识)
```JavaScript
    <div id="app">
		{{message}}
		<cpn :c-info="info" :child-my-message="message"></cpn>
	</div>
	<template id="cpn">
		<div>
			<ul>
				<li>{{cInfo}}</li>
			</ul>
			<p>{{childMyMessage}}</p>
		</div>
	</template>
	<script src="../js/vue.js" type="text/javascript"charset="utf-8"></script>
	<script type="text/javascript">
		const cpn = {
			template: '#cpn',
			props: {
				cInfo: {
					type: Object,
					default () {
						return {}
					}
				},
				childMyMessage:{
					type: String,
					default: '默认值'
				}
			}
		}
		const app = new Vue({
			el: '#app',
			data: {
				message: "你好啊",
				info: {
					name: 'why',
					age: 18,
					height: 1.88
				}
			},
			components: {
				cpn
			}
		})
	</script>
```
### 13.子级向父级传递
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/hg*MKnUVXxrkeANq15ycWa1BMvn5vEnp2lgk8DBP1EA!/b/dLYAAAAAAAAA&bo=CQO1AQkDtQEDCSw!&rf=viewer_4)
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/Ud4whXjDDCMNLFkVfRsPEjR60OP3NKKK*zXZ437hh*g!/b/dMMAAAAAAAAA&bo=WQOpAVkDqQEDKQw!&rf=viewer_4)
```
<!-- 父组件模板 -->
	<div id="app">
		<cpn @item-click="cpnClick"></cpn>
	</div>
	<!-- 子组件模板 -->
	<template id="cpn">
		<div>
			<button v-for="item in categories" 
			@click="btnClick(item)">{{item.name}}</button>
		</div>
	</template>
	<script src="../js/vue.js" type="text/javascript"charset="utf-8"></script>
	<script type="text/javascript">
		// 1.子组件
		const cpn = {
			template: '#cpn',
			data() {
				return {
					categories: [
						{id: 'aaa',name: '热门推荐'},
						{id: 'bbb',name: '手机数码'},
						{id: 'ccc',name: '家用家电'},
						{id: 'ddd',name: '电脑办公'},
					]
				}
			},
			methods: {
				btnClick(item) {
					// 发射事件: 自定义时间
					this.$emit('item-click',item)
				}
			}
		}
		// 2.父组件
		const app = new Vue({
			el: '#app',
			data: {
				message: "你好啊"
			},
			components: {
				cpn
			},
			methods:{
				cpnClick(item) {
					console.log(item.id,item.name)
				}
			}
		})
	</script>
```
### 14. 组件通信-父子组件通信案例
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/8fyHaQ4JOD3Vrd9cBhkh.NGAzpmx3rTFlZcEHNz7ig0!/b/dIMAAAAAAAAA&bo=hwKUAYcClAEDCSw!&rf=viewer_4)
```JavaScript
    <div id="app">
		<cpn :number1="num1"
				 :number2="num2"
				 @num1change="num1change"
				 @num2change="num2change"/>
	</div>
	<template id="cpn">
		<div>
			<h2>props:{{number1}}</h2>
			<h2>data:{{dnumber1}}</h2>
			<!-- <input type="text" v-model="dnumber1"> -->
			<input type="text" :value="dnumber1" @input="num1Input">
			<h2>props:{{number2}}</h2>
			<h2>data:{{dnumber2}}</h2>
			<!-- <input type="text" v-model="dnumber2"> -->
			<input type="text" :value="dnumber2" @input="num2Input">
		</div>
	</template>
	<script src="../js/vue.js" type="text/javascript"charset="utf-8"></script>
	<script type="text/javascript">
		const app = new Vue({
			el: '#app',
			data: {
				num1: 1,
				num2: 0
			},
			methods:{
				num1change(value) {
					this.num1=parseInt(value)
				},
				num2change(value) {
					this.num2=parseInt(value)
				}
			},
			components: {
				cpn: {
					template: '#cpn',
					props: {
						number1: Number,
						number2: Number
					},
					data() {
						return {
							dnumber1: this.number1,
							dnumber2: this.number2
						}
					},
					methods: {
						num1Input(event) {
							// 1. 将 input 中的 value 赋值到 dnumber 中
							this.dnumber1 = event.target.value
							// 2. 为了让父组件可以修改值,发出一个事件
							this.$emit('num1change',this.dnumber1)
							// 3. 同时修改 dnumber2 的值
							this.dnumber2 = this.dnumber1 * 100
							this.$emit('number2change',this.dnumber2)
						},
						num2Input(event) {
							this.dnumber2 = event.target.value
							this.$emit('num2change',this.dnumber2)
							
							this.dnumber1 = this.dnumber2 / 100
							this.$emit('number1change',this.dnumber1)
						}
					}
				}
			}
		})
	</script>
```
### 15. 组件访问-父访问子-$children-$refs
```JavaScript
    <div id="app">
		{{message}}
		<cpn></cpn>
		<cpn></cpn>
		<cpn ref="aaa"></cpn>
		<button @click="btnClick">按钮</button>
	</div>
	<template id="cpn">
		<div>
			我是子组件
		</div>
	</template>
	<script src="../js/vue.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
		const app = new Vue({
			el: '#app',
			data: {
				message: "你好啊!"
			},
			methods: {
				btnClick() {
					// 1. $children 不好
					// console.log(this.$children)
					// for (let c of this.$children) {
					// 	console.log(c.name)
					// 	c.showMessage()
					// }
					// console.log(this.$children[2].name)
					
					// 2. $refs => 对象类型,默认是一个空的对象 在 组件子组件cpn 处设置属性 ref='aaa'  常用 使用非常多
					console.log(this.$refs.aaa.name)
				}
			},
			components: {
				cpn: {
					template: '#cpn',
					data() {
						return{
							name:'我是子组件的name'
						}
					},
					methods: {
						showMessage() {
							console.log('showMessage')
						}
					}
				}
			}
		})
	</script>
```
### 16. 组件访问-子访问父-$parent-$root
```JavaScript
    <div id="app">
		<h2>我是cpn组件</h2>
		<cpn></cpn>
	</div>
	<template id="cpn">
		<div>
			<ccpn></ccpn>
		</div>
	</template>
	<template id="ccpn">
		<div>
			<h2>哦豁,我是cpn组件的子组件</h2>
			<button @click="btnClick">按钮</button>
		</div>
	</template>
	<script src="../js/vue.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
		const app = new Vue({
			el:'#app',
			data:{
				message: "你好啊!"
			},
			components:{
				cpn: {
					template:'#cpn',
					data() {
						return{
							name: '我是cpn组件的name'
						}
					},
					components:{
						ccpn: {
							template:'#ccpn',
							methods:{
								btnClick() {
									// // 1.访问父组件的$parent 不常用不灵活
									// console.log(this.$parent)
									// console.log(this.$parent.name)
									
									// 2.访问根组件 $root 少用 因为根组件里面的内容很少
									// console.log(this.$root.message)
								}
							}
						}
					}
				}
			}
		})
	</script>
```

## 11-组件化高级

### 1. 为什么使用slot
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/2FlQiPzXYOtU97bb4lhKEwC4AvorleHvIm5UnLSaLsg!/b/dMMAAAAAAAAA&bo=egPGAXoDxgEDCSw!&rf=viewer_4)
### 2. slot的基本使用
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/wOng1fR7eQWWH8Qi9kuNTrc*szIPV99JzbocdWvHQiw!/b/dL8AAAAAAAAA&bo=QAPZAUAD2QEDJwI!&rf=viewer_4)
```JavaScript
	<!-- 
	 1. 插槽的基本使用<slot></slot>
	 2. 插槽的默认值<slot><button>按钮</button></slot>
	 3. 如果有多个值,同时放入到组件进行替换时,一起作为替换元可设为默认值
	 -->
	<div id="app">
		{{message}}
		<cpn></cpn>
		<cpn>
			<span>哈哈哈</span>
			<div>我是div</div>
			<p>我是p标签</p>
		</cpn>
		<cpn><i>额呵呵呵呵</i></cpn>
		<cpn></cpn>
		<cpn></cpn>
		<cpn></cpn>
		<cpn></cpn>
	</div>
	<template id="cpn">
		<div>
			<h2>我是标题</h2>
			<p>我是组件</p>
			<slot><button>按钮</button></slot>
		</div>
	</template>
			<script src="../js/vue.js" type="text/javascript"charset="utf-8"></script>
	<script type="text/javascript">
		const app = new Vue({
			el:'#app',
			data:{
				message: "你好啊!"
			},
			components:{
				cpn: {
					template:'#cpn'
				}
			}
		})
	</script>
```
### 3. 具名插槽slot
![image](http://m.qpic.cn/psb?/V13nxsPN3V5ukd/pg92bvwOFZ8z8L.XAaURZ0P6wscOq8EwcnwzsASP7Ac!/b/dLYAAAAAAAAA&bo=ggPlAYID5QEDByI!&rf=viewer_4)
```JavaScript
    <div id="app">
		<cpn><span slot="center">标题</span></cpn>
		<cpn><button slot="left">返回</button></cpn>
	</div>
	<template id="cpn">
		<div>
			<slot name="left"><span>左边</span></slot>
			<slot name="center"><span>中间</span></slot>
			<slot name="right"><span>右边</span></slot>
			<slot>哈哈哈</slot>
		</div>
	</template>
	<script src="../js/vue.js" type="text/javascript" charset="utf-8"></script>
	<script type="text/javascript">
		const app = new Vue({
			el:'#app',
			data:{
				message: "你好啊!"
			},
			components:{
				cpn: {
					template:'#cpn'
				}
			}
		})
	</script>
```

### 4. 高阶函数
> filter/map/reduce
- filter 中的回调函数有一个要求:必须返回一个boolean值
    + true: 当返回值为 true 时,函数内部会自动把这次回调的 item 加到新的数组中.
    + false: 当返回值为 false 时,函数内部会自动过滤掉这次的 item
```JavaScript
            let arr = [10, 50, 60, 30, 100, 55, 600, 111]
			//高阶函数
			let todos = arr.filter(item => item < 100).map(item => item * 2).reduce((pre,item) => pre+item)
			console.log(todos) // 函数式编程
			// 1.需求:取出所有小于100的值
			let arr1 = arr.filter(item => item < 100)
			console.log(arr1) // [10, 50, 60, 30, 55]
			// 2.需求:将所有小于100的值*2
			let arr2 = arr1.map(item => item * 2)
			console.log(arr2) // [20, 100, 120, 60, 110]
			// 3.需求:将所有的值求和
			let a = arr2.reduce((temp,item) => temp+item)
			console.log(a) // 410
			//低阶方法
			// 1.需求:取出所有小于100的值
			let newArr = []
			for (let i of arr) {
				if (i < 100) {
					newArr.push(i)
				}
			}
			console.log(newArr) // [10, 50, 60, 30, 55]
			// 2.需求:将所有小于100的值*2
			let new2Arr = []
			for (let i of newArr) {
				new2Arr.push(i * 2)
			}
			console.log(new2Arr) // [10, 50, 60, 30, 55]
			// 3.需求:将所有的值求和
			let total = 0
			for (let i of new2Arr) {
				total += i
			}
			console.log(total) 
```

## 12-webpack教程

### 1. webpack的起步

#### a. 什么是webpack

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvljcwwcuSIv7WWp5fzBazCP5AisVy5Ainy6vroxma9x0**EkuFtf8gKMDU8KUBUbqcBM8*KOU8wgmfN6.BKoKSm4!/b&bo=LATbAiwE2wIDByI!&rf=viewer_4)

#### b. webpack安装

- webpack模块化打包 webpack为了可以正常运行,必须依赖于node环境,node环境为了可以正常的执行很多代码,必须其中包含各种依赖的包,npm工具(npm packages manager)

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4Cvlr8hAnQJW3TkfrKsbSTZrmV28JxnIxfBaJ*6MWyWegPblT*4D59BhTuw.lMAWst8axU7bvJ8LPjgFgLjF6Smebw!/b&bo=dwPwAXcD8AERBzA!&rf=viewer_4)

### 2. webpack相关配置

#### a.准备工作

![image](http://server.xmyeditor.com/sucai-jpg/20200204/613c396c58009618c17d1d8b94fee631.jpg)

#### b. 在没有配置的情况下可执行:

```npm
	$ webpack ./src/main.js ./dist/bundle.js
	  Hash: 74f524a361cfecad7dce
	  Version: webpack 3.6.0
	  Time: 48ms
	  		Asset     Size  Chunks             Chunk Names
	  bundle.js  2.79 kB       0  [emitted]  main
	  	[0] ./src/main.js 96 bytes {0} [built]
	  	[1] ./src/mathUtils.js 142 bytes {0} [built]
		[2] ./src/info.js 76 bytes {0} [built]
```

#### c. 配置 webpack.config.js 入口和出口

![image](http://server.xmyeditor.com/sucai-jpg/20200204/92de29d2abd2312b0d99c0329039079b.jpg)

```javascript

	// 导入 nodejs 的 path 模块
	const path = require('path')
	
	module.exports = {
		// 入口文件
		entry: './src/main.js',
		// 出口文件
		output: {
			// 动态的获取路径
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js'
		}
	}
```

执行:(效果是一样的)

```npm
	$ webpack
	  Hash: 334ca42ef0680679dc01
	  Version: webpack 3.6.0
	  Time: 54ms
	      Asset     Size  Chunks             Chunk Names
	  bundle.js  3.63 kB       0  [emitted]  main
	     [0] ./src/main.js 283 bytes {0} [built]
	     [1] ./src/mathUtils.js 142 bytes {0} [built]
	     [2] ./src/info.js 76 bytes {0} [built]
```

#### d. 在配置 package.json 文件中的 scripts 属性定义启动:

![image](http://server.xmyeditor.com/sucai-jpg/20200204/3841cbfd337282d934e3d67a18766841.jpg)

```JavaScript
	{
	  "name": "meetwabpack",
	  "version": "1.0.0",
	  "description": "",
	  "main": "index.js",
		"scripts": {
			<!-- 想要执行 后面的代码 可以执行 npm run test -->
			"test": "echo \"Error: no test specified\" && exit 1",
			<!-- 同理 想要执行 webpack 可以 执行 npm run build -->
			"build": "webpack"
		},
	  "author": "",
	  "license": "ISC",
		<!-- dev 开发时依赖 -->
	  "devDependencies": {
	    "webpack": "^3.6.0"
	  }
	}
```

再次执行:(效果同样相同)

```npm
	$ npm run build
	  > meetwabpack@1.0.0 build D:\AAA\codes\XMGVue\LearnVuejs-v2\01-webpack的使用\02-webpack的配置
	  > webpack
	
	  Hash: 334ca42ef0680679dc01
	  Version: webpack 3.6.0
	  Time: 55ms
	      Asset     Size  Chunks             Chunk Names
	  bundle.js  3.63 kB       0  [emitted]  main
	     [0] ./src/main.js 283 bytes {0} [built]
	     [1] ./src/mathUtils.js 142 bytes {0} [built]
	     [2] ./src/info.js 76 bytes {0} [built]
```

### 3. webpack的loade

#### a. 什么是loader

![image](http://server.xmyeditor.com/sucai-jpg/20200204/5e3946912dc3cigaimuexje.jpg)

#### b. css文件处理

- **准备工作**

![image](http://server.xmyeditor.com/sucai-jpg/20200209/5e4025176577dnwijhvdnhh.jpg)

- **打包错误信息**

![image](http://server.xmyeditor.com/sucai-jpg/20200209/5e402517d2823mxhjookjgb.jpg)

- **css-loader**

![image](http://server.xmyeditor.com/sucai-jpg/20200209/5e4025175a00fpajtrdfiue.jpg)

- **style-loader**

![image](http://server.xmyeditor.com/sucai-jpg/20200209/5e40251753288lllgjqegnz.jpg)

#### c. less文件处理

- **准备工作**

![image](http://server.xmyeditor.com/sucai-jpg/20200211/38891091a0d4bdec3fc7b72f86a158fa.jpg)

- **less-loader**

![image](http://server.xmyeditor.com/sucai-jpg/20200211/30d4ce9d400862d6e27f89c2556f46b4.jpg)

#### d. 图片文件处理

- **资源准备阶段**

![image](http://server.xmyeditor.com/sucai-jpg/20200213/e58d80d871f26877c6a59fa6410fe8c7.jpg)

- **url-loader**

![image](http://server.xmyeditor.com/sucai-jpg/20200213/82076f31e44d2cc2863f94e115399cb0.jpg)

- **file-loader**

![image](http://server.xmyeditor.com/sucai-jpg/20200213/b95d858bf3101d49a83e23d826133cc5.jpg)

- **修改文件名称**

![image](http://server.xmyeditor.com/sucai-jpg/20200213/9023f44b7c3457c4b70d2ade00c0ef31.jpg)

#### e. bable(babel-loader)的使用

- **ES6语法处理**

![image](http://server.xmyeditor.com/sucai-jpg/20200213/31e204b0e179993a2eee10a01e2bf5f7.jpg)

### 4. webpack配置Vue(vue-loader)

#### a. 引入vue.js

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvloQGGx9ZbxAgllGTXgs49wkYZoznd70lif5l.lhls1w8zI0tWhIpv.OLWM4fFZW.FlOQhm6VLakh0rThhpnvLpI!/b&bo=lATKApQEygIRCT4!&rf=viewer_4)

#### b. el和template的区别

- **区别一**

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvlkCIdsJK8TujpuD3gj4RoupCZ0vZaVfM2HrUMc0usCfBj5v0pnL0SU0l*22ZBfA8TYUygQW3Z3twvwnPxJFUgHU!/b&bo=UwXgAlMF4AIRBzA!&rf=viewer_4)

- **区别二**

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvlptYQlEYPy826sRJGt86MPiXy5CLDRhRRtIL3avN0I5vPMrYwwmmk1TeW9AShGov679JGmTJkXIzlarBTHKasj4!/b&bo=VAUQAlQFEAIRFyA!&rf=viewer_4)

####  c. Vue组件化开发引入

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvllXVNFZn2HsBksG.M0IvQsc3KW9m6Hl8AghSc4wZ4AevcHBbCUbcX218IHlIAKDbEr5vm9kME2FmyaMZJjkKFn8!/b&bo=sgTbArIE2wIRFyA!&rf=viewer_4)

#### d. .vue文件封装处理

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvlvTCxgUHkadC95btM.U8mgCVlxvL9DnkVlBiAVaUKXWNRRaNeeswvHIYlsRGKKuV6hoZc0PBeUS0CND78nJ.TKA!/b&bo=cgW5AnIFuQIRFyA!&rf=viewer_4)

### 5. webpack的plugin

#### a. 认识plugin

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvloO3mJ*59BLlc92JW.e4jEz0WOKO1PWAY5zFPp935KVlAViPbbDOKCpNVpVUie.2GVN2*Q9*D1bXzEilaTDehjs!/b&bo=UAU6AlAFOgIRBzA!&rf=viewer_4)

#### b. 添加版权的plugin(BannerPlugin)

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvlulkIchI1vm21UOipvaO.9t3vWm23AIeYf6YHi9bLywpu89VXtWDhMrlWXWkWN3CbREmv80MWd58SP06Keli5Zk!/b&bo=AgOMAgIDjAIRFyA!&rf=viewer_4)

#### c. 打包 html 的plugin(htmlPlugin)

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvlvGrg**34Cc*FPHiaLVkDMEMxlOM*xYqqlJn*XJ3SeIfNx9DVgLKsBGQhZHUaxIcYU.bDEaBNZe.7DAOmN.7oJk!/b&bo=fQXRAn0F0QIRFyA!&rf=viewer_4)

#### d. 压缩 js 的plugin(uglifyjsPlugin)

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvloaXGAjtJzkg7K3UrsDrtm2XnH9oBYi2zygZqVleIUwD7v7A5LqvK99aosk6BRBI8V3yzBYeMWo*ijCfXEmgROg!/b&bo=xgTCAsYEwgIRFyA!&rf=viewer_4)

### 6. 使用 webpack 搭建本地服务器

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvlmwbgkBWUrWvWUuMdyOYpAyqsU.*5xpcK3pPq160cYAI9wmHiKweY.UtytqSbyr03oj3XAHGc1XuwIMSBDzKvhc!/b&bo=XAXSAlwF0gIRFyA!&rf=viewer_4)

#### a. webpack 配置分离

## Vue CLI

### 1. 什么是Vue CLI

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvlpRaX5vx4QFIQhGm7XqAHXsTfox9KsOwhpUQblcL6KECDOIBYT9uq2o1iW5c91pO2YcPQnWII4dmzkeIiFaapWc!/b&bo=fgU5An4FOQIRBzA!&rf=viewer_4)

### 2. Vue CLI 使用前提

#### a. Node

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvlipHI9dDkk3.9XO5QN4k2bO7himSiKKDs.KnCvtVWdsC0cnBt3qKaRDct7bWhd08nsCHIZspMCh4GRn2rh*3ENU!/b&bo=cwZhA3MGYQMRFyA!&rf=viewer_4)

#### b. Webpack

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvlugKTV2ew90VUQ5huJ4Fsj5FhR8WPiNrV8pGn8Y*8cM6xiBnYk3aLPsPrvaWRzNiJV0l0oIABs7ide0l58tY9nU!/b&bo=rARqA6wEagMRFyA!&rf=viewer_4)

### 3. Vue CLI 的使用

![image](http://m.qpic.cn/psc?/V13nxsPN3V5ukd/q8Q4MIggA9NuFR1Fl4CvlgCEpH.Z3erQ29a2kkBB*mS6neJC2Re*viMsfQ4YL7sJbaCvU3ar2C12v6bEs6F16ADYLxbzstyb1WPjNGsiWgk!/b&bo=fQU7A30FOwMRFyA!&rf=viewer_4)

### 4. Vue CLI2 详解

#### a.安装

![image](https://img-blog.csdnimg.cn/20200114005304365.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### b.目录结构详解

![image](https://img-blog.csdnimg.cn/20200114005309563.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### c.Runtime-Compiler和Runtime-only的区别

![image](https://img-blog.csdnimg.cn/20200114005327311.png)
![image](https://img-blog.csdnimg.cn/20200114005335845.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

- 简单总结
	如果在之后的开发中，你依然使用template，就需要选择Runtime-Compiler
	如果你之后的开发中，使用的是.vue文件夹开发，那么可以选择Runtime-only
#### d.render和template

- Runtime-Compiler 和 Runtime-only

![image](https://img-blog.csdnimg.cn/20200114005503155.png)
为什么存在这样的差异呢？
我们需要先理解Vue应用程序是如何运行起来的。
Vue中的模板如何最终渲染成真实DOM。
我们来看下面的一幅图。

#### d.Vue程序运行过程

![image](https://img-blog.csdnimg.cn/20200114005526596.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### e.render函数的使用

![image](https://img-blog.csdnimg.cn/20200114005636594.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### f.npm run build

![image](https://img-blog.csdnimg.cn/20200114005646791.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### g.npm run dev

![image](https://img-blog.csdnimg.cn/20200114005659123.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### h.修改配置：webpack.base.conf.js起别名

![image](https://img-blog.csdnimg.cn/20200114005707195.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

### Vue CLI37

![image](https://img-blog.csdnimg.cn/20200114005721221.png)

vue-cli 3 与 2 版本有很大区别
vue-cli 3 是基于 webpack 4 打造，vue-cli 2 还是 webapck 3
vue-cli 3 的设计原则是“0配置”，移除的配置文件根目录下的，build和config等目录
vue-cli 3 提供了 vue ui 命令，提供了可视化配置，更加人性化
移除了static文件夹，新增了public文件夹，并且index.html移动到public中

#### a. 安装

![image](https://img-blog.csdnimg.cn/20200114005804843.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### b. 目录结构详解

![image](https://img-blog.csdnimg.cn/20200114005815488.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### b. 配置去呢了?

![image](https://img-blog.csdnimg.cn/20200114005815488.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)