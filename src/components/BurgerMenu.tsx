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
import {
    CardCategorySelect,
    ItemsPerPageSelect,
    ModeToggle,
    NavMenu,
    WordLevelSelect,
    AlertDialogCustom,
} from '.'
import { Separator } from './ui/separator'
import { Menu } from 'lucide-react'

export function BurgerMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild className="flex justify-center items-center">
                <Menu className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent
                side="right"
                className="flex flex-col justify-start h-full"
                style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}
            >
                <SheetTitle className="p-2 text-center">Menu</SheetTitle>
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

                <Separator />
                <div className="flex flex-col justify-start gap-2">
                    <SheetDescription className="px-2 text-red-500">
                        Achtung, Gefahrenzone!
                    </SheetDescription>
                    <div className="px-2">
                        <AlertDialogCustom />
                    </div>
                </div>
                <SheetFooter className="flex flex-col justify-center items-center mt-auto sm:justify-center sm:flex-col flex-grow-0 flex-shrink-0 gap-2">
                    <Separator />

                    <p className="text-sm text-center text-muted-foreground">
                        &copy; 2024 - {new Date().getFullYear()}
                    </p>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
