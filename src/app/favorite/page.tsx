'use client'

import { ActionBar, WordCarousel } from '@/components'
import { useCardsStore } from '@/stores'

export default function Favorite() {
	const { favoriteCards } = useCardsStore()
	return (
		<section className="flex flex-col items-center justify-center flex-grow flex-shrink-0 basis-auto">
			<ActionBar />
			<WordCarousel data={favoriteCards} />
		</section>
	)
}
