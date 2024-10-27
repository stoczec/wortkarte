'use client'
import React from 'react'
import { GrammarTable } from '@/components'
import { Separator } from '@/components/ui/separator'

export default function About() {
	return (
		<section className="flex flex-col items-center justify-between gap-4 py-3 flex-grow flex-shrink-0 basis-auto">
			<div className="w-[320px] flex flex-col gap-4">
				<p>
					<span className="text-3xl font-bold">
						wort<span className="text-primary">karte </span>-{' '}
					</span>
					die den Nutzern dabei hilft, Deutsch zu lernen, indem sie Lernkarten
					mit assoziativen Bildern und einer farblichen Kategorisierung der
					Grammatik zur besseren Einprägung verwendet.
				</p>
				<Separator className="h-[2px] rounded-xl bg-gray-300" />
				<p>
					Auf der Seite werden Wörter je nach Wortklasse farblich hervorgehoben,
					um ihre Kategorie visuell zu verdeutlichen.
				</p>
				<GrammarTable />
			</div>
		</section>
	)
}
