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
            <p className="text-4xl font-bold mt-5">Willkommen!</p>
            <Image src="/favicon.ico" alt="logo" width={320} height={576} />
            <div className="w-[320px] h-full flex flex-col justify-between items-center gap-4">
                <Link href="/page/1">
                    <Button size={'lg'} className="text-lg">
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
