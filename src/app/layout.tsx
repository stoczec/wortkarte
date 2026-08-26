import React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Footer, Header } from '@/components'
import { SITE_URL } from '@/constans/constans'

const title = 'Wortkarte - Deutsch lernen mit farblichen Lernkarten'
const description =
    'Wortkarte hilft Nutzern dabei, Deutsch zu lernen, indem Wörter je nach Wortklasse farblich hervorgehoben und Lernkarten mit assoziativen Bildern verwendet werden, um die Einprägung zu verbessern.'

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: 'Wortkarte',
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        siteName: 'Wortkarte',
        locale: 'de_DE',
        url: '/',
        title,
        description,
        images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Wortkarte' }],
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: ['/og.png'],
    },
    robots: { index: true, follow: true },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="de" suppressHydrationWarning={true}>
            <body className="antialiased">
                <div className="flex flex-col min-h-screen">
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
