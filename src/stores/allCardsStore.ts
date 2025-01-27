import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ICardsStore, ILanguageCard } from '@/interfaces/interfaces'
import { C1_Sicher_data, C1_Beruf_data, A2_B2_data } from '@/data'
import { EnumCARDSCATEGORY, EnumWORDLEVELS } from '@/enums/enums'

// Функция для перемешивания массива
function shuffleArray(array: ILanguageCard[]) {
    const shuffled = array.slice()
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

export function getDataByLevel(
    level: (typeof EnumWORDLEVELS)[keyof typeof EnumWORDLEVELS]
): ILanguageCard[] {
    switch (level) {
        case EnumWORDLEVELS.C1SICHER:
            return C1_Sicher_data
        case EnumWORDLEVELS.C1BERUF:
            return C1_Beruf_data
        case EnumWORDLEVELS.A2B2:
            return A2_B2_data
        case EnumWORDLEVELS.ALLLEVELS:
            return [...C1_Sicher_data, ...C1_Beruf_data, ...A2_B2_data]
        default:
            return []
    }
}

export const useCardsStore = create<ICardsStore>()(
    persist(
        set => {
            // Все слова из объединённых данных
            const allCards = [
                ...C1_Beruf_data.flatMap(card => [card, ...(card.multiple || [])]),
                ...C1_Sicher_data.flatMap(card => [card, ...(card.multiple || [])]),
                ...A2_B2_data.flatMap(card => [card, ...(card.multiple || [])]),
            ]

            // Перемешанные слова
            const shuffledAllWords = shuffleArray(allCards)

            return {
                displayedCards: shuffledAllWords,
                allCards: allCards,
                shuffledCards: shuffledAllWords,
                favoriteCards: [],
                loading: true,
                itemsPerPage: 5,
                selectedWordLevel: EnumWORDLEVELS.ALLLEVELS,
                selectedCardCategory: EnumCARDSCATEGORY.ALLE,
                searchQuery: '',
                filteredCards: shuffledAllWords,

                setLoading: isLoading => set({ loading: isLoading }),
                setItemsPerPage: items => set({ itemsPerPage: items }),

                setSelectedWordLevel: (
                    level: (typeof EnumWORDLEVELS)[keyof typeof EnumWORDLEVELS]
                ) => {
                    const data = getDataByLevel(level)
                    const shuffledData = shuffleArray(data)
                    set({
                        selectedWordLevel: level,
                        displayedCards: data,
                        shuffledCards: shuffledData,
                    })
                },

                setSelectedCardCategory: (
                    category: (typeof EnumCARDSCATEGORY)[keyof typeof EnumCARDSCATEGORY]
                ) => {
                    set({
                        selectedCardCategory: category,
                    })
                },

                addFavoriteCard: (card: ILanguageCard) =>
                    set(state => ({
                        favoriteCards: [...state.favoriteCards, card],
                    })),
                removeFavoriteCard: (id: number) =>
                    set(state => ({
                        favoriteCards: state.favoriteCards.filter(card => card.id !== id),
                    })),
                clearFavorites: () => set({ favoriteCards: [] }),
                clearStorage: () => {
                    localStorage.clear()
                    set({
                        displayedCards: shuffledAllWords,
                        shuffledCards: shuffledAllWords,
                        favoriteCards: [],
                        itemsPerPage: 5,
                        selectedWordLevel: EnumWORDLEVELS.ALLLEVELS,
                        selectedCardCategory: EnumCARDSCATEGORY.ALLE,
                    })
                },
                updateSearchQuery: (query: string) =>
                    set(state => {
                        const filtered = state.allCards.filter(
                            card =>
                                card.wordDe.toLowerCase().includes(query.toLowerCase()) ||
                                card.wordRu.toLowerCase().includes(query.toLowerCase())
                        )
                        return {
                            searchQuery: query,
                            filteredCards: filtered,
                        }
                    }),
                resetStore: () =>
                    set(state => ({
                        displayedCards: shuffledAllWords,
                        shuffledCards: shuffledAllWords,
                        itemsPerPage: state.itemsPerPage,
                        selectedWordLevel: EnumWORDLEVELS.ALLLEVELS,
                        selectedCardCategory: EnumCARDSCATEGORY.ALLE,
                        searchQuery: '',
                        filteredCards: shuffledAllWords,
                        // Preserve favoriteCards
                        favoriteCards: state.favoriteCards,
                    })),
            }
        },

        {
            name: 'unified-cards-storage',
            partialize: state => ({
                itemsPerPage: state.itemsPerPage,
                displayedCards: state.displayedCards,
                selectedWordLevel: state.selectedWordLevel,
                selectedCardCategory: state.selectedCardCategory,
                shuffledCards: state.shuffledCards,
                favoriteCards: state.favoriteCards,
                searchQuery: state.searchQuery,
                filteredCards: state.filteredCards,
            }),
        }
    )
)
