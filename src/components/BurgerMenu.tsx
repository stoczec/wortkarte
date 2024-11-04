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
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { ModeToggle, NavMenu } from '.'
import { Separator } from './ui/separator'
import { Menu } from 'lucide-react'

// const SHEET_SIDES = ['right'] as const

export function BurgerMenu() {
    return (
        <Sheet>
            <SheetTrigger asChild className="flex justify-center items-center">
                <Menu className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent
                side="right"
                className="flex flex-col justify-start h-full"
            >
                <SheetTitle className="p-2">Navigation</SheetTitle>
                <SheetDescription className="px-2">
                    Wählen Sie einen Bereich zum Navigieren aus
                </SheetDescription>
                <Separator />

                {/* <ul className="grid gap-4 flex-grow"> */}
                <NavMenu />
                <Separator />
                <Select>
                    <SelectTrigger className="w-[260px]">
                        <SelectValue placeholder="Die Anzahl der angezeigten Karten" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="five">5</SelectItem>
                            <SelectItem value="ten">10</SelectItem>
                            <SelectItem value="fifteen">15</SelectItem>
                            <SelectItem value="twenty">20</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Separator />
                <div className="flex justify-between items-center px-2 text-sm flex-grow-0 flex-shrink-0">
                    <p>Theme</p>
                    <ModeToggle />
                </div>
                {/* </ul> */}
                <Separator />

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
