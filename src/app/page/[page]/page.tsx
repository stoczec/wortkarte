'use client'

import { usePathname } from 'next/navigation'
import { CustomPagination, SearchBar, WordCarousel } from '@/components'
import { useFilteredCards } from '@/hooks'
import { useCardsStore } from '@/stores'

export default function PaginatedPage() {
	const pathname = usePathname()
	const pageParam = pathname.split('/').pop()
	const currentPage = parseInt(pageParam as string) || 1

	const itemsPerPage = useCardsStore(state => state.itemsPerPage)
	const { filteredCards, searchQuery, updateSearchQuery } = useFilteredCards()

	const startIndex = (currentPage - 1) * itemsPerPage
	const currentItems = filteredCards.slice(
		startIndex,
		startIndex + itemsPerPage
	)

	return (
		<section className="flex flex-col items-center justify-center px-4">
			<SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} />
			<WordCarousel data={currentItems} />
			<CustomPagination
				currentPage={currentPage}
				filteredCards={filteredCards}
				pageName="page"
			/>
		</section>
	)
}
