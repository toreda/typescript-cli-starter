import {App} from './app';
import type {CliArgs} from './cli/args';
import {Levels, Log} from '@toreda/log';
import yargs from 'yargs';

// async IIFE wrapped start code isn't strictly necessary when global async
// is enabled, but the safe default choice to assume it's not enabled.
(async (): Promise<void> => {
	const log = new Log({
		consoleEnabled: true,
		globalLevel: Levels.ALL,
		groupsStartEnabled: true
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
