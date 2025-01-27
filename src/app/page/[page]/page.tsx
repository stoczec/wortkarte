'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Loader, PaginatedList } from '@/components'
import { getDataByLevel, useCardsStore } from '@/stores'
import { CARDS_CATEGORY } from '@/enums/enums'
import { ILanguageCard } from '@/interfaces/interfaces'
import { useRouter } from 'next/navigation'

export default function PaginatedPage() {
    const pathname = usePathname()
    const pageParam = pathname.split('/').pop() || '1'
    const currentPage = Number(pageParam)
    const router = useRouter()

    const {
        displayedCards,
        favoriteCards,
        shuffledCards,
        selectedCardCategory,
        searchQuery,
        filteredCards,
        selectedWordLevel,
        resetStore,
    } = useCardsStore()
    const [loading, setLoading] = useState(true)

    function getDataByCategory(
        selectedCardCategory: (typeof CARDS_CATEGORY)[keyof typeof CARDS_CATEGORY]
    ): ILanguageCard[] {
        switch (selectedCardCategory) {
            case CARDS_CATEGORY.ALLE:
                return displayedCards
            case CARDS_CATEGORY.GEMISCHTEN:
                return shuffledCards
            case CARDS_CATEGORY.FAVORITEN:
                return favoriteCards

            default:
                return []
        }
    }
    const checkDataConsistency = () => {
        const expectedLength = getDataByLevel(selectedWordLevel).flatMap(card => [
            card,
            ...(card.multiple || []),
        ]).length
        return expectedLength !== displayedCards.length
    }
    useEffect(() => {
        if (displayedCards) {
            setLoading(false)
        }

        if (checkDataConsistency()) {
            resetStore()
            router.push('/page/1')
        }
    }, [displayedCards, selectedWordLevel])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Loader />
            </div>
        )
    }

    return (
        <div className="h-full flex flex-col justify-between items-center flex-grow">
            <PaginatedList
                displayedCards={
                    searchQuery ? filteredCards : getDataByCategory(selectedCardCategory)
                }
                pageName="page"
                currentPage={currentPage}
            />
        </div>
    )
}
