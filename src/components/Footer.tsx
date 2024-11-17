'use client'

import React from 'react'
import { MaxWidthWrapper, SearchBar } from '.'
import { Badge } from './ui/badge'
import { useCardsStore } from '@/stores'

export const Footer = () => {
    const { searchQuery, filteredCards } = useCardsStore()
    return (
        <footer className="w-full h-12 border-t border-gray-200 bg-black/5 flex-grow-0 flex-shrink-0 basis-auto">
            <MaxWidthWrapper className="flex justify-center items-center">
                <div className="w-[320px] flex justify-between items-center gap-4">
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
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}
