import { create } from 'zustand'
import { data } from '@/data/data'
import { LanguageCard } from '@/interfaces/interfaces'

interface ICardsStore {
	cards: LanguageCard[]
	loading: boolean
	setLoading: (isLoading: boolean) => void
}

export const useCardsStore = create<ICardsStore>(set => ({
	cards: data.flatMap(card => [card, ...(card.multiple || [])]),
	loading: false,
	setLoading: isLoading => set({ loading: isLoading }),
}))
