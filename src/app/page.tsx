'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useAllCardsStore } from '@/stores'
import Image from 'next/image'

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-start gap-10 py-3 flex-grow flex-shrink-0 basis-auto">
			<p className="text-4xl font-bold mt-5">Willkommen!</p>
			<Image src="/favicon.ico" alt="logo" width={320} height={576} />
			<Link href="/page/1">
				<Button size={'lg'} className="text-lg">
					Los geht's!
				</Button>
			</Link>
		</section>
	)
}
