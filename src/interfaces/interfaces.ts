import { TOPICS, WORD_CLASSES } from '@/enums/enums'

export interface ILanguageCard {
    id: string
    thema?: (typeof TOPICS)[keyof typeof TOPICS]
    article: string
    pluralEnding: string
    wordDe: string
    wordRu: string
    wordClass: (typeof WORD_CLASSES)[keyof typeof WORD_CLASSES]
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

export interface ICardsStore {
    favoriteCards: ILanguageCard[]
    addFavoriteCard: (card: ILanguageCard) => void
    removeFavoriteCard: (id: string) => void
    clearFavorites: () => void
    clearStorage: () => void
}

export interface IFavoriteCardsStore {
    favoriteCards: ILanguageCard[]
    loading: boolean
    setLoading: (isLoading: boolean) => void
    addFavoriteCard: (card: ILanguageCard) => void
    removeFavoriteCard: (id: string) => void
    clearFavorites: () => void
}

export interface IFilteredCardsStore {
    filteredCards: ILanguageCard[]
    searchQuery: string
    updateSearchQuery: (query: string) => void
}
