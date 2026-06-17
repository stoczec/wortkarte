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
                <Link
                    href="/datenschutz"
                    className="text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground"
                >
                    Datenschutz
                </Link>
                {/* <h4 className="mb-4 text-sm font-medium leading-none">Letzte Aktualisierung</h4> */}
                {/* <ScrollArea className="h-10 w-[320px] rounded-md border">
                    <div className="p-4">
                        {[...updates].reverse().map((update, index) => (
                            <>
                                <div key={index} className="text-sm">
                                    {update.date} - {update.message}
                                </div>
                                <Separator className="my-2" />
                            </>
                        ))}
                    </div>
                </ScrollArea> */}
            </MaxWidthWrapper>
        </footer>
    )
}
