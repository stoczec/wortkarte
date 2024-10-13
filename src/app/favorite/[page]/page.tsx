'use client'

import { CustomPagination, SearchBar, WordCarousel } from '@/components'
import { useFilteredCards } from '@/hooks'
import { useCardsStore } from '@/stores'
import { usePathname } from 'next/navigation'

export default function Favorite() {
	const pathname = usePathname()
	const pageParam = pathname.split('/').pop()
	const currentPage = parseInt(pageParam as string) || 1

	const itemsPerPage = useCardsStore(state => state.itemsPerPage)
	const { favoriteCards } = useCardsStore()
	const { searchQuery, updateSearchQuery } = useFilteredCards()

	const startIndex = (currentPage - 1) * itemsPerPage
	const currentItems = favoriteCards.slice(
		startIndex,
		startIndex + itemsPerPage
	)

	return (
		<section className="flex flex-col items-center justify-center flex-grow flex-shrink-0 basis-auto px-4">
			<SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} />
			<WordCarousel data={currentItems} />
			<CustomPagination
				currentPage={currentPage}
				filteredCards={favoriteCards}
				pageName="favorite"
			/>
		</section>
	)
}
