var path = require('path');
var webpack = require('webpack');

var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.js');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.js');

var appSettings = path.resolve(__dirname, 'src/js/settings/local.js');

module.exports = {
	devtool: '#inline-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		'./src/js/index'
	],
	output: {
		path: path.join(__dirname, 'dev'),
		filename: 'local.js',
		publicPath: 'http://localhost:3000/assets/js/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve: {
		modulesDirectories: ['node_modules', 'my_modules'],
		extentions: ['', '.js'],
		alias: {
		  'appSettings': appSettings
		}
	},
	devServer: {
	},
	module: {
		noParse: [
			pathToReact,
			pathToReactDOM,
			],
			loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src/js'),
				loader: 'react-hot',
			},
			{   
				test: /\.js$/, 
				loader: 'babel',
				include: [
				path.join(__dirname, 'src/js'),
				path.join(__dirname, '/my_modules'),
				], 
				query: {
					cacheDirectory: true,
	          		presets: ['es2015', 'react', 'stage-2']
	      		}
	  		},
  		]
	}
};
