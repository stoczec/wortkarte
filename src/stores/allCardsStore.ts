import { create } from 'zustand'
import { data } from '@/data/data'
import { IAllCardsStore } from '@/interfaces/interfaces'

export const useAllCardsStore = create<IAllCardsStore>(set => ({
	cards: data.flatMap(card => [card, ...(card.multiple || [])]),
	loading: true,
	itemsPerPage: 5,
	setLoading: isLoading => set({ loading: isLoading }),
}))
