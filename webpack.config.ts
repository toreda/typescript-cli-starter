import {BannerPlugin, Configuration} from 'webpack';
import {Levels, Log} from '@toreda/log';

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import Path from 'path';
import yargs from 'yargs';

const log = new Log({
	consoleEnabled: true,
	groupsStartEnabled: true,
	globalLevel: Levels.ALL
});

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

log.info(`Webpack Build`);
log.info(`-----------------------------`);
log.info(`	build env:	${isProd ? 'prod' : 'dev'}`);
log.info(`	profiler: 	${argv.profiler === true ? 'enabled' : 'disabled'}`);

const config: Configuration = {
	mode: argv.env === 'dev' ? 'development' : 'production',
	devtool: isProd ? undefined : 'inline-source-map',
	entry: './src/cli.ts',
	output: {
		/**
		 * Whether pathinfo is bundled with output. Webpack officially
		 * recommends disabling this for large codebases due to the GC
		 * impact for project bundling thousands of modules.
		 * */
		pathinfo: true,
		filename: 'cli-app.min.js',
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
				// Include ts, tsx, js, and jsx files.
				test: /\.(ts|js)x?$/,
				use: {
					loader: 'esbuild-loader',
					options: {
						loader: 'tsx',
						target: 'esnext',
						jsx: 'automatic'
					}
				}
			}
		]
	},
	target: 'node',
	plugins: [new BannerPlugin({banner: '#!/usr/bin/env node', raw: true}), new ForkTsCheckerWebpackPlugin()],
	externalsPresets: {
		node: true
	},
	node: {
		global: false
	}
};

export default config;
