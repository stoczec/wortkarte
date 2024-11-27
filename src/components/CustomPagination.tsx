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
    pageName,
}: {
    currentPage: number
    filteredCards: ILanguageCard[]
    pageName: string
}) => {
    const itemsPerPage = useCardsStore(state => state.itemsPerPage)

    const totalPages = Math.ceil(filteredCards.length / itemsPerPage)

    const handlePageChange = (page: number) => {
        window.location.href = `/${pageName}/${page}`
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
            <Pagination style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}>
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
                                <PaginationLink href={`/${pageName}/1`}>
                                    <PaginationEllipsis />
                                </PaginationLink>
                            </PaginationItem>
                        </>
                    )}

                    {currentPage > 1 && (
                        <PaginationItem>
                            <PaginationLink
                                href={`/${pageName}/${currentPage - 1}`}
                                className={
                                    currentPage === 1
                                        ? 'text-2xl text-primary rounded-full font-extrabold'
                                        : ''
                                }
                            >
                                {currentPage - 1}
                            </PaginationLink>
                        </PaginationItem>
                    )}

                    <PaginationItem>
                        <PaginationLink
                            href={`/${pageName}/${currentPage}`}
                            className="text-2xl text-primary rounded-full font-extrabold"
                        >
                            {currentPage}
                        </PaginationLink>
                    </PaginationItem>

                    {currentPage < totalPages && (
                        <PaginationItem>
                            <PaginationLink
                                href={`/${pageName}/${currentPage + 1}`}
                                className={
                                    currentPage === totalPages
                                        ? ' text-2xl text-primary rounded-full font-extrabold'
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
                                    href={`/${pageName}/${totalPages}`}
                                    className={
                                        currentPage === totalPages
                                            ? ' text-2xl text-primary rounded-full font-extrabold'
                                            : ''
                                    }
                                >
                                    <PaginationEllipsis />
                                </PaginationLink>
                            </PaginationItem>
                        </>
                    )}

                    <PaginationItem>
                        <PaginationNext onClick={handleNextPage} className="cursor-pointer" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </MaxWidthWrapper>
    )
}
