import {Levels, Log} from '@toreda/log';

import {BannerPlugin} from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import Path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import WebpackNodeExternals from 'webpack-node-externals';
import yargs from 'yargs';

const log = new Log();
log.activateDefaultConsole();
log.setGlobalLevel(Levels.INFO | Levels.DEBUG);

export interface CliArgs {
	[k: string]: unknown;
	env: string;
	profiler: boolean;
}

const argv: CliArgs = yargs(process.argv.slice(2))
	.options({
		profiler: {
			type: 'boolean',
			demandOption: false,
			default: false,
			describe: 'Run profiler with build process'
		},
		env: {
			choices: ['prod', 'dev'],
			demandOption: false,
			default: 'prod',
			describe: 'Target environment build'
		}
	})
	.showHelpOnFail(true).argv as CliArgs;

const isProd = argv.env === 'dev' ? false : true;

log.info(`Shard Build with webpack `);
log.info(`-----------------------------`);
log.info(`	build env:	${isProd ? 'prod' : 'dev'}`);
log.info(`	profiler: 	${argv.profiler === true ? 'enabled' : 'disabled'}`);
const plugins = [
	new BannerPlugin({banner: '#!/usr/bin/env node', raw: true}),
	new ForkTsCheckerWebpackPlugin({
		eslint: {
			files: ['./src/**.ts']
		}
	})
];

// Optionally run profiler.
if (argv.profiler === true) {
	log.info('------ Running Profiler ------');
	// Note: Just referencing the profiler seems to enable it,
	// even when the profiler flag is false. There's something wonky
	// in the profiler package. Moved to a dynamic import so has no
	// way to execute unless invoked by setting profiler flag to true.
	import('cpuprofile-webpack-plugin')
		.then((result) => {
			plugins.push(new result());
		})
		.catch((e) => {
			console.error(`Failed to import CPU webpack profiler`);
		});
}

module.exports = {
	mode: isProd ? 'production' : 'development',
	devtool: isProd ? undefined : 'inline-source-map',
	entry: './src/cli.ts',
	output: {
		/**
		 * Whether pathinfo is bundled with output. Webpack officially
		 * recommends disabling this for large codebases due to the GC
		 * impact for project bundling thousands of modules.
		 * */
		pathinfo: false,
		filename: 'shard.min.js',
		path: Path.join(__dirname, 'dist'),
		libraryTarget: 'commonjs',
		library: 'shard'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	externals: [
		WebpackNodeExternals({
			modulesDir: Path.resolve(__dirname, '../../../node_modules')
		})
	],
	module: {
		rules: [
			{
				// Include ts, tsx, js, and jsx files.
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							logLevel: 'info',
							happyPackMode: true,
							transpileOnly: true
						}
					},
					{
						loader: 'cache-loader',
						options: {
							cacheDirectory: Path.resolve('.webpackCache')
						}
					},
					'babel-loader'
				]
			}
		]
	},
	target: 'node',
	optimization: {
		chunkIds: 'size',
		moduleIds: 'size',
		mangleExports: 'size',
		minimize: isProd ? true : false,
		removeAvailableModules: isProd ? true : false,
		providedExports: isProd ? true : false,
		usedExports: isProd ? true : false,
		concatenateModules: isProd ? true : false,
		innerGraph: isProd ? true : false,
		splitChunks: {
			chunks: 'async',
			minSize: 20000,
			minRemainingSize: 0,
			minChunks: 1,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			enforceSizeThreshold: 50000,
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					reuseExistingChunk: true
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		},
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i,
				parallel: true,
				terserOptions: {
					compress: false,
					mangle: true
				}
			})
		]
	},
	plugins: plugins
};