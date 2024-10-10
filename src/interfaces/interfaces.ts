import { data } from '@/data/data'
import { WordClasses } from '@/enums/enums'
import { create } from 'zustand'

export interface ILanguageCard {
	id: number
	article: string
	pluralEnding: string
	wordDe: string
	wordRu: string
	wordClass: WordClasses
	exampleDe: string
	exampleRu: string
	multiple?: ILanguageCard[]
	favorite: boolean
}

export interface ICardsStore {
	cards: ILanguageCard[]
	loading: boolean
	setLoading: (isLoading: boolean) => void
}

export interface IFilteredCardsStore {
	filteredCards: ILanguageCard[]
	searchQuery: string
	updateSearchQuery: (query: string) => void
}
