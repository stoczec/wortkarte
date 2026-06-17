'use client'

import React, { Suspense } from 'react'
import { MaxWidthWrapper, BurgerMenu, SearchBar } from '.'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export const Header = () => {
    const pathname = usePathname()
    const isHomeRoute = pathname === '/'

    return (
        <header className="h-12 flex justify-center inset-x-0 top-0 w-full border-b border-gray-200 bg-black/5 backdrop-blur-lg transition-all px-4">
            <MaxWidthWrapper
                className={clsx(
                    'w-[350px] flex items-center justify-center gap-2 py-4 md:px-0 mx-0',
                    { 'justify-between': isHomeRoute }
                )}
            >
                {isHomeRoute ? (
                    <Link
                        href="/"
                        className="text-xl font-semibold"
                        style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}
                    >
                        wort<span className="text-primary">karte</span>
                    </Link>
                ) : (
                    <Suspense fallback={<div className="w-[210px] py-1" />}>
                        <SearchBar />
                    </Suspense>
                )}
                <BurgerMenu />
            </MaxWidthWrapper>
        </header>
    )
}
