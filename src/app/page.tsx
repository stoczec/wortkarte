'use client'

import { SearchBar, WordCarousel } from '@/components'
import { Button } from '@/components/ui/button'
import { useFilteredCards } from '@/hooks'
import Link from 'next/link'

export default function Home() {
	const { filteredCards, searchQuery, updateSearchQuery } = useFilteredCards()
	return (
		<section className="flex flex-col items-center justify-center flex-grow flex-shrink-0 basis-auto">
			{/* <SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} />
			<WordCarousel data={filteredCards} /> */}
			<Link href="/page/1">
				<Button>Los geht's</Button>
			</Link>
		</section>
	)
}
