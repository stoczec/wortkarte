import React from 'react'
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
} from '@radix-ui/react-navigation-menu'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'
import { MaxWidthWrapper, ModeToggle } from '.'
import Link from 'next/link'

export const NavMenu = () => {
	return (
		<nav className="h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-black/5 backdrop-blur-lg transition-all">
			<MaxWidthWrapper className="flex items-center justify-between">
				<Link href="/" className="font-semibold">
					wort<span className="text-primary">karte</span>
				</Link>
				<NavigationMenu>
					<NavigationMenuList className="flex gap-4">
						<NavigationMenuItem>
							<NavigationMenuLink
								href="/"
								className={navigationMenuTriggerStyle()}
							>
								Startseite
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								href="/favorite/1"
								className={navigationMenuTriggerStyle()}
							>
								Favoriten
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<ModeToggle />
			</MaxWidthWrapper>
		</nav>
	)
}
