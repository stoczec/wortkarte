import React from 'react'
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
} from '@radix-ui/react-navigation-menu'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'
import { cn } from '@/lib/utils'
import { House, Heart, GalleryHorizontalEnd } from 'lucide-react'

export const NavMenu = () => {
	return (
		<NavigationMenu>
			<NavigationMenuList className="w-full flex flex-col gap-4">
				<NavigationMenuItem className="w-full">
					<NavigationMenuLink
						href="/"
						className={cn(
							navigationMenuTriggerStyle(),
							'w-full flex justify-start gap-2 px-2'
						)}
					>
						<House />
						Startseite
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem className="w-full">
					<NavigationMenuLink
						href="/page/1"
						className={cn(
							navigationMenuTriggerStyle(),
							'w-full flex justify-start gap-2 px-2'
						)}
					>
						<GalleryHorizontalEnd />
						Alle Karten
					</NavigationMenuLink>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuLink
						href="/favorite/1"
						className={cn(
							navigationMenuTriggerStyle(),
							'w-full flex justify-start gap-2 px-2'
						)}
					>
						<Heart />
						Favoriten
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}
