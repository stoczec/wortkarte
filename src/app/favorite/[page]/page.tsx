'use client'

import { PaginatedList } from '@/components'
import { useCardsStore } from '@/stores'
import { usePathname } from 'next/navigation'

export default function FavoritePaginatedPage() {
	const pathname = usePathname()
	const pageParam = pathname.split('/').pop()
	const currentPage = parseInt(pageParam as string) || 1

	const { favoriteCards } = useCardsStore()

	return (
		<PaginatedList
			cards={favoriteCards}
			pageName="favorite"
			currentPage={currentPage}
		/>
	)
}
