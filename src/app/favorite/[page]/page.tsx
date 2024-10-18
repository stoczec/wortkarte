'use client'

import { AddToFavoritesCard, Loader, PaginatedList } from '@/components'
import { useFavoriteCardsStore } from '@/stores'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function FavoritePaginatedPage() {
	const pathname = usePathname()
	const pageParam = pathname.split('/').pop()
	const currentPage = Number(pageParam)

	const { favoriteCards } = useFavoriteCardsStore()
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (favoriteCards) {
			setLoading(false)
		}
	}, [favoriteCards])

	if (loading) {
		return (
			<div className="flex justify-center items-center h-full">
				<Loader />
			</div>
		)
	}

	if (favoriteCards.length === 0) {
		return <AddToFavoritesCard />
	}

	return (
		<PaginatedList
			cards={favoriteCards}
			pageName="favorite"
			currentPage={currentPage}
		/>
	)
}
