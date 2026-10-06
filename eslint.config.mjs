import nextTypescript from 'eslint-config-next/typescript'
import reactHooks from 'eslint-plugin-react-hooks'

export default [
	{ ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts', '.claude/**'] },
	...nextTypescript,
	{
		plugins: { 'react-hooks': reactHooks },
		rules: { 'react-hooks/rules-of-hooks': 'error' },
	},
	{
		rules: {
			'react/no-unescaped-entities': 'off',
			'@next/next/no-page-custom-font': 'off',
			'react/prop-types': 'off',
		},
	},
	{
		files: ['src/components/ui/**', 'src/hooks/use-toast.ts'],
		rules: {
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
	{
		files: ['**/*.config.{js,mjs,ts}'],
		rules: { '@typescript-eslint/no-require-imports': 'off' },
	},
]
