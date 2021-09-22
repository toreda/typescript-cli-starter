module.exports = {
	extends: ['@toreda/eslint-config'],
	rules: {
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
		'@typescript-eslint/prefer-namespace-keyword': 'error',
		'max-len': ['warn', {code: 110, ignoreStrings: true, ignoreTemplateLiterals: true}],
		'prettier/prettier': 'warn'
	},
	overrides: [
		{
			files: ['*.spec.ts'],
			rules: {
				'max-len': 'off'
			}
		}
	]
};
