module.exports = {
	roots: ['./'],
	coverageDirectory: './coverage',
	coveragePathIgnorePatterns: [
		'tests/',
		'node_modules/',
		'.node/',
		'jest/',
		'webpack.config.js'
	],
		'coverage/',
	moduleFileExtensions: ['ts', 'js', 'json'],
	moduleNameMapper: {'^src/(.*)': '<rootDir>/src/$1'},
	testEnvironment: 'node',
	testPathIgnorePatterns: ['/node_modules/'],
	testRegex: '(/__tests__/.*|(\\.|/)(spec))\\.ts$',
	testResultsProcessor: 'jest-sonar-reporter',
	transform: {'^.+\\.(t|j)sx?$': '@swc/jest'},
	transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)']
};
