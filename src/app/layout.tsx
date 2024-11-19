import React from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Footer, Header } from '@/components'

export const metadata: Metadata = {
    title: 'Wortkarte - Deutsch lernen mit farblichen Lernkarten',
    description:
        'Wortkarte hilft Nutzern dabei, Deutsch zu lernen, indem Wörter je nach Wortklasse farblich hervorgehoben und Lernkarten mit assoziativen Bildern verwendet werden, um die Einprägung zu verbessern.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}>
                <div className="flex flex-col h-full">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Header />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </div>
            </body>
        </html>
    )
}
