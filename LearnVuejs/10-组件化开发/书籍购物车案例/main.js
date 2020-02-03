const vue = new Vue({
	el: '#app',
	data: {
		books: [{
				id: 1,
				name: '算法导论',
				date: 2006,
				price: 85.00,
				count: 1
			},
			{
				id: 2,
				name: '算法导论',
				date: 2006,
				price: 85.00,
				count: 1
			},
			{
				id: 3,
				name: '算法导论',
				date: 2006,
				price: 67.00,
				count: 1
			}
		]
	},
	methods: {
		decrement(index) {
			this.books[index].count--
		},
		increment(index) {
			this.books[index].count++
		},
		removeHandler(index) {
			this.books.splice(index, 1)
		}
	},
	computed: {
		totalPrice() {
			// let totalPrice = 0
			// for (var i = 0; i < this.books.length; i++) {
			// 	totalPrice += this.books[i].price * this.books[i].count
			// }
			// for (let i in this.books) {
			// 	totalPrice += this.books[i].price * this.books[i].count
			// }
			// for (let item of this.books) {
			// 	totalPrice += item.price * item.count
			// }
			// 高阶函数
			return this.books.reduce((pre, item) => pre + item.price * item.count,0)
		}
	},
	filters: {
		showPrice(price) {
			return '¥' + price.toFixed(2)
		}
	}
})
