'use client'

import React from 'react'
import Link from 'next/link'
import { MaxWidthWrapper } from '.'

export const Footer = () => {
    return (
        <footer
            className="w-full border-t border-gray-200 bg-black/5 py-1"
            style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}
        >
            <MaxWidthWrapper className="flex flex-col justify-center items-center gap-1">
                <p className="text-sm text-center text-muted-foreground">
                    &copy; 2024 - {new Date().getFullYear()}
                </p>
                <div className="flex gap-4">
                    <Link
                        href="/impressum"
                        className="py-1 text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground"
                    >
                        Impressum
                    </Link>
                    <Link
                        href="/datenschutz"
                        className="py-1 text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground"
                    >
                        Datenschutz
                    </Link>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}
