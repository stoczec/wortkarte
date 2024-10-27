'use client'

import React from 'react'
import { MaxWidthWrapper } from '.'

export const Footer = () => {
	return (
		<footer className="w-full h-12 border-t border-gray-200 bg-black/5 flex-grow-0 flex-shrink-0 basis-auto">
			<MaxWidthWrapper className="flex justify-center items-center">
				{/* <SearchBar
					searchQuery={searchQuery}
					setSearchQuery={updateSearchQuery}
				/> */}
				<p className="text-sm text-center text-muted-foreground">
					&copy;
					{new Date().getFullYear()}
				</p>
			</MaxWidthWrapper>
		</footer>
	)
}
