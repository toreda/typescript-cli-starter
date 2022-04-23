import {AppConfig} from '../../src/app/config';
import type {CliArgs} from '../../src/cli/args';
import {Log} from '@toreda/log';

describe('AppConfig', () => {
	let instance: AppConfig;
	let log: Log;
	let args: CliArgs;

	beforeAll(() => {
		args = {
			env: 'prod'
		};

		log = new Log();
		instance = new AppConfig(args, log);
	});

	describe('Constructor', () => {
		it(`should throw when args arg is undefined`, () => {
			expect(() => {
				new AppConfig(undefined as any, log);
			}).toThrow('AppConfig assertion - args ctor arg missing.');
		});

		it(`should throw when args arg is null`, () => {
			expect(() => {
				new AppConfig(null as any, log);
			}).toThrow('AppConfig assertion - args ctor arg missing.');
		});

		it(`should throw when baseLog arg is undefined`, () => {
			expect(() => {
				new AppConfig(args, undefined as any);
			}).toThrow('AppConfig assertion - log ctor arg missing.');
		});

		it(`should throw when baseLog arg is null`, () => {
			expect(() => {
				new AppConfig(args, undefined as any);
			}).toThrow('AppConfig assertion - log ctor arg missing.');
		});
	});
});
