// 引入压缩 js 的plugin --- 
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
// 引入 webpack 合并文件 webpack-merge
const webpackMerge = require('webpack-merge')

const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
	// plugin 插件
	plugins: [
		// 配置 压缩 js 的 plugin
		new uglifyjsWebpackPlugin()
	],
})