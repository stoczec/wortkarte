import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Impressum – Wortkarte',
    description: 'Impressum der Lern-App Wortkarte.',
}

export default function ImpressumPage() {
    return (
        <section className="flex flex-col items-center justify-start py-6 flex-grow flex-shrink-0 basis-auto">
            <article className="w-full max-w-2xl px-4 text-start leading-relaxed text-muted-foreground">
                <h1 className="text-2xl font-bold mb-5 text-foreground">Impressum</h1>

                <h2 className="text-base font-semibold mt-6 mb-1.5 text-foreground">
                    Angaben gemäß § 5 DDG
                </h2>
                <p className="mb-1">
                    Dmytro Herashchenko
                    <br />
                    c/o IP-Management #12307
                    <br />
                    Ludwig-Erhard-Str. 18
                    <br />
                    20459 Hamburg
                    <br />
                    Deutschland
                </p>

                <h2 className="text-base font-semibold mt-6 mb-1.5 text-foreground">Kontakt</h2>
                <p className="mb-1">
                    E-Mail:{' '}
                    <a href="mailto:dmytro.herashchenko.de@gmail.com" className="underline">
                        dmytro.herashchenko.de@gmail.com
                    </a>
                    <br />
                    Telegram:{' '}
                    <a href="https://t.me/DmytroHerashchenko" className="underline">
                        @DmytroHerashchenko
                    </a>
                </p>
            </article>
        </section>
    )
}
