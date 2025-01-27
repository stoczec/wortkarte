import { EnumCARDSCATEGORY, EnumTOPICS, WORD_CLASSES, EnumWORDLEVELS } from '@/enums/enums'

export interface ILanguageCard {
    id: any
    thema?: (typeof EnumTOPICS)[keyof typeof EnumTOPICS]
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

export interface IPaginatedProps {
    displayedCards: ILanguageCard[]
    pageName: string
    currentPage: number
}

export interface ICardsStore {
    allCards: ILanguageCard[]
    displayedCards: ILanguageCard[]
    shuffledCards: ILanguageCard[]
    favoriteCards: ILanguageCard[]
    loading: boolean
    itemsPerPage: number
    selectedWordLevel: (typeof EnumWORDLEVELS)[keyof typeof EnumWORDLEVELS]
    selectedCardCategory: (typeof EnumCARDSCATEGORY)[keyof typeof EnumCARDSCATEGORY]
    searchQuery: string
    filteredCards: ILanguageCard[]
    setLoading: (isLoading: boolean) => void
    setItemsPerPage: (items: number) => void
    setSelectedWordLevel: (level: (typeof EnumWORDLEVELS)[keyof typeof EnumWORDLEVELS]) => void
    setSelectedCardCategory: (
        level: (typeof EnumCARDSCATEGORY)[keyof typeof EnumCARDSCATEGORY]
    ) => void
    addFavoriteCard: (card: ILanguageCard) => void
    removeFavoriteCard: (id: number) => void
    clearFavorites: () => void
    clearStorage: () => void
    updateSearchQuery: (query: string) => void
    resetStore: () => void
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
