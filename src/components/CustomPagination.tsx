'use client'

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
import { useRouter, useSearchParams } from 'next/navigation'
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
    totalPages,
    pageName,
}: {
    currentPage: number
    totalPages: number
    pageName: string
}) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const qs = searchParams.toString()

    const hrefFor = (page: number) => `/${pageName}/${page}${qs ? `?${qs}` : ''}`
    const goTo = (page: number) => router.push(hrefFor(page))

    const handlePreviousPage = () => {
        if (currentPage > 1) goTo(currentPage - 1)
    }
    const handleNextPage = () => {
        if (currentPage < totalPages) goTo(currentPage + 1)
    }
    const handleSelectChange = (value: string) => goTo(parseInt(value, 10))

    return (
        <MaxWidthWrapper>
            <Pagination style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationLink
                            className="w-[75px] text-sm border-2 rounded-full p-2 text-center shadow-inner shadow-[--shadow-color]"
                            href={hrefFor(1)}
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
                            href={hrefFor(totalPages)}
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
