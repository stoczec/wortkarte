'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { DisclaimerDrawer, HintDrawer } from '@/components'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { updates } from '@/data/updates'

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-start gap-8 py-3 flex-grow flex-shrink-0 basis-auto">
            <p
                className="text-4xl font-bold mt-5 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient"
                style={{ fontFamily: 'DynaPuffMedium, sans-serif' }}
            >
                Willkommen!
            </p>
            <Image src="/favicon.ico" alt="logo" width={320} height={320} priority />
            <div className="w-[320px] h-full flex flex-col justify-between items-center gap-4">
                <Link href="/page/1">
                    <Button
                        size={'lg'}
                        className="text-lg text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-center "
                        style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}
                    >
                        Los geht&lsquo;s!
                    </Button>
                </Link>
                <div className="w-[320px] flex justify-center gap-4">
                    <DisclaimerDrawer />
                    <HintDrawer />
                </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-2">
                <h4 className="text-sm font-medium leading-none">Letzte Aktualisierung</h4>
                <ScrollArea className="h-16 w-[320px] rounded-md border">
                    <div className="p-2">
                        {[...updates].reverse().map((update, index) => (
                            <div key={index}>
                                <div className="text-sm">
                                    {update.date} - {update.message}
                                </div>
                                <Separator className="my-2" />
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </div>
        </section>
    )
}
