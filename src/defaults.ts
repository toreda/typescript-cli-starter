import type {Env} from './env';

/**
 * All Toreda projects include a `defaults.ts` file at the project's src root.
 *
 */
export class Defaults {
	public static Env: Env = 'prod' as const;
}
