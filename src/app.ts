import {Log} from '@toreda/log';

/**
 * Example app class called by the CLI.
 */
export class App {
	public readonly log: Log;

	constructor(log: Log) {
		this.log = log;
	}
}
