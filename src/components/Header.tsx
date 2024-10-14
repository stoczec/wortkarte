import React from 'react'
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
} from '@radix-ui/react-navigation-menu'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'
import { MaxWidthWrapper, BurgerMenu } from '.'
import Link from 'next/link'

export const Header = () => {
	return (
		<header className="h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-black/5 backdrop-blur-lg transition-all">
			<MaxWidthWrapper className="flex items-center justify-between">
				<Link href="/" className="text-xl font-semibold">
					wort<span className="text-primary">karte</span>
				</Link>
				<BurgerMenu />
			</MaxWidthWrapper>
		</header>
	)
}
