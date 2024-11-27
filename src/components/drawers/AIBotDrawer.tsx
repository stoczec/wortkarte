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
const { GoogleGenerativeAI } = require('@google/generative-ai')

interface AIBotDrawerProps {
    wort: string
}

export const AIBotDrawer: React.FC<AIBotDrawerProps> = ({ wort }) => {
    const [generatedText, setGeneratedText] = useState<string>('')

    const fetchData = async () => {
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_AI_API_KEY)
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

        const prompt = `Отвечай на русском языке. Переведи слово ${wort} на русский язык и напиши небольшое объяснение на русском языке.`

        try {
            const result = await model.generateContentStream(prompt)

            for await (const chunk of result.stream) {
                const chunkText = chunk.text()
                setGeneratedText(prev => prev + chunkText)
            }
        } catch (error) {
            console.error('Error generating content:', error)
        }
    }

    const handleDrawerClose = () => setGeneratedText('')
    return (
        <div className="w-full flex justify-center ">
            <Drawer>
                <DrawerTrigger
                    className="w-full font-bold text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                    style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}
                    onClick={fetchData}
                >
                    KI Bot
                </DrawerTrigger>
                <DrawerContent style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}>
                    <DrawerHeader className="flex flex-col justify-center items-center">
                        <DrawerTitle className="text-2xl">Antwort</DrawerTitle>
                        <DrawerDescription className="w-[320px] text-balance text-center">
                            {generatedText}
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>
                        <DrawerClose>
                            <Button onClick={handleDrawerClose}>Verstanden</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
