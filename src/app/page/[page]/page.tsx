'use client'

import { usePathname } from 'next/navigation'
import { PaginatedList } from '@/components'
import { useFilteredCards } from '@/hooks'

export default function PaginatedPage() {
	const pathname = usePathname()
	const pageParam = pathname.split('/').pop() || '1'
	const currentPage = Number(pageParam)

	const { filteredCards } = useFilteredCards()

	return (
		<PaginatedList
			cards={filteredCards}
			pageName="page"
			currentPage={currentPage}
		/>
	)
}
