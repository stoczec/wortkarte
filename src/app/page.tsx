'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
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
				<Table>
					<TableBody>
						<TableRow>
							<TableCell className="text-blue-500 text-lg font-bold">
								Maskulin
							</TableCell>
							<TableCell className="text-red-500 text-lg font-bold">
								Feminin
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="text-green-500 text-lg font-bold">
								Neutral
							</TableCell>
							<TableCell className="text-yellow-500 text-lg font-bold">
								Plural
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="text-orange-500 text-lg font-bold">
								Verb
							</TableCell>
							<TableCell className="text-purple-500 text-lg font-bold">
								Adjective
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="text-pink-500 text-lg font-bold">
								Adverb
							</TableCell>
							<TableCell className="text-gray-500 text-lg font-bold">
								Präposition
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="text-amber-500 text-lg font-bold">
								Konjunktion
							</TableCell>
							<TableCell className="text-teal-500 text-lg font-bold">
								Partikel
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</div>
			<Link href="/page/1">
				<Button size={'lg'}>Los geht's!</Button>
			</Link>
		</section>
	)
}
