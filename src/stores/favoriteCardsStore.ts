import { create } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'
import { IFavoriteCardsStore, ILanguageCard } from '@/interfaces/interfaces'

type MyPersistFavoriteCardsStore = (
	config: (set: any, get: any, api: any) => IFavoriteCardsStore,
	options: PersistOptions<IFavoriteCardsStore>
) => (set: any, get: any, api: any) => IFavoriteCardsStore

export const useFavoriteCardsStore = create<IFavoriteCardsStore>(
	(persist as MyPersistFavoriteCardsStore)(
		set => ({
			favoriteCards: [],
			loading: true,
			setLoading: isLoading => set({ loading: isLoading }),
			addFavoriteCard: (card: ILanguageCard) =>
				set((state: IFavoriteCardsStore) => ({
					favoriteCards: [...state.favoriteCards, card],
				})),
			removeFavoriteCard: (id: number) =>
				set((state: IFavoriteCardsStore) => ({
					favoriteCards: state.favoriteCards.filter(
						(card: ILanguageCard) => card.id !== id
					),
				})),
			clearFavorites: () => set({ favoriteCards: [] }),
		}),
		{
			name: 'favorite-cards-storage',
		}
	)
)
