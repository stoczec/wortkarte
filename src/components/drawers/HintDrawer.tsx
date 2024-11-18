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
                <DrawerTrigger className="w-full font-bold bg-green-500 px-4 py-2 border rounded-lg">
                    Tipp
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className="flex flex-col justify-center items-center">
                        <DrawerTitle className="text-2xl">
                            <Menu width={40} height={40} />
                        </DrawerTitle>
                        <DrawerDescription>
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
