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

    return (
        <div className="w-full flex justify-center">
            <Drawer>
                <DrawerTrigger
                    className="w-full font-bold text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}
                >
                    Wichtig!
                </DrawerTrigger>
                <DrawerContent style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}>
                    <DrawerHeader className="flex flex-col justify-center items-center">
                        <div className="flex gap-4">
                            <Button
                                onClick={() => setLanguage('DE')}
                                variant={language === 'DE' ? 'default' : 'secondary'}
                            >
                                DE
                            </Button>
                            <Button
                                onClick={() => setLanguage('RU')}
                                variant={language === 'RU' ? 'default' : 'secondary'}
                            >
                                RU
                            </Button>
                        </div>
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
