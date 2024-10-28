'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Loader, PaginatedList } from '@/components'
import { useAllCardsStore } from '@/stores'

export default function PaginatedPage() {
	const pathname = usePathname()
	const pageParam = pathname.split('/').pop() || '1'
	const currentPage = Number(pageParam)

	// const { filteredCards, searchQuery, updateSearchQuery } = useFilteredCards()
	const { cards } = useAllCardsStore()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (cards) {
			setLoading(false)
		}
	}, [cards])

	if (loading) {
		return (
			<div className="flex justify-center items-center h-full">
				<Loader />
			</div>
		)
	}

	return (
		<div className="h-full">
			<PaginatedList cards={cards} pageName="page" currentPage={currentPage} />
			{/* <SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} /> */}
		</div>
	)
}
