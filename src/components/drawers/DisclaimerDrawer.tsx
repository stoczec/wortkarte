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
                <DrawerTrigger className="w-full font-bold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
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
                        <DrawerDescription className="w-[320px] text-balance text-center">
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
