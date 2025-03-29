import {AppConfig} from './app/config';
import type {CliArgs} from './cli/args';
import {Log} from '@toreda/log';
import {type ClientDelegate, ClientLifecycle, clientPhase} from '@toreda/lifecycle';

/**
 * Example app class called by the CLI.
 */
export class App implements ClientDelegate {
	public readonly lifecycle: ClientLifecycle;
	public readonly log: Log;
	public readonly cfg: AppConfig;

	constructor(args: CliArgs, log: Log) {
		this.lifecycle = new ClientLifecycle();
		this.log = log;

		this.cfg = new AppConfig(args, log);
	}

	public async start(): Promise<App> {
		this.log.info(`CLI App starting..`);

		await clientPhase('clientOnInit', this);
		await clientPhase('clientOnLoad', this);
		await clientPhase('clientOnStart', this);
		await clientPhase('clientOnReady', this);

		return this;
	}

	/**
	 * Called when theoo init phase is done. Use init to get
	 */
	public async clientOnInit(): Promise<boolean> {
		// Safety check: stop and return if 'clientOnInit' phase has already executed.
		// Assume the clientOnInit callback contains "once on app start" logic that shouldn't
		// be called multiple times like DB connections or init, file handles opened, etc.
		if (this.lifecycle.has('clientOnInit')) {
			return false;
		}

		this.log.debug(`CLI app init complete.`);

		return this.lifecycle.phase('clientOnInit');
	}

	public async clientOnLoad(): Promise<boolean> {
		// Safety check: stop and return if 'clientOnLoad' phase has already executed.
		// Assume the clientOnLoad callback contains "once on app start" logic that shouldn't
		// be called multiple times like DB connections or init, file handles opened, etc.
		if (this.lifecycle.has('clientOnLoad')) {
			return false;
		}

		return this.lifecycle.phase('clientOnLoad');
	}

	public async clientOnStart(): Promise<boolean> {
		// Safety check: stop and return if 'clientOnStart' phase has already executed.
		// Assume the clientOnStart callback contains "once on app start" logic that shouldn't
		// be called multiple times like DB connections or init, file handles opened, etc.
		if (this.lifecycle.has('clientOnStart')) {
			return false;
		}

		return this.lifecycle.phase('clientOnStart');
	}

	public async clientOnReady(): Promise<boolean> {
		// Safety check: stop and return if 'clientOnReady' phase has already executed.
		// Assume the clientOnReady callback contains "once on app start" logic that shouldn't
		// be called multiple times like DB connections or init, file handles opened, etc.
		if (this.lifecycle.has('clientOnReady')) {
			return false;
		}

		return this.lifecycle.phase('clientOnReady');
	}

	public reset(): void {
		// Reset all lifecycle flags to their starting states.
		this.lifecycle.reset();
	}
}
