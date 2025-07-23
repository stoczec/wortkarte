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
import Groq from 'groq-sdk'

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
    dangerouslyAllowBrowser: true,
})

interface GroqBotDrawerProps {
    prompt: string
    level: string
}

export const GroqBotDrawer: React.FC<GroqBotDrawerProps> = ({ prompt, level }) => {
    const [translate, setTranslate] = useState<string>('')
    const [example, setExample] = useState<string>('')
    const [exampleTranslate, setExampleTranslate] = useState<string>('')

    const fetchData = async () => {
        try {
            const translationStream = await getGroqChatStream(
                `You are a translator. Translate the German word "${prompt}" into Russian. Give up to 1 synonyms separated by commas. Translation only, no explanation.`
            )
            for await (const chunk of translationStream) {
                const content = chunk.choices[0]?.delta?.content || ''
                setTranslate(prev => prev + content)
                console.log()
            }

            const exampleStream = await getGroqChatStream(
                `Compose a short sentence in German with the word "${prompt}". Just the sentence, no explanation.`
            )
            let exampleContent = ''
            for await (const chunk of exampleStream) {
                const content = chunk.choices[0]?.delta?.content || ''
                exampleContent += content
                setExample(exampleContent)
            }

            const exampleTranslateStream = await getGroqChatStream(
                `Translate into Russian: "${exampleContent}". Translation only, no explanation.`
            )
            for await (const chunk of exampleTranslateStream) {
                const content = chunk.choices[0]?.delta?.content || ''
                setExampleTranslate(prev => prev + content)
            }
        } catch (error) {
            console.error('Error fetching chat completion:', error)
        }
    }

    const getGroqChatStream = async (content: string) => {
        return groq.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: content,
                },
            ],
            stream: true,
            model: 'llama-3.3-70b-versatile',
        })
    }

    const handleDrawerClose = () => {
        setTranslate('')
        setExample('')
        setExampleTranslate('')
    }

    const handleRepeatFetch = () => {
        setTranslate('')
        setExample('')
        setExampleTranslate('')
        fetchData()
    }

    return (
        <div className="w-full flex justify-center rounded-b-xl">
            <Drawer>
                <DrawerTrigger
                    className="w-full font-bold text-white bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 hover:bg-gradient-to-br rounded-b-xl  shadow-inner shadow-black border-2 text-sm px-5 py-2.5 text-center animate-gradient"
                    style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}
                    onClick={e => {
                        e.stopPropagation()
                        fetchData()
                    }}
                >
                    🤖 KI, bitte hilf!
                </DrawerTrigger>
                <DrawerContent style={{ fontFamily: 'DynaPuffRegular, sans-serif' }}>
                    <DrawerHeader className="flex flex-col justify-center items-center">
                        <DrawerTitle className="text-2xl">{prompt}</DrawerTitle>
                        <DrawerDescription className="w-[320px]  text-center flex flex-col gap-4">
                            <span className="shrink-0 bg-border h-[1px] w-full" />
                            <span className="text-2xl font-bold">{translate}</span>
                            <span className="shrink-0 bg-border h-[1px] w-full" />
                            <span>{example}</span>
                            <span className="shrink-0 bg-border h-[1px] w-full" />
                            <span>{exampleTranslate}</span>
                        </DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter className="flex flex-row justify-center gap-4">
                        <Button
                            onClick={e => {
                                e.stopPropagation()
                                handleRepeatFetch()
                            }}
                            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient"
                        >
                            Noch ein Mal
                        </Button>
                        <DrawerClose
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-r from-green-400 via-blue-500 to-teal-600 text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                            onClick={handleDrawerClose}
                        >
                            Alles klar
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
