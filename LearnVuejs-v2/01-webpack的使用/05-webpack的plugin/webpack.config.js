// 导入 nodejs 的 path 模块
const path = require('path')

const webpack = require('webpack')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// 入口文件
	entry: './src/main.js',
	// 出口文件
	output: {
		// 动态的获取路径
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		// publicPath: 'dist/'
	},
	// css 文件loder配置
	module: {
    rules: [
			// css 文件配置 css-loader
      {
				// 使用正则表达式匹配 css 文件 然后传给下面的loder
				test: /\.css$/,
				// css-loder 只负责解析 CSS 文件后，使用 import 加载，然后返回 css 代码
				// style-loader 会将模块的导出作为样式添加到 DOM 中
				use: [ 'style-loader', 'css-loader' ]
        // use: [ 'css-loader', 'style-loader' ] 使用多个 loder 时,是从右向左读的,所以调换位置不可以
			},
			// less 文件配置 less-loader
			{
				test: /\.less$/,
				use: [{
						loader: "style-loader" // creates style nodes from JS strings
				},
				{
						loader: "css-loader" // translates CSS into CommonJS
				},
				{
						loader: "less-loader" // compiles Less to CSS
				}]
			},
			// 文件 图片配置 url-loader
			{
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
							// 当加载的图片小于 limit 时, 会将图片图片编译成 base64 的形式
							// 当加载的图片大图 limit 时,需要使用 file-loader 模块进行加载
							limit: 28000,
							name: 'img/[name].[hash:8].[ext]' // ext(extension)
						}
          }
        ]
			},
			// js 配置 babel-loader
			{
				test: /\.js$/,
				// include: 包含
				// exclude: 排除
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
			},
			// vue-loader 配置
			{
				test: /\.vue$/,
				use: ['vue-loader']
			}
    ]
	},
	// resolve 解决文件引用路径问题
	resolve: {
		// 解决扩展名问题
		extensions: ['.js','.css','.vue'],
		// alias 别名 引入 vue 的一些配置 打包时没有错误,运行时浏览器出现错误,是因为我们使用的是 runtime-only 版本的 Vue 这里就是修改 并使用 runtime-compiler 版本的vue
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	plugins: [
		new webpack.BannerPlugin('最终版权归 5179JH 所有'),
		new htmlWebpackPlugin({
			template: 'index.html'
		})
	]
}