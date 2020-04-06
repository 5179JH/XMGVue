const app = new Vue({
  data() {
    return {
      books: [
        {
          id:1,
          name:'算法导论',
          data: '2006-9',
          price: 85.00,
          count: 1
        },
        {
          id:2,
          name:'编程艺术',
          data: '2006-9',
          price: 59.00,
          count: 1
        },
        {
          id:3,
          name:'编程珠玑',
          data: '2006-9',
          price: 39.00,
          count: 1
        },
        {
          id:4,
          name:'代码大全',
          data: '2006-9',
          price: 128.00,
          count: 1
        }
      ]
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  },
  methods: {
    increment(index) {
      this.books[index].count++
    },
    decrement(index) {
      this.books[index].count--
    },
    removeBtn(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalProce() {
      let totalPrice = 0
      for (const i in this.books) {
        totalPrice += this.books[i].price * this.books[i].count
      }
      return totalPrice
    }
  },
}).$mount('#app')