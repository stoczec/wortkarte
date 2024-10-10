import { create } from 'zustand'
import { data } from '@/data/data'
import { ICardsStore } from '@/interfaces/interfaces'

export const useCardsStore = create<ICardsStore>(set => ({
	cards: data.flatMap(card => [card, ...(card.multiple || [])]),
	loading: false,
	setLoading: isLoading => set({ loading: isLoading }),
}))
