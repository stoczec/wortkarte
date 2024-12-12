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
import { Menu, MousePointerClick, ArrowLeft } from 'lucide-react'
import { tipp } from '@/data/tipp'

export const HintDrawer = () => {
    const [language, setLanguage] = useState<'DE' | 'RU'>('DE')

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
                            <div className="flex mt-4">
                                <Menu width={40} height={40} />
                                <ArrowLeft width={40} height={40} />
                                <MousePointerClick width={40} height={40} />
                            </div>
                        </DrawerTitle>
                        <DrawerDescription className="w-[320px] text-balance text-center">
                            {language === 'DE' ? tipp.DE.description : tipp.RU.description}
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose>
                            <Button>
                                {language === 'DE' ? tipp.DE.buttonTitle : tipp.RU.buttonTitle}
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
