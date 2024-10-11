'use client'

import { GrammarTable } from '@/components'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-start gap-4 py-3 flex-grow flex-shrink-0 basis-auto">
			<div className="w-[320px] flex flex-col gap-3">
				<p className="text-balance">
					<span className="text-3xl font-bold">
						wort<span className="text-primary">karte </span>
					</span>
					die den Nutzern dabei hilft, Deutsch zu lernen, indem sie Lernkarten
					mit assoziativen Bildern und einer farblichen Kategorisierung der
					Grammatik zur besseren Einprägung verwendet.
				</p>
				<Separator className="h-[2px] rounded-xl bg-gray-300" />
				<p className="text-balance">
					Auf der Seite werden Wörter je nach Wortklasse farblich hervorgehoben,
					um ihre Kategorie visuell zu verdeutlichen.
				</p>
				<GrammarTable />
			</div>
			<Link href="/page/1">
				<Button size={'lg'}>Los geht's!</Button>
			</Link>
		</section>
	)
}
