import { WordClasses } from '@/enums/enums'

export interface LanguageCard {
	id: number
	wordDe: string
	wordRu: string
	wordClass: WordClasses
	exampleDe: string
	exampleRu: string
	multiple?: LanguageCard[]
}
