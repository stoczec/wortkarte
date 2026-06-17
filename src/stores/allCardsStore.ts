import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ICardsStore, ILanguageCard } from '@/interfaces/interfaces'

export const useCardsStore = create<ICardsStore>()(
    persist(
        set => ({
            favoriteCards: [],

            addFavoriteCard: (card: ILanguageCard) =>
                set(state => ({ favoriteCards: [...state.favoriteCards, card] })),
            removeFavoriteCard: (id: string) =>
                set(state => ({
                    favoriteCards: state.favoriteCards.filter(card => card.id !== id),
                })),
            clearFavorites: () => set({ favoriteCards: [] }),
            clearStorage: () => {
                localStorage.clear()
                set({ favoriteCards: [] })
            },
        }),
        {
            name: 'unified-cards-storage',
            version: 2,
            partialize: state => ({ favoriteCards: state.favoriteCards }),
            migrate: persisted => {
                const p = (persisted ?? {}) as Partial<ICardsStore>
                return { favoriteCards: p.favoriteCards ?? [] }
            },
        }
    )
)
