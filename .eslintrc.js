module.exports = {
	extends: [
		'standard-with-typescript',
		'plugin:react/recommended',
		'eslint-config-prettier',
	],
	overrides: [
		{
			files: ['.eslintrc.{ts,tsx,}'],
			env: {
				browser: true,
				es2021: true,
			},
			parserOptions: {
				project: 'tsconfig.json', // Update the path to your tsconfig.json file
				sourceType: 'module',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-misused-promises': 'off'
	},
};
