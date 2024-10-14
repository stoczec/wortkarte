import React from 'react'
import { House, Heart, Search, GalleryHorizontalEnd } from 'lucide-react'
import { MaxWidthWrapper, BurgerMenu } from '.'
import Link from 'next/link'

export const Header = () => {
	return (
		<header className="h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-black/5 backdrop-blur-lg transition-all px-4">
			<MaxWidthWrapper className="flex items-center justify-between py-4">
				<Link href="/" className="text-xl font-semibold">
					wort<span className="text-primary">karte</span>
				</Link>
				<div className="flex items-center gap-4">
					<Link href="/">
						<House />
					</Link>
					<Link href="/page/1">
						<GalleryHorizontalEnd />
					</Link>
					<Link href="/favorite/1">
						<Heart />
					</Link>
					<Search />
				</div>
				<BurgerMenu />
			</MaxWidthWrapper>
		</header>
	)
}
