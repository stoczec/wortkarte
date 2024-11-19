'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { DisclaimerDrawer, HintDrawer } from '@/components'
import { Menu } from 'lucide-react'

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-start gap-10 py-3 flex-grow flex-shrink-0 basis-auto">
            <p
                className="text-4xl font-bold mt-5 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient"
                style={{ fontFamily: 'DynaPuffMedium, sans-serif' }}
            >
                Willkommen!
            </p>
            <Image src="/favicon.ico" alt="logo" width={320} height={576} />
            <div className="w-[320px] h-full flex flex-col justify-between items-center gap-4">
                <Link href="/page/1">
                    <Button
                        size={'lg'}
                        className="text-lg text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 dark:focus:ring-orange-800 shadow-lg shadow-orange-500/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-center "
                    >
                        Los geht&lsquo;s!
                    </Button>
                </Link>
                <div className="w-[320px] flex justify-center gap-4">
                    <DisclaimerDrawer />
                    <HintDrawer />
                </div>
            </div>
        </section>
    )
}
