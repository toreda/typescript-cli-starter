import {Levels, Log} from '@toreda/log';

import {Build} from '@toreda/build-tools';
import {EventEmitter} from 'events';
import {series} from 'gulp';
// Using require in a ts file is bad practice and not ideal here.
import {webpack} from 'webpack';
import webpackConfig from './webpack.config';

const build: Build = new Build({
	events: new EventEmitter(),
	log: new Log({
		consoleEnabled: true,
		globalLevel: Levels.ALL
	})
});

/**
 * Run ESLint using a helper from `@toreda/build-tools`.
 * @returns
 */
function runLint(): Promise<NodeJS.ReadWriteStream> {
	return build.gulpSteps.lint({
		formatterId: 'stylish',
		srcPatterns: ['src/**']
	});
}

/**
 * Create dist directory before build.
 * @returns
 */
function createDist(): Promise<NodeJS.ReadWriteStream> {
	return build.gulpSteps.createDir('./dist', true);
}

/**
 * Remove everything in dist directory before build starts.
 * @returns
 */
function cleanDist(): Promise<NodeJS.ReadWriteStream> {
	return build.gulpSteps.cleanDir('./dist', true);
}

function buildSrc(): Promise<NodeJS.ReadWriteStream> {
	return build.run.typescript('./dist', 'tsconfig.json');
}

/**
 * Build the project webpack bundle.
 * @returns
 */
function runWebpack(): any {
	return new Promise((resolve, reject) => {
		webpack(webpackConfig, (err, stats) => {
			if (err) {
				console.error(`webpack build failed: ${err.message}.`);
				return reject(err);
			}

			if (!stats) {
				return reject(new Error(`webpack failure - stats arg is missing in build callback`));
			}

			if (stats.hasErrors()) {
				const errors: string[] = [];
				stats.compilation.errors.forEach((error) => {
					errors.push(error.message);
				});
				return reject(errors.join('\n'));
			}

			resolve(true);
		});
	});
}
exports.default = series(createDist, cleanDist, runLint, runWebpack);
