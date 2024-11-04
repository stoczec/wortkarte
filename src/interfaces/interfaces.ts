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

export interface IAllCardsStore {
    cards: ILanguageCard[]
    shuffledCards: ILanguageCard[]
    loading: boolean
    itemsPerPage: number
    setLoading: (isLoading: boolean) => void
    setItemsPerPage: (items: number) => void
}

export interface IFavoriteCardsStore {
    favoriteCards: ILanguageCard[]
    loading: boolean
    setLoading: (isLoading: boolean) => void
    addFavoriteCard: (card: ILanguageCard) => void
    removeFavoriteCard: (id: number) => void
    clearFavorites: () => void
}

export interface IFilteredCardsStore {
    filteredCards: ILanguageCard[]
    searchQuery: string
    updateSearchQuery: (query: string) => void
}
