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

export const DisclaimerDrawer = () => {
    const [language, setLanguage] = useState<'DE' | 'RU'>('DE')
    const handleSetLanguage = () => {
        setLanguage(language === 'DE' ? 'RU' : 'DE')
    }
    return (
        <div className="w-full flex justify-center">
            <Drawer>
                <DrawerTrigger className="w-full font-bold bg-violet-500 px-4 py-2 border rounded-lg">
                    Wichtig!
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader className="flex flex-col justify-center items-center">
                        <Button onClick={handleSetLanguage} variant="secondary">
                            {language}
                        </Button>
                        <DrawerTitle className="text-2xl">
                            {language === 'DE' ? disclaimer.DE.title : disclaimer.RU.title}
                        </DrawerTitle>
                        <DrawerDescription>
                            {language === 'DE'
                                ? disclaimer.DE.description
                                : disclaimer.RU.description}
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose>
                            <Button>
                                {language === 'DE'
                                    ? disclaimer.DE.buttonTitle
                                    : disclaimer.RU.buttonTitle}
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
