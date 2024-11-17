'use client'

import React from 'react'
import { MaxWidthWrapper, SearchBar } from '.'
import { useCardsStore } from '@/stores'
import { cn } from '@/lib/utils'

export const Footer = () => {
    const { searchQuery, filteredCards } = useCardsStore()
    return (
        <footer className="w-full border-t border-gray-200 bg-black/5 py-2">
            <MaxWidthWrapper className="flex justify-center items-center">
                <div className="w-[320px] flex justify-between items-center">
                    <SearchBar />
                    <p
                        className={cn(
                            'w-[100px] text-center text-sm text-balance bg-[url("/bg-gray.webp")] bg-cover bg-no-repeat bg-center',
                            {
                                'bg-[url("/bg-green.webp")]':
                                    searchQuery && filteredCards.length > 0,
                                'bg-[url("/bg-red.webp")]':
                                    searchQuery && filteredCards.length === 0,
                            }
                        )}
                    >
                        {searchQuery && filteredCards.length > 1
                            ? `${filteredCards.length} Wörter gefunden`
                            : searchQuery && filteredCards.length === 1
                            ? `${filteredCards.length} Wort gefunden`
                            : searchQuery && filteredCards.length === 0
                            ? 'Nichts gefunden!'
                            : 'Geben Sie ein Wort ein'}{' '}
                    </p>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}
