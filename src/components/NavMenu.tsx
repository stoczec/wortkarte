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
    Shuffle,
} from 'lucide-react'
import { useCardsStore } from '@/stores'

export const NavMenu = () => {
    const displayedCards = useCardsStore(state => state.displayedCards)
    const favoriteCards = useCardsStore(state => state.favoriteCards)

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
