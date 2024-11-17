'use client'

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { CardCategorySelect, ItemsPerPageSelect, ModeToggle, NavMenu, WordLevelSelect } from '.'
import { Separator } from './ui/separator'
import { Menu } from 'lucide-react'
import { useCardsStore } from '@/stores'

// const SHEET_SIDES = ['right'] as const

export function BurgerMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild className="flex justify-center items-center">
                <Menu className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col justify-start h-full">
                <SheetTitle className="p-2">Navigation</SheetTitle>
                <SheetDescription className="px-2">
                    Wähle einen Bereich zum Navigieren aus
                </SheetDescription>
                <Separator />

                <NavMenu />

                <Separator />

                <SheetDescription className="px-2">
                    Wähle den Kartentyp für die Anzeige aus
                </SheetDescription>
                <CardCategorySelect />
                <SheetDescription className="px-2">
                    Wähle die Anzahl der Karten pro Seite aus
                </SheetDescription>
                <ItemsPerPageSelect />
                <SheetDescription className="px-2">Wähle das Niveau der Wörter</SheetDescription>

                <WordLevelSelect />
                <Separator />

                <div className="flex justify-between items-center px-2 text-sm flex-grow-0 flex-shrink-0">
                    <p>Theme</p>
                    <ModeToggle />
                </div>
                {/* </ul> */}

                <SheetFooter className="flex flex-col justify-center items-center mt-auto sm:justify-center sm:flex-col flex-grow-0 flex-shrink-0 gap-2">
                    <Separator />

                    <p className="text-sm text-center text-muted-foreground">
                        &copy;
                        {new Date().getFullYear()}
                    </p>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
