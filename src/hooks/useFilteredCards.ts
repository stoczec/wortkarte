import { useState } from 'react'
import { useCardsStore } from '@/stores'
import { IFilteredCardsStore, ILanguageCard } from '@/interfaces/interfaces'

export function useFilteredCards(): IFilteredCardsStore {
    const allWords = useCardsStore(state => state.allCards)
    const [searchQuery, setSearchQuery] = useState('')
    const [filteredCards, setFilteredCards] = useState<ILanguageCard[]>(allWords)

    const updateSearchQuery = (query: string) => {
        setSearchQuery(query)
        const filtered = allWords.filter(
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
