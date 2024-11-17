'use client'
import React from 'react'
import { CustomPagination, WordCarousel } from '@/components'
import { IPaginatedProps } from '@/interfaces/interfaces'
import { useCardsStore } from '@/stores'
import { useMemo } from 'react'

export function PaginatedList({ displayedCards, pageName, currentPage }: IPaginatedProps) {
    const itemsPerPage = useCardsStore(state => state.itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage
    const currentItems = useMemo(() => {
        return displayedCards.slice(startIndex, startIndex + itemsPerPage)
    }, [displayedCards, startIndex, itemsPerPage])

    return (
        <section className="flex flex-col items-center justify-center gap-2 px-4 py-2">
            <WordCarousel data={currentItems} />
            <CustomPagination
                currentPage={currentPage}
                filteredCards={displayedCards}
                pageName={pageName}
            />
        </section>
    )
}
