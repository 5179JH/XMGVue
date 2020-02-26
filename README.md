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

## 13-Vue CLI

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

### 5-Vue CLI3

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

## 14-Vue-router

### 1. 认识路由

说起路由你想起了什么？
+ 路由是一个网络工程里面的术语。
+ 路由（routing）就是通过互联的网络把信息从源地址传输到目的地址的活动. — 维基百科

+ 在生活中, 我们有没有听说过路由的概念呢? 当然了, 路由器嘛.
+ 路由器是做什么的? 你有想过吗?

+ 路由器提供了两种机制: 路由和转送.

	- 路由是决定数据包从来源到目的地的路径.
	- 转送将输入端的数据转移到合适的输出端.

+ 路由中有一个非常重要的概念叫路由表.

	- 路由表本质上就是一个映射表, 决定了数据包的指向.

#### a.后端路由阶段

- 早期的网站开发整个HTML页面是由服务器来渲染的.

	+ 服务器直接生产渲染好对应的HTML页面, 返回给客户端进行展示.

- 但是, 一个网站, 这么多页面服务器如何处理呢?

	+ 一个页面有自己对应的网址, 也就是URL.

	+ URL会发送到服务器, 服务器会通过正则对该URL进行匹配, 并且最后交给一个Controller进行处理.

	+ Controller进行各种处理, 最终生成HTML或者数据, 返回给前端.

	+ 这就完成了一个IO操作.

- 上面的这种操作, 就是后端路由.

	+ 当我们页面中需要请求不同的路径内容时, 交给服务器来进行处理, 服务器渲染好整个页面, 并且将页面返回给客户顿.

	+ 这种情况下渲染好的页面, 不需要单独加载任何的js和css, 可以直接交给浏览器展示, 这样也有利于SEO的优化.

- 后端路由的缺点:

	+ 一种情况是整个页面的模块由后端人员来编写和维护的.

	+ 另一种情况是前端开发人员如果要开发页面, 需要通过PHP和Java等语言来编写页面代码.

	+ 而且通常情况下HTML代码和数据以及对应的逻辑会混在一起, 编写和维护都是非常糟糕的事情.

