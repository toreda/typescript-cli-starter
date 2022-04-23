import {BannerPlugin, Configuration} from 'webpack';
import {Levels, Log} from '@toreda/log';

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import Path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import yargs from 'yargs';

const log = new Log();
log.activateDefaultConsole();
log.setGlobalLevel(Levels.INFO | Levels.DEBUG);

interface BuildCmdArgs {
	[k: string]: unknown;
	env: string;
	profiler: boolean;
}

const argv = yargs(process.argv.slice(2))
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
	.showHelpOnFail(true).argv as BuildCmdArgs;

const isProd = argv.env === 'dev' ? false : true;

log.info(`Shard Build with webpack `);
log.info(`-----------------------------`);
log.info(`	build env:	${isProd ? 'prod' : 'dev'}`);
log.info(`	profiler: 	${argv.profiler === true ? 'enabled' : 'disabled'}`);
const plugins = [
	new BannerPlugin({banner: '#!/usr/bin/env node', raw: true}),
	new ForkTsCheckerWebpackPlugin()
];

const config: Configuration = {
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
		filename: 'template-app.min.js',
		path: Path.join(__dirname, 'dist'),
		libraryTarget: 'commonjs',
		library: 'app'
	},
	/** Only extensions listed here will be bundled.
	 *  IMPORTANT: Missing files dont always throw during build and may
	 *  only break when the bundle is loaded.
	 */
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	externals: [],
	module: {
		rules: [
			{
				test: /.+\.(t|j)sx?$/,
				exclude: /(node_modules|bower_components)/,
				use: 'swc-loader'
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

export default config;
