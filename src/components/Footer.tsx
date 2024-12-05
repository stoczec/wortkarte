'use client'

import React from 'react'
import { MaxWidthWrapper } from '.'

export const Footer = () => {
    return (
        <footer
            className="w-full border-t border-gray-200 bg-black/5 py-1"
            style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}
        >
            <MaxWidthWrapper className="flex justify-center items-center">
                <p className="text-sm text-center text-muted-foreground">
                    &copy;
                    {new Date().getFullYear()}
                </p>
            </MaxWidthWrapper>
        </footer>
    )
}
