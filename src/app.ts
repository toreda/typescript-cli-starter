import {AppConfig} from './app/config';
import type {CliArgs} from './cli/args';
import {Log} from '@toreda/log';
import {type ClientDelegate, ClientLifecycle, clientPhase} from '@toreda/lifecycle';
import {Bool, boolMake} from '@toreda/strong-types';
import {Defaults} from './defaults';

/**
 * Example app class called by the CLI.
 */
export class App implements ClientDelegate {
	public readonly lifecycle: ClientLifecycle;
	public readonly log: Log;
	public readonly cfg: AppConfig;
	private readonly loaded: Bool;
	private readonly running: Bool;

	constructor(args: CliArgs, log: Log) {
		this.lifecycle = new ClientLifecycle();
		this.log = log;

		this.loaded = boolMake(Defaults.App.Loaded);
		this.running = boolMake(Defaults.App.Running);
		this.cfg = new AppConfig(args, log);

		this.bindListeners();
	}

	private bindListeners(): void {
		this.load = this.load.bind(this);
		this.start = this.start.bind(this);
	}

	public async load(): Promise<App> {
		// Ignore duplicate load calls after app finishes loading. Not strictly necessary
		// when `load` contains only Lifecycle phase calls as lifecycle methods set their own
		// flags to prevent dupe calls. Prevents problematic behavior if unprotected calls
		// are added in the future.
		if (this.loaded()) {
			return this;
		}
		await clientPhase('clientWillInit', this);
		await clientPhase('clientOnInit', this);
		await clientPhase('clientDidInit', this);

		await clientPhase('clientWillLoad', this);
		await clientPhase('clientOnLoad', this);
		await clientPhase('clientDidLoad', this);

		this.loaded(true);
		return this;

	}

	public async start(): Promise<App> {
		// Ignore dupe calls after app start. Lifecycle phases maintain their own flags
		// to prevent dupe calls, but other logic here isn't protected without the check.
		if (this.running()) {
			return this;
		}

		this.log.info(`CLI App starting..`);
		await this.load();
		await clientPhase('clientWillStart', this);
		await clientPhase('clientOnStart', this);
		await clientPhase('clientDidStart', this);

		await clientPhase('clientWillBecomeReady', this);
		await clientPhase('clientOnReady', this);
		await clientPhase('clientDidBecomeReady', this);

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

		return this.lifecycle.endPhase('clientOnInit');
	}

	public async clientOnLoad(): Promise<boolean> {
		// Safety check: stop and return if 'clientOnLoad' phase has already executed.
		// Assume the clientOnLoad callback contains "once on app start" logic that shouldn't
		// be called multiple times like DB connections or init, file handles opened, etc.
		if (this.lifecycle.has('clientOnLoad')) {
			return false;
		}

		return this.lifecycle.endPhase('clientOnLoad');
	}

	public async clientOnStart(): Promise<boolean> {
		// Safety check: stop and return if 'clientOnStart' phase has already executed.
		// Assume the clientOnStart callback contains "once on app start" logic that shouldn't
		// be called multiple times like DB connections or init, file handles opened, etc.
		if (this.lifecycle.has('clientOnStart')) {
			return false;
		}

		return this.lifecycle.endPhase('clientOnStart');
	}

	public async clientOnReady(): Promise<boolean> {
		// Safety check: stop and return if 'clientOnReady' phase has already executed.
		// Assume the clientOnReady callback contains "once on app start" logic that shouldn't
		// be called multiple times like DB connections or init, file handles opened, etc.
		if (this.lifecycle.has('clientOnReady')) {
			return false;
		}

		return this.lifecycle.endPhase('clientOnReady');
	}

	public reset(): void {
		// Reset all lifecycle flags to their starting states.
		this.lifecycle.reset();
	}
}
