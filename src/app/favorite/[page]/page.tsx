'use client'

import { AddToFavoritesCard, PaginatedList } from '@/components'
import { useCardsStore } from '@/stores'
import { usePathname } from 'next/navigation'

export default function FavoritePaginatedPage() {
	const pathname = usePathname()
	const pageParam = pathname.split('/').pop()
	const currentPage = Number(pageParam)

	const { favoriteCards } = useCardsStore()

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
