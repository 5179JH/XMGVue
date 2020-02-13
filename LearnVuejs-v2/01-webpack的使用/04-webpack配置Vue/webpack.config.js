// 导入 nodejs 的 path 模块
const path = require('path')

module.exports = {
	// 入口文件
	entry: './src/main.js',
	// 出口文件
	output: {
		// 动态的获取路径
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: 'dist/'
	},
	// css 文件loder配置
	module: {
    rules: [
      {
				// 使用正则表达式匹配 css 文件 然后传给下面的loder
				test: /\.css$/,
				// css-loder 只负责解析 CSS 文件后，使用 import 加载，然后返回 css 代码
				// style-loader 会将模块的导出作为样式添加到 DOM 中
				use: [ 'style-loader', 'css-loader' ]
        // use: [ 'css-loader', 'style-loader' ] 使用多个 loder 时,是从右向左读的,所以调换位置不可以
			},
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
			}
    ]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	}
}