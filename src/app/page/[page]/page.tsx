'use client'

import { usePathname } from 'next/navigation'
import { MaxWidthWrapper, SearchBar, WordCarousel } from '@/components'
import { useFilteredCards } from '@/hooks'
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationNext,
	PaginationLink,
	PaginationEllipsis,
} from '@/components/ui/pagination'

const ITEMS_PER_PAGE = 5

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
		<section className="flex flex-col items-center justify-center">
			<SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} />
			<WordCarousel data={currentItems} />

			<MaxWidthWrapper>
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								onClick={handlePreviousPage}
								className="cursor-pointer"
							/>
						</PaginationItem>

						{currentPage > 2 && (
							<>
								<PaginationItem>
									<PaginationLink href={`/page/1`}>
										<PaginationEllipsis />
									</PaginationLink>
								</PaginationItem>
								{/* <PaginationItem>
									<PaginationEllipsis />
								</PaginationItem> */}
							</>
						)}

						{currentPage > 1 && (
							<PaginationItem>
								<PaginationLink
									href={`/page/${currentPage - 1}`}
									className={
										currentPage === 1
											? 'text-xl border border-primary rounded-full font-bold'
											: ''
									}
								>
									{currentPage - 1}
								</PaginationLink>
							</PaginationItem>
						)}

						<PaginationItem>
							<PaginationLink
								href={`/page/${currentPage}`}
								className="text-xl border border-primary rounded-full font-bold"
							>
								{currentPage}
							</PaginationLink>
						</PaginationItem>

						{currentPage < totalPages && (
							<PaginationItem>
								<PaginationLink
									href={`/page/${currentPage + 1}`}
									className={
										currentPage === totalPages
											? 'text-xl border border-primary rounded-full font-bold'
											: ''
									}
								>
									{currentPage + 1}
								</PaginationLink>
							</PaginationItem>
						)}

						{currentPage < totalPages - 1 && (
							<>
								{/* <PaginationItem>
									<PaginationEllipsis />
								</PaginationItem> */}
								<PaginationItem>
									<PaginationLink
										href={`/page/${totalPages}`}
										className={
											currentPage === totalPages
												? 'text-xl border border-primary rounded-full font-bold'
												: ''
										}
									>
										<PaginationEllipsis />
									</PaginationLink>
								</PaginationItem>
							</>
						)}

						<PaginationItem>
							<PaginationNext
								onClick={handleNextPage}
								className="cursor-pointer"
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</MaxWidthWrapper>
		</section>
	)
}
