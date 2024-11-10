'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Loader, PaginatedList } from '@/components'
import { useAllCardsStore } from '@/stores'

export default function ShuffledPage() {
    const pathname = usePathname()
    const pageParam = pathname.split('/').pop() || '1'
    const currentPage = Number(pageParam)

    // const { filteredCards, searchQuery, updateSearchQuery } = useFilteredCards()
    const { shuffledCards } = useAllCardsStore()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (shuffledCards) {
            setLoading(false)
        }
    }, [shuffledCards])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Loader />
            </div>
        )
    }

    return (
        <div className="h-full">
            <PaginatedList cards={shuffledCards} pageName="shuffled" currentPage={currentPage} />
            {/* <SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} /> */}
        </div>
    )
}
