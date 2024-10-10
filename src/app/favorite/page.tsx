'use client'

import { SearchBar, WordCarousel } from '@/components'
import { useFilteredCards } from '@/hooks'
import { useCardsStore } from '@/stores'

export default function Favorite() {
	const { favoriteCards } = useCardsStore()
	return (
		<section className="flex flex-col items-center justify-center flex-grow flex-shrink-0 basis-auto">
			{/* <SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} /> */}
			<WordCarousel data={favoriteCards} />
		</section>
	)
}
