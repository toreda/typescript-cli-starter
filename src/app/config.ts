import {StrongMap, strongMake} from '@toreda/strong-types';

import type {CliArgs} from '../cli/args';
import {Defaults} from '../defaults';
import type {Env} from '../env';
import {Log} from '@toreda/log';
import type {Strong} from '@toreda/strong-types';

/**
 * Config data created automatically on app start. CLI arguments are used first,
 * then app defaults for any property not provided.
 *
 * @category Config
 */
export class AppConfig extends StrongMap {
	/** App execution environment: dev, qa, stage, prod. */
	public readonly env: Strong<Env>;
	public readonly log: Log;

	/**
	 *
	 * @param args
	 * @param log
	 */
	constructor(args: Partial<CliArgs>, baseLog: Log) {
		super();

		this._assertInitArgs(args, baseLog);
		// Toreda Best Practice: Use one log instance project
		// whenever possible.
		this.log = baseLog.makeLog('AppConfig');
		this.env = strongMake<Env>(Defaults.Env);

		// Recursively parse `args` looking for properties in AppConfig
		// and CliArgs with the same key name. Matching properties are
		// automatically set in AppConfig when the types match.
		this.parse(args);
	}

	private _assertInitArgs(args?: Partial<CliArgs> | null, baseLog?: Log | null): void {
		if (!args) {
			throw new Error('AppConfig assertion - args ctor arg missing.');
		}

		if (!baseLog) {
			throw new Error('AppConfig assertion - log ctor arg missing.');
		}
	}
}
