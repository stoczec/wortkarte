'use client'

import { useEffect, useState } from 'react'
import { CustomPagination, Loader, WordCarousel } from '@/components'
import { useCardsStore } from '@/stores'
import { paginate } from '@/lib/cards-pagination'

export function FavoritesView({ page, size }: { page: number; size: number }) {
    const favoriteCards = useCardsStore(state => state.favoriteCards)
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])

    const { slice, totalPages, page: clampedPage } = paginate(favoriteCards, page, size)

    if (!mounted) {
        return (
            <div className="flex justify-center items-center h-full">
                <Loader />
            </div>
        )
    }

    return (
        <div className="h-full flex flex-col justify-between items-center flex-grow">
            <section className="flex flex-col items-center justify-center gap-2 px-4 py-2">
                <WordCarousel data={slice} />
                <CustomPagination
                    currentPage={clampedPage}
                    totalPages={totalPages}
                    pageName="page"
                />
            </section>
        </div>
    )
}
