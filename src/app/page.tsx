'use client'

import { SearchBar, WordCarousel } from '@/components'
import { useFilteredCards } from '@/hooks'

export default function Home() {
	const { searchQuery, filteredCards, updateSearchQuery } = useFilteredCards()
	return (
		<div className="flex items-center justify-center flex-grow flex-shrink-0 basis-auto">
			<section>
				<SearchBar
					searchQuery={searchQuery}
					setSearchQuery={updateSearchQuery}
				/>
				<WordCarousel data={filteredCards} />
			</section>
		</div>
	)
}
