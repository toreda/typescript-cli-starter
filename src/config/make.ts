import {AppConfig} from '../app/config';
import {CliArgs} from '../cli/args';
import {Fate} from '@toreda/fate';

export async function configMake(args: CliArgs): Promise<Fate<AppConfig>> {
	const fate = new Fate<AppConfig>();
	if (!args) {
		return fate.setErrorCode(`ARGS_MISSING`);
	}

	return fate;
}
