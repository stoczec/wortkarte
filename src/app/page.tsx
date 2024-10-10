'use client'

import { ActionBar, WordCarousel } from '@/components'
import { useFilteredCards } from '@/hooks'

export default function Home() {
	const { filteredCards } = useFilteredCards()
	return (
		<section className="flex flex-col items-center justify-center flex-grow flex-shrink-0 basis-auto">
			<ActionBar />
			<WordCarousel data={filteredCards} />
		</section>
	)
}
