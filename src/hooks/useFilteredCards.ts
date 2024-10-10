import { useState } from 'react'
import { useCardsStore } from '@/stores'
import { LanguageCard } from '@/interfaces/interfaces'

interface IFilteredCardsStore {
	filteredCards: LanguageCard[]
	searchQuery: string
	updateSearchQuery: (query: string) => void
}

export function useFilteredCards(): IFilteredCardsStore {
	const cards = useCardsStore(state => state.cards)
	const [searchQuery, setSearchQuery] = useState('')
	const [filteredCards, setFilteredCards] = useState<LanguageCard[]>(cards)

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
