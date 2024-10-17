'use client'

import { usePathname } from 'next/navigation'
import { PaginatedList, SearchBar } from '@/components'
import { useFilteredCards } from '@/hooks'
import { useAllCardsStore } from '@/stores'

export default function PaginatedPage() {
	const pathname = usePathname()
	const pageParam = pathname.split('/').pop() || '1'
	const currentPage = Number(pageParam)

	// const { filteredCards, searchQuery, updateSearchQuery } = useFilteredCards()
	const { cards } = useAllCardsStore()

	return (
		<div>
			<PaginatedList cards={cards} pageName="page" currentPage={currentPage} />
			{/* <SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} /> */}
		</div>
	)
}
