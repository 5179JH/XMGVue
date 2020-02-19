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