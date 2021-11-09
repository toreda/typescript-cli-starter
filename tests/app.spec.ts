import {App} from '../src/app';
import {CliArgs} from '../src/cli/args';
import {Log} from '@toreda/log';

describe('App', () => {
	let instance: App;
	let log: Log;
	let args: CliArgs;

	beforeAll(() => {
		args = {
			env: 'prod'
		};

		log = new Log();
		instance = new App(args, log);
	});

	describe('Constructor', () => {
		it(`should do some test here`, () => {
			// empty
		});
	});
});
