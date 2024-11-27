'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerFooter,
    DrawerClose,
} from '../ui/drawer'
import { disclaimer } from '@/data'
import { Menu } from 'lucide-react'

export const HintDrawer = () => {
    return (
        <div className="w-full flex justify-center">
            <Drawer>
                <DrawerTrigger
                    className="w-full font-bold text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}
                >
                    Tipp
                </DrawerTrigger>
                <DrawerContent style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}>
                    <DrawerHeader className="flex flex-col justify-center items-center">
                        <DrawerTitle className="text-2xl">
                            <Menu width={40} height={40} />
                        </DrawerTitle>
                        <DrawerDescription className="w-[320px] text-balance text-center">
                            im Menü kannst du zwischen verschiedenen Bereichen navigieren, die
                            Karteneinstellungen anpassen, das Sprachniveau auswählen und wichtige
                            Aktionen durchführen.
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose>
                            <Button>Verstanden</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
