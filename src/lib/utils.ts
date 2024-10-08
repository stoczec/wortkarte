import { WordClasses } from '@/enums/enums'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
export const getWordClassColor = (wordClass: WordClasses) => {
	switch (wordClass) {
		case WordClasses.MASCULIN:
			return 'text-blue-500'
		case WordClasses.FEMININ:
			return 'text-red-500'
		case WordClasses.NEUTRAL:
			return 'text-green-500'
		case WordClasses.PLURAL:
			return 'text-yellow-500'
		case WordClasses.VERB:
			return 'text-orange-500'
		case WordClasses.ADJEKTIV:
			return 'text-purple-500'
		case WordClasses.ADVERB:
			return 'text-pink-500'
		case WordClasses.PRÄPOSITION:
			return 'text-gray-500'
		case WordClasses.KONJUNKTION:
			return 'text-amber-950'
		case WordClasses.PARTIKEL:
			return 'text-teal-500'
		default:
			return ''
	}
}
