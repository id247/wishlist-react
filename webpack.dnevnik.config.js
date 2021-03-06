'use strict';

var webpack = require('webpack');
var path = require('path');

var appSettings = path.resolve(__dirname, 'src/js/settings/dnevnik.js');

module.exports = {
	cache: true,
	entry: ['babel-polyfill', './src/js'],
	output: {
		path: __dirname + '/production/assets/js',
		filename: 'dnevnik.js',
		publicPath: __dirname + '/production/assets/js',
		pathinfo: true
	},

	resolve: {
		modulesDirectories: ['node_modules', 'my_modules'],
		extentions: ['', '.js'],
		alias: {
		  'appSettings': appSettings
		}
	},

	module: {
		noParse: [
		],
		loaders: [
			{   test: /\.js$/, 
				loader: 'babel',
				include: [
					__dirname + '/src/js',
					__dirname + '/my_modules',
				], 
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react', 'stage-2']
				}
			},
			{ 	test: /\.js$/, 
				include: [
					__dirname + '/src/js'
				], 
				loader: 'strip-loader?strip[]=console.log' 
			}
		]
	},
	plugins: [     
		new webpack.DefinePlugin({
			'process.env': { 
				NODE_ENV : JSON.stringify('production') 
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			comments: false,
			compress: {
				warnings: false
			}
		})
	]
};

