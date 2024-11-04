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
import { Badge } from '@/components/ui/badge'
import { ModeToggle, NavMenu } from '.'
import { Separator } from './ui/separator'
import { Menu } from 'lucide-react'
import { useAllCardsStore } from '@/stores'

// const SHEET_SIDES = ['right'] as const

export function BurgerMenu() {
    const setItemsPerPage = useAllCardsStore(state => state.setItemsPerPage) // Получаем функцию установки itemsPerPage из Zustand
    const itemsPerPage = useAllCardsStore(state => state.itemsPerPage)
    console.log(itemsPerPage)

    const handleSelectChange = (value: string) => {
        console.log('value: ' + value)
        setItemsPerPage(Number(value)) // Конвертируем значение в число и обновляем itemsPerPage
    }
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
                <div className="w-full flex justify-start gap-2 px-2">
                    <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="w-[260px]">
                            <SelectValue placeholder="Die Anzahl der angezeigten Karten" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="15">15</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Badge variant="default" className="bg-primary">
                        {itemsPerPage} Stück
                    </Badge>
                </div>

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
