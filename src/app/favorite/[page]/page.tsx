'use client'

import { AddToFavoritesCard, Loader, PaginatedList } from '@/components'
import { useCardsStore } from '@/stores'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function FavoritePaginatedPage() {
	const pathname = usePathname()
	const pageParam = pathname.split('/').pop()
	const currentPage = Number(pageParam)

	const { favoriteCards, loading, setLoading } = useCardsStore()

	useEffect(() => {
		if (loading && favoriteCards.length > 0) {
			setLoading(false)
		}
	}, [favoriteCards, loading, setLoading])

	if (loading) {
		return <Loader />
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
