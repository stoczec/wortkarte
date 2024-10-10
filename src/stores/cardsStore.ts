import { create } from 'zustand'
import { persist, PersistOptions } from 'zustand/middleware'
import { data } from '@/data/data'
import { ICardsStore, ILanguageCard } from '@/interfaces/interfaces'

type MyPersist = (
	config: (set: any, get: any, api: any) => ICardsStore,
	options: PersistOptions<ICardsStore>
) => (set: any, get: any, api: any) => ICardsStore

export const useCardsStore = create<ICardsStore>(
	(persist as MyPersist)(
		set => ({
			cards: data.flatMap(card => [card, ...(card.multiple || [])]),
			favoriteCards: [],
			loading: false,
			setLoading: isLoading => set({ loading: isLoading }),
			toggleFavorite: id => {
				set((state: ICardsStore) => {
					const updatedCards = state.cards.map((card: ILanguageCard) =>
						card.id === id ? { ...card, favorite: !card.favorite } : card
					)
					const updatedFavoriteCards = updatedCards.filter(
						(card: ILanguageCard) => card.favorite
					)
					return {
						cards: updatedCards,
						favoriteCards: updatedFavoriteCards,
					}
				})
			},
			clearStorage: () => {
				localStorage.removeItem('cards-storage') // Очистка сохраненного состояния
				set({
					cards: data.flatMap(card => [card, ...(card.multiple || [])]),
					favoriteCards: [], // Сброс состояния избранных карточек
				})
			},
		}),
		{
			name: 'cards-storage', // имя ключа в localStorage
			// storage: sessionStorage, // если хотите использовать sessionStorage вместо localStorage
		}
	)
)
