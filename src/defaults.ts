import type {Env} from './env';

/**
 * All Toreda projects include a `defaults.ts` file at the project's src root.
 *
 */
export class Defaults {
	public static App = {
		Loaded: false as const,
		Running: false as const
	} as const;
	public static Env: Env = 'prod' as const;
}
