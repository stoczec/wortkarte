import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

export default [
	{ ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts'] },
	...compat.extends('next/typescript'),
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
