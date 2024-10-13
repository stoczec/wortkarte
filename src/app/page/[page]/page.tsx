'use client'

import { usePathname } from 'next/navigation'
import { PaginatedList } from '@/components'
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
		return (
			<div className="flex justify-center items-center h-screen">
				<DNA
					visible={true}
					height="80"
					width="80"
					ariaLabel="dna-loading"
					wrapperClass="dna-wrapper"
				/>
			</div>
		)
	}

	return (
		<PaginatedList
			cards={filteredCards}
			pageName="page"
			currentPage={currentPage}
		/>
	)
}
