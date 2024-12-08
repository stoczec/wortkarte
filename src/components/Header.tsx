'use client'

import React from 'react'
import { MaxWidthWrapper, BurgerMenu, SearchBar } from '.'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCardsStore } from '@/stores'
import { cn } from '@/lib/utils'

export const Header = () => {
    const { searchQuery, filteredCards } = useCardsStore()
    const pathname = usePathname()

    const isHomeRoute = pathname === '/'
    return (
        <header className="h-12 inset-x-0 top-0 w-full border-b border-gray-200 bg-black/5 backdrop-blur-lg transition-all px-4">
            <MaxWidthWrapper className="flex items-center justify-between gap-2 py-4 md:px-0 mx-0">
                {isHomeRoute ? (
                    <Link
                        href="/"
                        className="text-xl font-semibold"
                        style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}
                    >
                        wort<span className="text-primary">karte</span>
                    </Link>
                ) : (
                    <div className=" flex justify-between items-center gap-2">
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
                )}
                <BurgerMenu />
            </MaxWidthWrapper>
        </header>
    )
}
