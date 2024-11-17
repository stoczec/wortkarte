'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Loader, PaginatedList } from '@/components'
import { useCardsStore } from '@/stores'
import { EnumCARDSCATEGORY } from '@/enums/enums'
import { ILanguageCard } from '@/interfaces/interfaces'

export default function PaginatedPage() {
    const pathname = usePathname()
    const pageParam = pathname.split('/').pop() || '1'
    const currentPage = Number(pageParam)

    // const { filteredCards, searchQuery, updateSearchQuery } = useFilteredCards()
    const { displayedCards, favoriteCards, shuffledCards, selectedCardCategory } = useCardsStore()
    const [loading, setLoading] = useState(true)

    function getDataByCategory(
        selectedCardCategory: (typeof EnumCARDSCATEGORY)[keyof typeof EnumCARDSCATEGORY]
    ): ILanguageCard[] {
        switch (selectedCardCategory) {
            case EnumCARDSCATEGORY.ALLE:
                return displayedCards
            case EnumCARDSCATEGORY.GEMISCHTEN:
                return shuffledCards
            case EnumCARDSCATEGORY.FAVORITEN:
                return favoriteCards

            default:
                return []
        }
    }

    useEffect(() => {
        if (displayedCards) {
            setLoading(false)
        }
    }, [displayedCards])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Loader />
            </div>
        )
    }

    return (
        <div className="h-full">
            <PaginatedList
                displayedCards={getDataByCategory(selectedCardCategory)}
                pageName="page"
                currentPage={currentPage}
            />
            {/* <SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} /> */}
        </div>
    )
}
