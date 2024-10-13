import { WordClasses } from '@/enums/enums'

export interface ILanguageCard {
	id: number
	article: string
	pluralEnding: string
	wordDe: string
	wordRu: string
	wordClass: WordClasses
	exampleDe: string
	exampleRu: string
	fileKeyUploadthing: string
	multiple?: ILanguageCard[]
	favorite: boolean
}
export interface IWordCardProperties {
	data: ILanguageCard
}
export interface IImageWithLoadingProperties {
	src: string
	alt: string
}

export interface IPaginatedProps {
	cards: ILanguageCard[]
	pageName: string
	currentPage: number
}

export interface ICardsStore {
	cards: ILanguageCard[]
	favoriteCards: ILanguageCard[]
	loading: boolean
	itemsPerPage: number
	setLoading: (isLoading: boolean) => void
	toggleFavorite: (id: number) => void
	clearStorage: () => void // Метод для очистки сохраненного состояния
}

export interface IFilteredCardsStore {
	filteredCards: ILanguageCard[]
	searchQuery: string
	updateSearchQuery: (query: string) => void
}
