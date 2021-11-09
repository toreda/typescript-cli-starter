import {AppConfig} from './app/config';
import {CliArgs} from './cli/args';
import {Log} from '@toreda/log';

/**
 * Example app class called by the CLI.
 */
export class App {
	public readonly log: Log;
	public readonly cfg: AppConfig;

	constructor(args: CliArgs, log: Log) {
		this.log = log;

		this.cfg = new AppConfig(args, log);
	}

	public async start(): Promise<App> {
		this.log.info(`CLI App starting..`);
		// Perform startup work or processing calls here.

		this.log.info(`CLI App started.`);
		return this;
	}
}
