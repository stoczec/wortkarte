'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { PaginatedList } from '@/components'
import { useAllCardsStore } from '@/stores'

export default function PaginatedPage() {
	const pathname = usePathname()
	const pageParam = pathname.split('/').pop() || '1'
	const currentPage = Number(pageParam)

	// const { filteredCards, searchQuery, updateSearchQuery } = useFilteredCards()
	const { cards } = useAllCardsStore()

	return (
		<div className="h-full">
			<PaginatedList cards={cards} pageName="page" currentPage={currentPage} />
			{/* <SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} /> */}
		</div>
	)
}