- **后端路由图解**
![image](https://img-blog.csdnimg.cn/2020011401113413.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### b.前端路由阶段

- 前后端分离阶段：

	+ 随着Ajax的出现, 有了前后端分离的开发模式.

	+ 后端只提供API来返回数据, 前端通过Ajax获取数据, 并且可以通过JavaScript将数据渲染到页面中.

	+ 这样做最大的优点就是前后端责任的清晰, 后端专注于数据上, 前端专注于交互和可视化上.

	+ 并且当移动端(iOS/Android)出现后, 后端不需要进行任何处理, 依然使用之前的一套API即可.

	+ 目前很多的网站依然采用这种模式开发.

- **前端路由中URL和组件的关系**
![image](https://img-blog.csdnimg.cn/20200114011147381.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

- 单页面富应用阶段(SPA simple page web application):
	+ 其实SPA最主要的特点就是在前后端分离的基础上加了一层前端路由.
	+ 也就是前端来维护一套路由规则.

- 前端路由的核心是什么呢？
 + 改变URL，但是页面不进行整体的刷新。
 + 如何实现呢？

- **SPA页面阶段**

![image](https://img-blog.csdnimg.cn/20200114011527307.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### c.URL的hash
- URL的hash
	+ URL的hash也就是锚点(#), 本质上是改变window.location的href属性.
	+ 我们可以通过直接赋值location.hash来改变href, 但是页面不发生刷新

![image](https://img-blog.csdnimg.cn/202001140112018.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### d.HTML5的history模式

##### 1.pushState
- history接口是HTML5新增的, 它有五种模式改变URL而不刷新页面.
	+ history.pushState()

![image](https://img-blog.csdnimg.cn/20200114011248824.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

##### 2.replaceState
- history.replaceState()

![image](https://img-blog.csdnimg.cn/20200114011309411.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

##### 3.go
- history.go()

![image](https://img-blog.csdnimg.cn/20200114011343651.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

- 补充说明：
	+ 上面只演示了三个方法
	+ 因为 history.back() 等价于 history.go(-1)
	+ history.forward() 则等价于 history.go(1)
	+ 这三个接口等同于浏览器界面的前进后退。



看到这里，你可以自问自答一下，下面这个几个问题。

（1）什么是前端渲染, 什么是后端渲染?

（2）什么是前后端分离?

（3）什么是前端路由, 什么是后端路由?



（1）什么是前端渲染, 什么是后端渲染?

前端渲染：

指的是后端返回JSON数据，前端利用预先写的html模板，循环读取JSON数据，拼接字符串（es6的模板字符串特性大大减少了拼接字符串的的成本），并插入页面。

好处：网络传输数据量小。不占用服务端运算资源（解析模板），模板在前端（很有可能仅部分在前端），改结构变交互都前端自己来了，改完自己调就行。

坏处：前端耗时较多，对前端工作人员水平要求相对较高。前端代码较多，因为部分以前在后台处理的交互逻辑交给了前端处理。占用少部分客户端运算资源用于解析模板。

后端渲染：

前端请求，后端用后台模板引擎直接生成html，前端接受到数据之后，直接插入页面。

好处：前端耗时少，即减少了首屏时间，模板统一在后端。前端（相对）省事，不占用客户端运算资源（解析模板）

坏处：占用服务器资源。

前端渲染与后端渲染对比：

后端渲染：

页面呈现速度：快，受限于用户的带宽
流量消耗：少一点点（可以省去前端框架部分的代码）
可维护性：差（前后端东西放一起，掐架多年，早就在闹分手啦）
seo友好度：好
编码效率：低（这个跟不同的团队不同，可能不对）

前端渲染：

页面呈现速度：主要受限于带宽和客户端机器的好坏，优化的好，可以逐步动态展开内容，感觉上会更快一点。

流量消耗：多一点点（一个前端框架大概50KB）当然，有的用后端渲染的项目前端部分也有在用框架。

可维护性：好，前后端分离，各施其职，代码一目明了。
SEO友好度：差，大量使用ajax，多数浏览器不能抓取ajax数据。
编码效率：高，前后端各自只做自己擅长的东西，后端最后只输出接口，不用管页面呈现，只要前后端人员能力不错，效率不会低。

（2）什么是前后端分离?

![image](https://img-blog.csdnimg.cn/20200114011614788.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

现在 Web 服务器不再处理任何业务，它接收到请求后，经过转换，发送给各个相关后端服务器，将各个后端服务器返回的，处理过的业务数据填入 HTML 模板，最后发送给浏览器。Web 服务器和后端服务器间，可以选用任何你觉得合适的通信手段，可以是 REST，可以是 RPC，选用什么样的通信手段，这是另一个议题了。

这样，前端人员和后端人员约定好接口后，前端人员彻底不用再关心业务处理是怎么回事，他只需要把界面做好就可以了，后端人员也不用再关系前端界面是什么样的，他只需要做好业务逻辑处理即可。服务的切离，代码管理，服务部署也都独立出来分别管理，系统的灵活性也获得了极大的提升。

**注意，这不是个微服务架构，那是另外一个议题了**

总结，任何系统架构设计，实际上是对组织结构在系统上进行映射，前后端分离，就是在对前端开发人员和后端开发人员的工作进行解耦，尽量减少他她们之间的交流成本，帮助他她们更能专注于自己擅长的工作。

最后是几个常见误解的说明：

1、前后端分离是说浏览器和后端服务分离吗？

不是，前后端分离里的前端不是浏览器，指的是生成 HTML 的那个服务，它可以是一个仅仅生成 HTML 的 Web 服务器，也可以是在浏览器中通过 JS 动态生成 HTML 的 单页应用。实践中，有实力的团队往往在实现前后端分离里时，前端选用 node 服务器，后端选用 C#、Java 等（排名不分先后）

2、前后端分离是种技术吗？

不是，前后端分离是种架构模式，或者说是最佳实践。所谓模式就是大家这么用了觉得不错，你可以直接抄来用的固定套路。

3、前后端分离是最佳实践吗？

看你团队和项目的情况，如果是短平快的小项目，真的没必要。如果是面向简历开发，那绝对在任何时候都应该使用前后端分离这种架构。

（3）什么是前端路由, 什么是后端路由?

1、什么是前端路由？

很重要的一点是页面不刷新，前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，每跳转到不同的URL都是使用前端的锚点路由. 随着（SPA）单页应用的不断普及，前后端开发分离，目前项目基本都使用前端路由，在项目使用期间页面不会重新加载。

2、什么是后端路由？

 浏览器在地址栏中切换不同的url时，每次都向后台服务器发出请求，服务器响应请求，在后台拼接html文件传给前端显示, 返回不同的页面, 意味着浏览器会刷新页面，网速慢的话说不定屏幕全白再有新内容。后端路由的另外一个极大的问题就是 前后端不分离。

 优点：分担了前端的压力，html和数据的拼接都是由服务器完成。

 缺点：当项目十分庞大时，加大了服务器端的压力，同时在浏览器端不能输入制定的url路径进行指定模块的访问。另外一个就是如果当前网速过慢，那将会延迟页面的加载，对用户体验不是很友好。

3，什么时候使用前端路由？

 在单页面应用，大部分页面结构不变，只改变部分内容的使用

4，前端路由有什么优点和缺点？

**优点:**

 1.用户体验好，和后台网速没有关系，不需要每次都从服务器全部获取，快速展现给用户

 2.可以再浏览器中输入指定想要访问的url路径地址。

 3.实现了前后端的分离，方便开发。有很多框架都带有路由功能模块。

**缺点:**

 1.使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存

 2.单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置

### 2.认识vue-router

- 目前前端流行的三大框架, 都有自己的路由实现:
	+ ngular的ngRouter
	+ eact的ReactRouter
	+ ue的vue-router

- 当然, 我们的重点是vue-router
	+ vue-router是Vue.js官方的路由插件，它和vue.js是深度集成的，适合用于构建单页面应用。
	+ 我们可以访问其官方网站对其进行学习: https://router.vuejs.org/zh/
- vue-router是基于路由和组件的
	+ 路由用于设定访问路径, 将路径和组件映射起来.
	+ 在vue-router的单页面应用中, 页面的路径的改变就是组件的切换.

### 3.安装和使用 vue-router

- 因为我们已经学习了webpack, 后续开发中我们主要是通过工程化的方式进行开发的.
	+ 所以在后续, 我们直接使用npm来安装路由即可.
	+ 步骤一: 安装vue-router
		- npm install vue-router --save
	+ 步骤二: 在模块化工程中使用它(因为是一个插件, 所以可以通过Vue.use()来安装路由功能)
		- 第一步：导入路由对象，并且调用 Vue.use(VueRouter)
		- 第二步：创建路由实例，并且传入路由映射配置
		- 第三步：在Vue实例中挂载创建的路由实例

- 使用vue-router的步骤:
	+ 第一步: 创建路由组件
	+ 第二步: 配置路由映射: 组件和路径映射关系
	+ 第三步: 使用路由: 通过<router-link>和<router-view>

```JavaScript
	import Vue from ‘vue’
	import VueRouter from ‘vue-router’

	Vue.use(VueRouter)
```

#### a.创践 router 实例

![image](https://img-blog.csdnimg.cn/20200114011715770.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### b.挂载到 Vue 实例中去

![image](https://img-blog.csdnimg.cn/20200114011726313.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### c.步骤一:创践路由组件

![image](https://img-blog.csdnimg.cn/20200114012115544.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### d.步骤二:配置组件和路径的映射关系

![image](https://img-blog.csdnimg.cn/20200114012124847.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### e.步骤三：使用路由

![image](https://img-blog.csdnimg.cn/20200114012134751.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

- <router-link>: 该标签是一个vue-router中已经内置的组件, 它会被渲染成一个<a>标签.
- <router-view>: 该标签会根据当前的路径, 动态渲染出不同的组件.
- 网页的其他内容, 比如顶部的标题/导航, 或者底部的一些版权信息等会和<router-view>处于同一个等级.
- 在路由切换时, 切换的是<router-view>挂载的组件, 其他内容不会发生改变.

#### f.最终效果如下

![image](https://img-blog.csdnimg.cn/20200114012147239.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### g.细节处理(路由的默认路径)

- 我们这里还有一个不太好的实现:
	+ 默认情况下, 进入网站的首页, 我们希望<router-view>渲染首页的内容.
	+ 但是我们的实现中, 默认没有显示首页组件, 必须让用户点击才可以.
- 如何可以让路径默认跳到到首页, 并且<router-view>渲染首页组件呢?
	+ 非常简单, 我们只需要配置多配置一个映射就可以了.

![image](https://img-blog.csdnimg.cn/20200114012159536.png)

- 配置解析:
	+ 我们在routes中又配置了一个映射.
	+ path配置的是根路径: /
	+ redirect是重定向, 也就是我们将根路径重定向到/home的路径下, 这样就可以得到我们想要的结果了.

#### h.HTML5的History模式

- 我们前面说过改变路径的方式有两种:
	+ URL的hash
	+ HTML5的history
	+ 默认情况下, 路径的改变使用的URL的hash.
- 如果希望使用HTML5的history模式, 非常简单, 进行如下配置即可:

![image](https://img-blog.csdnimg.cn/20200114012246696.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

![image](https://img-blog.csdnimg.cn/20200114012255706.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### i.router-link补充

- 在前面的`<router-link>`中, 我们只是使用了一个属性: to, 用于指定跳转的路径.

- `<router-link>`还有一些**其他属性**:`<router-link to='/home' tag='li'>`
	+ **tag**: tag可以指定`<router-link>`之后渲染成什么组件, 比如上面的代码会被渲染成一个`<li>`元素, 而不是`<a>`
	+ **replace**: replace不会留下history记录, 所以指定replace的情况下, 后退键返回不能返回到上一个页面中
	+ **active-class**: 当`<router-link>`对应的路由匹配成功时, 会自动给当前元素设置一个router-link-active的class, 设置active-class可以修改默认的名称.
		- 在进行高亮显示的导航菜单或者底部tabbar时, 会使用到该类.
		- 但是通常不会修改类的属性, 会直接使用默认的router-link-active即可.

![image](https://img-blog.csdnimg.cn/20200114012307109.png)

##### <1> 修改 linkActiveClass

- 该class具体的名称也可以通过router实例的属性进行修改

![image](https://img-blog.csdnimg.cn/2020011401231285.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

##### <2>路由代码跳转

- 有时候, 页面的跳转可能需要执行对应的JavaScript代码, 这个时候, 就可以使用第二种跳转方式了
- 比如, 我们将代码修改如下:

![image](https://img-blog.csdnimg.cn/20200114012400464.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

### 4.动态路由

- 在某些情况下，一个页面的path路径可能是不确定的，比如我们进入用户界面时，希望是如下的路径：
	+ /user/aaaa或/user/bbbb
	+ 除了有前面的/user之外，后面还跟上了用户的ID
	+ 这种path和Component的匹配关系，我们称之为动态路由(也是路由传递数据的一种方式)。

![image](https://img-blog.csdnimg.cn/20200114012420903.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

### 5.路由的懒加载

#### a.认识路由的懒加载

- 官方给出了解释:
	+ 当打包构建应用时，Javascript 包会变得非常大，影响页面加载。
	+ 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了

- 官方在说什么呢?
	+ 首先, 我们知道路由中通常会定义很多不同的页面.
	+ 这个页面最后被打包在哪里呢? 一般情况下, 是放在一个js文件中.
	+ 但是, 页面这么多放在一个js文件中, 必然会造成这个页面非常的大.
	+ 如果我们一次性从服务器请求下来这个页面, 可能需要花费一定的时间, 甚至用户的电脑上还出现了短暂空白的情况.
	+ 如何避免这种情况呢? 使用路由懒加载就可以了.

- 路由懒加载做了什么?
	+ 路由懒加载的主要作用就是将路由对应的组件打包成一个个的js代码块.
	+ 只有在这个路由被访问到的时候, 才加载对应的组件

#### b.路由懒加载的效果

![image](https://img-blog.csdnimg.cn/20200114012456983.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### c.懒加载的方式

##### <1> 结合Vue的异步组件和Webpack的代码分析.
```javascript
const Home = resolve => { require.ensure(['../components/Home.vue'], () => { resolve(require('../components/Home.vue')) })};
```

##### <2> AMD写法.
```javascript
const About = resolve => require(['../components/About.vue'], resolve);
```

##### <3> 在ES6中, 我们可以有更加简单的写法来组织Vue异步组件和Webpack的代码分割.
```javascript
const Home = () => import('../components/Home.vue')
```

### 6.路由嵌套

#### a.认识路由嵌套

- 嵌套路由是一个很常见的功能
	+ 比如在home页面中, 我们希望通过/home/news和/home/message访问一些内容.
	+ 一个路径映射一个组件, 访问这两个路径也会分别渲染两个组件.
- 路径和组件的关系如下:

![image](https://img-blog.csdnimg.cn/20200114012509853.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

- 实现嵌套路由有两个步骤:

	+ 创建对应的子组件, 并且在路由映射中配置对应的子路由.
	+ 在组件内部使用< router-view>标签.

#### b.嵌套路由实现

![image](https://img-blog.csdnimg.cn/20200114012516270.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### c.嵌套默认路径

- 嵌套路由也可以配置默认的路径, 配置方式如下:

![image](https://img-blog.csdnimg.cn/20200114012532232.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70ss)

### 7.传递参数

#### a.准备工作

- 为了演示传递参数, 我们这里再创建一个组件, 并且将其配置好
	+ 第一步: 创建新的组件Profile.vue
	+ 第二步: 配置路由映射
	+ 第三步: 添加跳转的< router-link>

![image](https://img-blog.csdnimg.cn/20200114012548317.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

![image](https://img-blog.csdnimg.cn/20200114012554719.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### b.传递参数的方式

> url的组成:
协议://主机:端口/路径?查询
scheme://host:port/path?query#fragement

- 传递参数主要有两种类型: params和query
- params的类型:

	+ 配置路由格式: /router/:id
	+ 传递的方式: 在path后面跟上对应的值
	+ 传递后形成的路径: /router/123, /router/abc
- query的类型:

	+ 配置路由格式: /router, 也就是普通配置
	+ 传递的方式: 对象中使用query的key作为传递方式
	+ 传递后形成的路径: /router?id=123, /router?id=abc
- 如何使用它们呢? 也有两种方式: <router-link>的方式和JavaScript代码方式

##### <1>传递参数方式一: <router-link>

![image](https://img-blog.csdnimg.cn/20200114012604513.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

##### <2>传递参数方式二: JavaScript代码、

![image](https://img-blog.csdnimg.cn/20200114013806708.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

##### <3>获取参数

- 获取参数通过route对象获取的.在使用了vue−router的应用中，路由对象会被注入每个组件中，赋值为this.route对象获取的.在使用了 vue-router 的应用中，路由对象会被注入每个组件中，赋值为 this.route对象获取的.在使用了vue−router的应用中，路由对象会被注入每个组件中，赋值为this.route ，并且当路由切换时，路由对象会被更新。
- 通过$route获取传递的信息如下:

![iamge](https://img-blog.csdnimg.cn/20200114013809125.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

#### c.route和router是有区别的

- route和router是有区别的
	+ router为VueRouter实例，想要导航到不同URL，则使用router为VueRouter实例，想要导航到不同URL，则使用router为VueRouter实例，想要导航到不同URL，则使用router.push方法
	+ $route为当前router跳转对象里面可以获取name、path、query、params等

![iamge](https://img-blog.csdnimg.cn/20200114013825616.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d1eXhpbnU=,size_16,color_FFFFFF,t_70)

