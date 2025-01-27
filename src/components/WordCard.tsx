'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { IWordCardProperties } from '@/interfaces/interfaces'
import { cn, getFontSizeClass } from '@/lib/utils'
import { WORD_CLASSES } from '@/enums/enums'
import { useCardsStore } from '@/stores'
import { Heart } from 'lucide-react'
import ImageWithLoading from './ImageWithLoading'
import { URL_IMAGES } from '@/constans/constans'
import { Badge } from './ui/badge'
import { GroqBotDrawer } from '.'
import { Separator } from './ui/separator'

const animationTransitionConfig = {
    duration: 1,
    type: 'tween',
}

export const WordCard = ({ data }: IWordCardProperties) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [imageUrl, setImageUrl] = useState<string | null>(null)

    const isFavorite = useCardsStore(state => state.favoriteCards.some(card => card.id === data.id))

    const { addFavoriteCard, removeFavoriteCard } = useCardsStore()

    const {
        id,
        article,
        pluralEnding,
        wordDe,
        wordRu,
        wordClass,
        exampleDe,
        exampleRu,
        fileKeyUploadthing,
    } = data

    const handleFlipCard = () => {
        setIsFlipped(prevCount => !prevCount)
    }

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            removeFavoriteCard(id)
        } else {
            addFavoriteCard(data)
        }
    }

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await fetch(`${URL_IMAGES}${fileKeyUploadthing}`)
                if (response.ok) {
                    const blob = await response.blob()
                    setImageUrl(URL.createObjectURL(blob))
                } else {
                    console.error('Failed to fetch image')
                }
            } catch (error) {
                console.error('Error fetching image:', error)
            }
        }

        fetchImage()
    }, [fileKeyUploadthing])
    const regex = /^\d{1,}-/
    const result = id.replace(regex, '')
    return (
        <div className="rounded-b-xl">
            <Card
                className="relative border-none aspect-[9/16] w-[320px] p-0 rounded-t-xl  transform transition-transform "
                onClick={handleFlipCard}
            >
                <div className="absolute top-2 left-2 z-10">
                    <Badge>
                        <span>{result}</span>
                    </Badge>
                </div>
                <div
                    onClick={e => {
                        e.stopPropagation()
                        handleFavoriteToggle()
                    }}
                    className="cursor-pointer"
                >
                    <Heart
                        className={cn('absolute top-2 right-2 z-10', {
                            'fill-primary': isFavorite,
                            'text-primary': !isFavorite,
                        })}
                    />
                </div>
                {imageUrl && <ImageWithLoading src={imageUrl} alt={wordDe} />}
                <CardContent
                    className={cn(
                        'w-full p-1',
                        'absolute bottom-0 z-10',
                        'flex justify-center items-center',
                        ' overflow-hidden before:bg-white/10   backdrop-brightness-25'
                    )}
                >
                    {!isFlipped ? (
                        <motion.p
                            className={cn(
                                getFontSizeClass(wordDe),
                                'font-bold text-balance text-center px-2',
                                {
                                    'text-blue-500': wordClass === WORD_CLASSES.MASKULIN,
                                    'text-red-500': wordClass === WORD_CLASSES.FEMININ,
                                    'text-green-500': wordClass === WORD_CLASSES.NEUTRAL,
                                    'text-yellow-500': wordClass === WORD_CLASSES.PLURAL,
                                    'text-orange-500': wordClass === WORD_CLASSES.VERB,
                                    'text-purple-500': wordClass === WORD_CLASSES.ADJEKTIV,
                                    'text-pink-500': wordClass === WORD_CLASSES.ADVERB,
                                    'text-gray-500': wordClass === WORD_CLASSES.PRÄPOSITION,
                                    'text-amber-800': wordClass === WORD_CLASSES.KONJUNKTION,
                                    'text-teal-500': wordClass === WORD_CLASSES.PARTIKEL,
                                    'text-indigo-600': wordClass === WORD_CLASSES.NUMERALE,
                                    'text-lime-500': wordClass === WORD_CLASSES.PRONOMEN,
                                    'text-indigo-500': wordClass === WORD_CLASSES.INTERJEKTION,
                                    'text-slate-700': wordClass === WORD_CLASSES.ARTIKEL,
                                    'text-teal-700': wordClass === WORD_CLASSES.PHRASEN,
                                    'text-cyan-600': wordClass === WORD_CLASSES.SATZADVERBIEN,
                                    'text-gray-800': wordClass === WORD_CLASSES.AUXILIARVERB,
                                    'text-orange-700': wordClass === WORD_CLASSES.MODALVERB,
                                    'text-rose-500': wordClass === WORD_CLASSES.REFLEXIVPRONOMEN,
                                    'text-yellow-600':
                                        wordClass === WORD_CLASSES.DEMONSTRATIVPRONOMEN,
                                    'text-teal-600': wordClass === WORD_CLASSES.RELATIVPRONOMEN,
                                    'text-blue-600':
                                        wordClass === WORD_CLASSES.INTERROGATIVPRONOMEN,
                                    'text-indigo-700': wordClass === WORD_CLASSES.POSSESSIVPRONOMEN,
                                }
                            )}
                            initial={{ y: -100 }}
                            animate={{ y: 0 }}
                            transition={animationTransitionConfig}
                        >
                            {`${article} ${wordDe}${pluralEnding}`}
                        </motion.p>
                    ) : (
                        <div className="flex flex-col items-center justify-center gap-2">
                            <motion.p
                                className="text-xl font-bold text-balance text-center text-gray-300"
                                initial={{ x: -100 }}
                                animate={{ x: 0 }}
                                transition={animationTransitionConfig}
                            >
                                {exampleDe}
                            </motion.p>
                            <motion.div
                                className="w-full"
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={animationTransitionConfig}
                            >
                                <Separator className="h-[2px] rounded-xl bg-gray-300" />
                            </motion.div>
                            <motion.p
                                className="text-xl font-bold text-balance text-center text-gray-300"
                                initial={{ x: 100 }}
                                animate={{ x: 0 }}
                                transition={animationTransitionConfig}
                            >
                                {exampleRu}
                            </motion.p>
                            <motion.div
                                className="w-full"
                                initial={{ y: -100 }}
                                animate={{ y: 0 }}
                                transition={animationTransitionConfig}
                            >
                                <Separator className="h-[2px] rounded-xl bg-gray-300" />
                            </motion.div>
                            <motion.p
                                className={cn(
                                    getFontSizeClass(wordRu),
                                    'font-bold text-balance text-center px-2',
                                    {
                                        'text-blue-500': wordClass === WORD_CLASSES.MASKULIN,
                                        'text-red-500': wordClass === WORD_CLASSES.FEMININ,
                                        'text-green-500': wordClass === WORD_CLASSES.NEUTRAL,
                                        'text-yellow-500': wordClass === WORD_CLASSES.PLURAL,
                                        'text-orange-500': wordClass === WORD_CLASSES.VERB,
                                        'text-purple-500': wordClass === WORD_CLASSES.ADJEKTIV,
                                        'text-pink-500': wordClass === WORD_CLASSES.ADVERB,
                                        'text-gray-500': wordClass === WORD_CLASSES.PRÄPOSITION,
                                        'text-amber-800': wordClass === WORD_CLASSES.KONJUNKTION,
                                        'text-teal-500': wordClass === WORD_CLASSES.PARTIKEL,
                                        'text-indigo-600': wordClass === WORD_CLASSES.NUMERALE,
                                        'text-lime-500': wordClass === WORD_CLASSES.PRONOMEN,
                                        'text-indigo-500': wordClass === WORD_CLASSES.INTERJEKTION,
                                        'text-slate-700': wordClass === WORD_CLASSES.ARTIKEL,
                                        'text-teal-700': wordClass === WORD_CLASSES.PHRASEN,
                                        'text-cyan-600': wordClass === WORD_CLASSES.SATZADVERBIEN,
                                        'text-gray-800': wordClass === WORD_CLASSES.AUXILIARVERB,
                                        'text-orange-700': wordClass === WORD_CLASSES.MODALVERB,
                                        'text-rose-500':
                                            wordClass === WORD_CLASSES.REFLEXIVPRONOMEN,
                                        'text-yellow-600':
                                            wordClass === WORD_CLASSES.DEMONSTRATIVPRONOMEN,
                                        'text-teal-600': wordClass === WORD_CLASSES.RELATIVPRONOMEN,
                                        'text-blue-600':
                                            wordClass === WORD_CLASSES.INTERROGATIVPRONOMEN,
                                        'text-indigo-700':
                                            wordClass === WORD_CLASSES.POSSESSIVPRONOMEN,
                                    }
                                )}
                                initial={{ y: 100 }}
                                animate={{ y: 0 }}
                                transition={animationTransitionConfig}
                            >
                                {wordRu}
                            </motion.p>
                        </div>
                    )}
                </CardContent>
            </Card>
            <GroqBotDrawer prompt={`${article} ${wordDe}${pluralEnding}`} level={result} />
        </div>
    )
}
