'use client'

import { CustomPagination, SearchBar, WordCarousel } from '@/components'
import { useFilteredCards } from '@/hooks'
import { IPaginatedProps } from '@/interfaces/interfaces'
import { useCardsStore } from '@/stores'
import { useMemo } from 'react'

export function PaginatedList({
	cards,
	pageName,
	currentPage,
}: IPaginatedProps) {
	const itemsPerPage = useCardsStore(state => state.itemsPerPage)
	const { searchQuery, updateSearchQuery } = useFilteredCards()

	const startIndex = (currentPage - 1) * itemsPerPage
	const currentItems = useMemo(() => {
		return cards.slice(startIndex, startIndex + itemsPerPage)
	}, [cards, startIndex, itemsPerPage])

	return (
		<section className="flex flex-col items-center justify-center px-4">
			<SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} />
			<WordCarousel data={currentItems} />
			<CustomPagination
				currentPage={currentPage}
				filteredCards={cards}
				pageName={pageName}
			/>
		</section>
	)
}
