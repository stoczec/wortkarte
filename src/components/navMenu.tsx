import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
} from '@radix-ui/react-navigation-menu'
import React from 'react'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'

export const NavMenu = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList className="flex gap-4">
				<NavigationMenuItem>
					<NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
						Startseite
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						href="/favorite"
						className={navigationMenuTriggerStyle()}
					>
						Favoriten
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}
