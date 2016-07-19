'use strict';

var webpack = require('webpack');
var path = require('path');

var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');
var pathToReactDOM = path.resolve(node_modules, 'react-dom/dist/react-dom.min.js');

module.exports = {
	cache: true,
	entry: {
		dnevnik: './src/js/dnevnik',
		mosreg: './src/js/mosreg'
	},
	devtool: '#inline-source-map',
	output: {
		path: __dirname + '/production/assets/js',
		filename: '[name].js',
		publicPath: __dirname + '/production/assets/js',
		pathinfo: true
	},

	resolve: {
		modulesDirectories: ['node_modules'],
		extentions: ['', '.js'],
		alias: {
		  'react': pathToReact,
		  'react-dom': pathToReactDOM
		}
	},

	module: {
		noParse: [
		   pathToReact,
		],
		loaders: [
			{	test: /\.js$/, 
				loader: 'babel',
				include: [
					__dirname + '/src/js'
				], 
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react', 'stage-2']
				}
			}
		]
	},
	plugins: []
};

