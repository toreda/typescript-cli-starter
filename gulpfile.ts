import * as webpackConfig from './webpack.config';

import {series, src} from 'gulp';

import {Build} from '@toreda/build-tools';
import {EventEmitter} from 'events';
import {Log} from '@toreda/log';
import {webpack} from 'webpack';
import yargs from 'yargs';

const argv = yargs.argv;
const eslint = require('gulp-eslint');
const log = new Log();

const build: Build = new Build({
	events: new EventEmitter(),
	log: log
});

function runLint(): Promise<NodeJS.ReadWriteStream> {
	return (
		src(['src/**'])
			// eslint() attaches the lint output to the "eslint" property
			// of the file object so it can be used by other modules.
			.pipe(eslint())
			// eslint.format() outputs the lint results to the console.
			// Alternatively use eslint.formatEach() (see Docs).
			.pipe(eslint.format())
			// To have the process exit with an error code (1) on
			// lint error, return the stream and pipe to failAfterError last.
			.pipe(eslint.failAfterError())
	);
}

function createDist(): Promise<NodeJS.ReadWriteStream> {
	return build.gulpSteps.createDir('./dist');
}

function cleanDist(): Promise<NodeJS.ReadWriteStream> {
	return build.gulpSteps.cleanDir('./dist');
}

function buildSrc(): Promise<NodeJS.ReadWriteStream> {
	return build.run.typescript('./dist', 'tsconfig.json');
}

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
