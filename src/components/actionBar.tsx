'use client'

import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { SearchBar } from './searchBar'
import { useFilteredCards } from '@/hooks'

export const ActionBar = () => {
	const { searchQuery, updateSearchQuery } = useFilteredCards()
	return (
		<div className="flex items-center justify-center gap-3">
			<Link href="/favorite">
				<Heart className="w-10 h-10 fill-primary" />
			</Link>
			<SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} />
		</div>
	)
}
