import { create } from 'zustand'
import { data } from '@/data/data'
import { IAllCardsStore, ILanguageCard } from '@/interfaces/interfaces'

// Функция для перемешивания массива
function shuffleArray(array: ILanguageCard[]) {
	const shuffled = array.slice()
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
	}
	return shuffled
}

const shuffled = shuffleArray(data)

export const useAllCardsStore = create<IAllCardsStore>(set => ({
	cards: data.flatMap(card => [card, ...(card.multiple || [])]),
	loading: true,
	itemsPerPage: 5,
	setLoading: isLoading => set({ loading: isLoading }),
	shuffledCards: shuffled.flatMap(card => [card, ...(card.multiple || [])]),
}))
