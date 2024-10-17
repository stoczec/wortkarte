'use client'

import { MaxWidthWrapper, SearchBar } from '.'
import { useFilteredCards } from '@/hooks'

export const Footer = () => {
	const { searchQuery, updateSearchQuery } = useFilteredCards()

	return (
		<footer className="w-full h-14 border-t border-gray-200 bg-black/5 flex-grow-0 flex-shrink-0 basis-auto">
			<MaxWidthWrapper className="flex justify-center items-center">
				<SearchBar
					searchQuery={searchQuery}
					setSearchQuery={updateSearchQuery}
				/>
			</MaxWidthWrapper>
		</footer>
	)
}
