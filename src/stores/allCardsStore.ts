import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ICardsStore, ILanguageCard } from '@/interfaces/interfaces'
import { C1_data, A2_B2_data } from '@/data'
import { CARDS_CATEGORY, WORD_LEVELS } from '@/enums/enums'
import { buildAllCards, filterCards, getDataByLevel, shuffleArray } from '@/lib/cards'

export { getDataByLevel } from '@/lib/cards'

export const useCardsStore = create<ICardsStore>()(
    persist(
        set => {
            const allCards = buildAllCards(C1_data, A2_B2_data)
            const shuffledAllWords = shuffleArray(allCards)

            return {
                displayedCards: shuffledAllWords,
                allCards: allCards,
                shuffledCards: shuffledAllWords,
                favoriteCards: [],
                loading: true,
                itemsPerPage: 5,
                selectedWordLevel: WORD_LEVELS.ALL_LEVELS,
                selectedCardCategory: CARDS_CATEGORY.ALLE,
                searchQuery: '',
                filteredCards: shuffledAllWords,

                setLoading: isLoading => set({ loading: isLoading }),
                setItemsPerPage: items => set({ itemsPerPage: items }),

                setSelectedWordLevel: (level: (typeof WORD_LEVELS)[keyof typeof WORD_LEVELS]) => {
                    const data = getDataByLevel(level)
                    set({
                        selectedWordLevel: level,
                        displayedCards: data,
                        shuffledCards: shuffleArray(data),
                    })
                },

                setSelectedCardCategory: (
                    category: (typeof CARDS_CATEGORY)[keyof typeof CARDS_CATEGORY]
                ) => {
                    set({
                        selectedCardCategory: category,
                    })
                },

                addFavoriteCard: (card: ILanguageCard) =>
                    set(state => ({
                        favoriteCards: [...state.favoriteCards, card],
                    })),
                removeFavoriteCard: (id: string) =>
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
                        selectedWordLevel: WORD_LEVELS.ALL_LEVELS,
                        selectedCardCategory: CARDS_CATEGORY.ALLE,
                    })
                },
                updateSearchQuery: (query: string) =>
                    set(state => ({
                        searchQuery: query,
                        filteredCards: filterCards(state.allCards, query),
                    })),
                resetStore: () =>
                    set(state => ({
                        displayedCards: shuffledAllWords,
                        shuffledCards: shuffledAllWords,
                        itemsPerPage: state.itemsPerPage,
                        selectedWordLevel: WORD_LEVELS.ALL_LEVELS,
                        selectedCardCategory: CARDS_CATEGORY.ALLE,
                        searchQuery: '',
                        filteredCards: shuffledAllWords,
                        favoriteCards: state.favoriteCards,
                    })),
            }
        },

        {
            name: 'unified-cards-storage',
            version: 1,
            partialize: state => ({
                favoriteCards: state.favoriteCards,
                selectedWordLevel: state.selectedWordLevel,
                selectedCardCategory: state.selectedCardCategory,
                itemsPerPage: state.itemsPerPage,
            }),
            migrate: persisted => {
                const p = (persisted ?? {}) as Partial<ICardsStore>
                return {
                    favoriteCards: p.favoriteCards ?? [],
                    selectedWordLevel: p.selectedWordLevel ?? WORD_LEVELS.ALL_LEVELS,
                    selectedCardCategory: p.selectedCardCategory ?? CARDS_CATEGORY.ALLE,
                    itemsPerPage: p.itemsPerPage ?? 5,
                }
            },
            merge: (persisted, current) => {
                if (!persisted) return current
                const merged = { ...current, ...(persisted as Partial<ICardsStore>) }
                const levelData = getDataByLevel(merged.selectedWordLevel)
                return {
                    ...merged,
                    displayedCards: levelData,
                    shuffledCards: shuffleArray(levelData),
                    filteredCards: merged.allCards,
                    searchQuery: '',
                    loading: false,
                }
            },
        }
    )
)
