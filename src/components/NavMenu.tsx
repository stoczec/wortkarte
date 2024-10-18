import React from 'react'
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
} from '@radix-ui/react-navigation-menu'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'
import { Badge } from '@/components/ui/badge'

import { cn } from '@/lib/utils'
import {
	House,
	Heart,
	GalleryHorizontalEnd,
	MessageCircleDashed,
	Contact,
} from 'lucide-react'
import { useAllCardsStore, useFavoriteCardsStore } from '@/stores'

export const NavMenu = () => {
	const cards = useAllCardsStore(state => state.cards)
	const favoriteCards = useFavoriteCardsStore(state => state.favoriteCards)

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
						<Badge variant="default" className="bg-primary">
							{cards.length} Stück
						</Badge>
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
						<Badge variant="default" className="bg-primary">
							{favoriteCards.length} Stück
						</Badge>
					</NavigationMenuLink>
				</NavigationMenuItem>

				<NavigationMenuItem className="w-full">
					<NavigationMenuLink
						href="/about"
						className={cn(
							navigationMenuTriggerStyle(),
							'w-full flex justify-start gap-2 px-2'
						)}
					>
						<MessageCircleDashed />
						Über das Projekt
					</NavigationMenuLink>
				</NavigationMenuItem>

				<NavigationMenuItem className="w-full">
					<NavigationMenuLink
						href="/contacts"
						className={cn(
							navigationMenuTriggerStyle(),
							'w-full flex justify-start gap-2 px-2'
						)}
					>
						<Contact />
						Kontakte
					</NavigationMenuLink>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	)
}
