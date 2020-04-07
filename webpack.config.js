const path = require('path');
const nodeExternals = require('webpack-node-externals');
require('dotenv').config();

const { NODE_ENV } = process.env;

module.exports = {
	entry: './src/server.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: path.resolve(__dirname, '/node_modules'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['*', '.js'],
	},
	target: 'node',
	mode: NODE_ENV,
	output: {
		path: path.join(__dirname, '/dist'),
		publicPath: '/',
		filename: 'server.bundle.js',
	},
	externals: [nodeExternals()],
};
