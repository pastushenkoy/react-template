/* eslint-disable no-unused-vars */

import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import ForkTSCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

const webpackConfig: webpack.Configuration = {
	entry: {
		index: ['babel-polyfill', './src/index.tsx'],
	},
	target: 'web',
	output: {
		path: path.join(__dirname, '/dist/'),
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.css'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'babel-loader',
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader',
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: 'url-loader',
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	},
	devtool: 'source-map',
	plugins: [
		new CleanWebpackPlugin({
			verbose: true,
			cleanOnceBeforeBuildPatterns: [
				'secretBuyers*.js',
				'units*.js',
				'secretBuyerSearch*.js',
				'checkSchedule*.js',
				'unitCheckRequests*.js',
				'checkups*.js',
			],
		}),
		new CopyWebpackPlugin([{ from: 'public', to: '' }]),
		new ForkTSCheckerWebpackPlugin(),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
	},
}

export default webpackConfig
