// 引入 webpack 合并文件 webpack-merge
const webpackMerge = require('webpack-merge')

const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
	devServer: {
		contentBase: './dist',
		inline: true
	}
})