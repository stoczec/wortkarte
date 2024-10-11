// src/app/page/[page]/page.tsx

'use client'

import { usePathname } from 'next/navigation'
import { SearchBar, WordCarousel } from '@/components'
import { useFilteredCards } from '@/hooks'
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationNext,
	PaginationLink,
} from '@/components/ui/pagination'

const ITEMS_PER_PAGE = 10

export default function PaginatedPage() {
	const pathname = usePathname()
	const pageParam = pathname.split('/').pop()
	const currentPage = parseInt(pageParam as string) || 1

	const { filteredCards, searchQuery, updateSearchQuery } = useFilteredCards()

	const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE)

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
	const currentItems = filteredCards.slice(
		startIndex,
		startIndex + ITEMS_PER_PAGE
	)

	const handlePageChange = (page: number) => {
		window.location.href = `/page/${page}`
	}

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			handlePageChange(currentPage - 1)
		}
	}

	const handleNextPage = () => {
		if (currentPage < totalPages) {
			handlePageChange(currentPage + 1)
		}
	}

	return (
		<section className="flex flex-col items-center justify-center flex-grow flex-shrink-0 basis-auto">
			<SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} />
			<WordCarousel data={currentItems} />
			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious
							onClick={handlePreviousPage}
							style={{ display: currentPage === 1 ? 'none' : 'block' }}
						/>
					</PaginationItem>

					{[...Array(totalPages)].map((_, index) => (
						<PaginationItem key={index}>
							<PaginationLink
								href={`/page/${index + 1}`}
								isActive={currentPage === index + 1}
							>
								{index + 1}
							</PaginationLink>
						</PaginationItem>
					))}

					<PaginationItem>
						<PaginationNext
							onClick={handleNextPage}
							style={{ display: currentPage === totalPages ? 'none' : 'block' }}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</section>
	)
}
