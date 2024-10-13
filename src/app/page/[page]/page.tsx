'use client'

import { usePathname } from 'next/navigation'
import { Loader, PaginatedList } from '@/components'
import { useFilteredCards } from '@/hooks'
import { useCardsStore } from '@/stores'
import { useEffect } from 'react'
import { DNA } from 'react-loader-spinner'

export default function PaginatedPage() {
	const pathname = usePathname()
	const pageParam = pathname.split('/').pop() || '1'
	const currentPage = Number(pageParam)

	const { filteredCards } = useFilteredCards()
	const { loading, setLoading } = useCardsStore()

	useEffect(() => {
		if (loading && filteredCards.length > 0) {
			setLoading(false)
		}
	}, [filteredCards, loading, setLoading])

	if (loading) {
		return <Loader />
	}

	return (
		<PaginatedList
			cards={filteredCards}
			pageName="page"
			currentPage={currentPage}
		/>
	)
}
