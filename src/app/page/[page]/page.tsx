'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Loader, PaginatedList, SearchBar, WordCarousel } from '@/components'
import { useCardsStore } from '@/stores'
import { EnumCARDSCATEGORY } from '@/enums/enums'
import { ILanguageCard } from '@/interfaces/interfaces'
import { Badge } from '@/components/ui/badge'

export default function PaginatedPage() {
    const pathname = usePathname()
    const pageParam = pathname.split('/').pop() || '1'
    const currentPage = Number(pageParam)

    const {
        displayedCards,
        favoriteCards,
        shuffledCards,
        selectedCardCategory,
        searchQuery,
        filteredCards,
    } = useCardsStore()
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
        <div className="h-full flex flex-col justify-between items-center">
            {searchQuery ? (
                <WordCarousel data={filteredCards} />
            ) : (
                <PaginatedList
                    displayedCards={getDataByCategory(selectedCardCategory)}
                    pageName="page"
                    currentPage={currentPage}
                />
            )}

            {/* <div className="w-[320px] flex justify-between items-center gap-4">
                <SearchBar />
                <Badge
                    variant={
                        searchQuery && filteredCards.length > 0
                            ? 'default'
                            : !searchQuery
                            ? 'outline'
                            : 'destructive'
                    }
                    className="text-center"
                >
                    {searchQuery && filteredCards.length > 1
                        ? `${filteredCards.length} Wörter gefunden`
                        : searchQuery && filteredCards.length === 1
                        ? `${filteredCards.length} Wort gefunden`
                        : 'Nichts gefunden!'}{' '}
                </Badge>
            </div> */}
        </div>
    )
}
