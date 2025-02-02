'use client'

import React, { useState } from 'react'
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from '@radix-ui/react-navigation-menu'
import { navigationMenuTriggerStyle } from './ui/navigation-menu'

import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'
import { Button } from './ui/button'
import { items } from '@/data/navigation'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible'

export const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <NavigationMenu>
            <NavigationMenuList className="w-full flex flex-col gap-4">
                <Collapsible className="group/collapsible" open={isOpen} onOpenChange={setIsOpen}>
                    <NavigationMenuItem>
                        <CollapsibleTrigger asChild>
                            <Button
                                variant="ghost"
                                className="flex items-center justify-between w-full "
                            >
                                <span>Navigation</span>
                                <span
                                    className={cn(
                                        {
                                            'transition-transform duration-300 rotate-90': isOpen,
                                        },
                                        {
                                            'transition-transform duration-300 rotate-[-90]':
                                                !isOpen,
                                        }
                                    )}
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </span>
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="CollapsibleContent">
                            {items.map(item => (
                                <NavigationMenuLink
                                    href={item.url}
                                    key={item.url}
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        'w-full flex justify-start gap-2 px-2',
                                        'overflow-hidden transition-all duration-300 ease-in-out',
                                        isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                    )}
                                >
                                    <item.icon className="mr-2 h-4 w-4" />
                                    {item.title}
                                </NavigationMenuLink>
                            ))}
                        </CollapsibleContent>
                    </NavigationMenuItem>
                </Collapsible>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
