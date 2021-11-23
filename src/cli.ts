import {App} from './app';
import type {CliArgs} from './cli/args';
import {Log} from '@toreda/log';
import yargs from 'yargs';

(async (): Promise<void> => {
	const log = new Log({
		consoleEnabled: true
	});

	const args = yargs(process.argv.slice[2]).options({
		env: {
			choices: ['prod', 'dev'],
			default: 'prod',
			demandOption: false,
			describe: 'Target build type'
		}
	}).argv as CliArgs;

	const app = new App(args, log);

	await app.start();
})();
