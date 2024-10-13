import React from 'react'
import { MaxWidthWrapper } from '@/components'
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationPrevious,
	PaginationLink,
	PaginationEllipsis,
	PaginationNext,
} from './ui/pagination'
import { ILanguageCard } from '@/interfaces/interfaces'
import { useCardsStore } from '@/stores'

export const CustomPagination = ({
	currentPage,
	filteredCards,
}: {
	currentPage: number
	filteredCards: ILanguageCard[]
}) => {
	const itemsPerPage = useCardsStore(state => state.itemsPerPage)

	const totalPages = Math.ceil(filteredCards.length / itemsPerPage)

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
	)
}
