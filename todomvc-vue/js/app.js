;
(function() {
	
	Vue.directive('focus', {
		inserted: function (el,binding) {
			el.focus()
		}
	})
	Vue.directive('todo-focus', {
		
	})
	
	const app = new Vue({
		data: {
			todos: JSON.parse(window.localStorage.getItem('todos') || '[]'),
			currentEditing: '',
			filterText:'all'
		},
		computed: {
			remaningCount () {
				return this.todos.filter(todo => !todo.completed).length
			},
			
			toggleAllStat: {
				get () {
				  // 计算属性知道它依赖了 todos
				  // 当 todos 发生变化，计算属性会重新计算
				  return this.todos.every(t => t.completed)
				},
				set () {
					const checked = !this.toggleAllStat
					this.todos.forEach(todo => {
						todo.completed = checked
					})
				}
			},
			
			filterTodos () {
				switch (this.filterText){
					case 'active':
						return this.todos.filter(t => !t.completed)
						break
					case 'completed':
						return this.todos.filter(t => t.completed)
						break
					default:
					return this.todos
						break
				}
			}
		},
		
		watch: {
			todos: {
				handler (val, oldval) {
					window.localStorage.setItem('todos', JSON.stringify(val))
				},
				deep: true
			}
		},
		
		methods: {
			handleNewTodoKeyDown (e) {
				const target = e.target
				const value = target.value.trim()
				const todos = this.todos
				// 判断是否非空	
				if (!value.length) {
					return
				}
				todos.push({
					id: todos.length + 1,
					title: value,
					completed: false
				})
				target.value = ''
			},
			
			handleToggleAllChange (e) {
				const checked = e.target.checked
				this.todos.forEach(todo => {
					todo.completed = checked
				})
			},
			
			handleRemaveTodoClick (index) {
				this.todos.splice(index,1)
			},
			
			handleGetEditingDblclick (todo) {
				this.currentEditing = todo
			},
			
			handleSaveEditKeyDown (todo, index, e) {
				const target = e.target
				// 去除用户输入是前后空格的情况
				const value = target.value.trim()
				if (!value.length) {
					// 判断值是否为空  若为空删除这条数据
					this.todos.splice(index,1)
				} else {
					// 若不为空把值赋给 该元素的title
					todo.title = value
					// 同时将currentEditing的值转换为空 使editing 样式消失
					this.currentEditing = null
				}
			},
			
			handleCancleEditEsc () {
				this.currentEditing = null
			},
			
			handleClearAllDoneClick () {
				this.todos = this.todos.filter(t => !t.completed)
			}
		}
		
	}).$mount('#app')
		// 页面初始化的时候调用一次，保持过滤状态
		handlehashchange()
		
		// 该事件在页面初始化的时候不会执行，只有 change 的才会执行
		// 注册 hash（锚点） 的改变事件
		window.onhashchange = handlehashchange
		
		function handlehashchange () {
			console.log(window.location.hash)
			app.filterText = window.location.hash.substr(2)
		}
})()
