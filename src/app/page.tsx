'use client'

import { SearchBar, WordCarousel } from '@/components'
import { useFilteredCards } from '@/hooks'

export default function Home() {
	const { filteredCards, searchQuery, updateSearchQuery } = useFilteredCards()
	return (
		<section className="flex flex-col items-center justify-center flex-grow flex-shrink-0 basis-auto">
			<SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} />
			<WordCarousel data={filteredCards} />
		</section>
	)
}
