import { useState } from 'react'
import { useCardsStore } from '@/stores'
import { IFilteredCardsStore, ILanguageCard } from '@/interfaces/interfaces'

export function useFilteredCards(): IFilteredCardsStore {
	const cards = useCardsStore(state => state.cards)
	const [searchQuery, setSearchQuery] = useState('')
	const [filteredCards, setFilteredCards] = useState<ILanguageCard[]>(cards)

	const updateSearchQuery = (query: string) => {
		setSearchQuery(query)
		const filtered = cards.filter(
			card =>
				card.wordDe.toLowerCase().includes(query.toLowerCase()) ||
				card.wordRu.toLowerCase().includes(query.toLowerCase())
		)
		setFilteredCards(filtered)
	}

	return {
		filteredCards,
		searchQuery,
		updateSearchQuery,
	}
}
