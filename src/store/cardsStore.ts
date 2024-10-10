import { data } from '@/data/data'
import { LanguageCard } from '@/interfaces/interfaces'
import { create } from 'zustand'

interface ICardsStore {
	cards: LanguageCard[]
	loading: boolean
}

export const useCardsStore = create<ICardsStore>()(set => ({
	cards: data,
	loading: false,
}))
