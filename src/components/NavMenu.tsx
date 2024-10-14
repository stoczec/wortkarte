import React from 'react'
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
} from '@radix-ui/react-navigation-menu'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'
import { MaxWidthWrapper } from '.'
import { cn } from '@/lib/utils'

export const NavMenu = () => {
	return (
		// <nav className="h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-black/5 backdrop-blur-lg transition-all">
		// 	<MaxWidthWrapper className="flex items-center justify-between">
		<NavigationMenu>
			<NavigationMenuList className="w-full flex flex-col gap-4">
				<NavigationMenuItem className="w-full">
					<NavigationMenuLink
						href="/"
						className={cn(
							navigationMenuTriggerStyle(),
							'w-full flex justify-start px-2'
						)}
					>
						Startseite
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						href="/favorite/1"
						className={cn(
							navigationMenuTriggerStyle(),
							'w-full flex justify-start px-2'
						)}
					>
						Favoriten
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
		// 	</MaxWidthWrapper>
		// </nav>
	)
}
