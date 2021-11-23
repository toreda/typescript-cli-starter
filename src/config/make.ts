import {AppConfig} from '../app/config';
import {CliArgs} from '../cli/args';
import {Fate} from '@toreda/fate';

/**
 * Factory which accepts & validates CLI arg data, then creates an AppConfig object.
 * @param args
 * @returns
 *
 * @category Config
 */
export async function configMake(args: CliArgs): Promise<Fate<AppConfig>> {
	const fate = new Fate<AppConfig>();
	if (!args) {
		return fate.setErrorCode(`ARGS_MISSING`);
	}

	return fate;
}
