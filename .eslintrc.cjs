/** @type {import('@types/eslint').ESLint.ConfigData} */
module.exports = {
	root: true,

	env: {
		browser: true,
	},

	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	ignorePatterns: [
		'.eslintrc.cjs',
		'types/vite-env.d.ts',
		'dist',
	],

	plugins: [
		'@typescript-eslint'
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],

	rules: {
		// General JS/TS
		'no-console': process.env.NODE_ENV === 'production' ?
			['error', { allow: ['warn', 'error', 'info'] }] :
			['warn', { allow: ['warn', 'error', 'info'] }],
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

		// TypeScript only
		'@typescript-eslint/no-explicit-any': 'off',

		// Formatting
		quotes: ['warn', 'single'],
		semi: process.env.NODE_ENV === 'production' ? ['error', 'never'] : ['warn', 'never'],

		indent: 'off',
		'@typescript-eslint/indent': [
			process.env.NODE_ENV === 'production' ? 'error' : 'warn',
			'tab',
			{
				'SwitchCase': 0,
			},
		],

		'no-tabs': [
			'warn',
			{
				allowIndentationTabs: true,
			},
		],

		'comma-dangle': ['error', 'always-multiline'],

		'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],

		'no-multiple-empty-lines': ['warn', { max: 2, maxBOF: 0, maxEOF: 0 }],
		'no-trailing-spaces': ['warn'],
		'spaced-comment': ['warn', 'always'],
		'no-multi-spaces': ['warn'],
		'padded-blocks': ['warn', 'never', { allowSingleLineBlocks: true }],
		'space-before-function-paren': ['warn', 'never'],


		// TODO: update formatting rules

	}
}
