import React from 'react'
import { MaxWidthWrapper } from '@/components'
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationLink,
    PaginationNext,
} from './ui/pagination'
import { ILanguageCard } from '@/interfaces/interfaces'
import { useCardsStore } from '@/stores'
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
    SelectGroup,
} from './ui/select'

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

    const handleSelectChange = (value: string) => {
        const selectedPage = parseInt(value, 10)
        handlePageChange(selectedPage)
    }

    return (
        <MaxWidthWrapper>
            <Pagination style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationLink
                            className="w-[75px] text-sm border-2 rounded-full p-2 text-center shadow-inner shadow-[--shadow-color]"
                            href={`/${pageName}/1`}
                        >
                            erste
                        </PaginationLink>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationPrevious
                            onClick={handlePreviousPage}
                            className="cursor-pointer"
                        />
                    </PaginationItem>

                    <PaginationItem>
                        <Select value={String(currentPage)} onValueChange={handleSelectChange}>
                            <SelectTrigger className="text-2xl text-primary rounded-full text-center font-extrabold pl-4">
                                <SelectValue placeholder={`Page ${currentPage}`} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {Array.from({ length: totalPages }, (_, index) => (
                                        <SelectItem key={index + 1} value={String(index + 1)}>
                                            {index + 1}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationNext onClick={handleNextPage} className="cursor-pointer" />
                    </PaginationItem>

                    <PaginationItem>
                        <PaginationLink
                            href={`/${pageName}/${totalPages}`}
                            className="w-[75px] text-sm border-2 rounded-full p-2 text-center shadow-inner shadow-[--shadow-color]"
                        >
                            letzte
                        </PaginationLink>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </MaxWidthWrapper>
    )
}
