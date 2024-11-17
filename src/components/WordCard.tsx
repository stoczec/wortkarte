'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Separator } from '@radix-ui/react-separator'
import { Card, CardContent } from './ui/card'
import { IWordCardProperties } from '@/interfaces/interfaces'
import { cn } from '@/lib/utils'
import { EnumWORDCLASSES } from '@/enums/enums'
import { useCardsStore } from '@/stores'
import { Heart } from 'lucide-react'
import ImageWithLoading from './ImageWithLoading'
import { URL_IMAGES } from '@/constans/constans'
import { Badge } from './ui/badge'

const animationTransitionConfig = {
    duration: 1,
    type: 'tween',
}

export const WordCard = ({ data }: IWordCardProperties) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [imageUrl, setImageUrl] = useState<string | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    const cardRef = useRef<HTMLDivElement>(null)

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

    const getFontSizeClass = (word: string) => {
        if (word.length < 15) {
            return 'text-4xl'
        } else if (word.length <= 20) {
            return 'text-3xl'
        } else {
            return 'text-2xl'
        }
    }

    const handleFavoriteToggle = () => {
        if (isFavorite) {
            removeFavoriteCard(id)
        } else {
            addFavoriteCard(data)
        }
    }

    // Функция для получения изображения
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { rootMargin: '0px' } // Загружать изображения за 100px до попадания в видимость
        )

        if (cardRef.current) {
            observer.observe(cardRef.current)
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current)
            }
        }
    }, [])

    useEffect(() => {
        if (isVisible && fileKeyUploadthing) {
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
        }
    }, [isVisible, fileKeyUploadthing])
    const regex = /^\d{1,}-/
    const result = id.replace(regex, '')
    return (
        <Card
            ref={cardRef}
            className="relative aspect-[9/16] w-[320px] p-0 rounded-xl shadow-lg shadow-zinc-900 transform transition-transform "
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
                    'rounded-b-xl overflow-hidden before:bg-white/10 shadow-small backdrop-brightness-50'
                )}
            >
                {!isFlipped ? (
                    <motion.p
                        className={cn(
                            getFontSizeClass(wordDe),
                            'font-bold text-balance text-center',
                            {
                                'text-blue-500': wordClass === EnumWORDCLASSES.MASCULIN,
                                'text-red-500': wordClass === EnumWORDCLASSES.FEMININ,
                                'text-green-500': wordClass === EnumWORDCLASSES.NEUTRAL,
                                'text-yellow-500': wordClass === EnumWORDCLASSES.PLURAL,
                                'text-orange-500': wordClass === EnumWORDCLASSES.VERB,
                                'text-purple-500': wordClass === EnumWORDCLASSES.ADJEKTIV,
                                'text-pink-500': wordClass === EnumWORDCLASSES.ADVERB,
                                'text-gray-500': wordClass === EnumWORDCLASSES.PRÄPOSITION,
                                'text-amber-800': wordClass === EnumWORDCLASSES.KONJUNKTION,
                                'text-teal-500': wordClass === EnumWORDCLASSES.PARTIKEL,
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
                                'font-bold text-balance text-center',
                                {
                                    'text-blue-500': wordClass === EnumWORDCLASSES.MASCULIN,
                                    'text-red-500': wordClass === EnumWORDCLASSES.FEMININ,
                                    'text-green-500': wordClass === EnumWORDCLASSES.NEUTRAL,
                                    'text-yellow-500': wordClass === EnumWORDCLASSES.PLURAL,
                                    'text-orange-500': wordClass === EnumWORDCLASSES.VERB,
                                    'text-purple-500': wordClass === EnumWORDCLASSES.ADJEKTIV,
                                    'text-pink-500': wordClass === EnumWORDCLASSES.ADVERB,
                                    'text-gray-500': wordClass === EnumWORDCLASSES.PRÄPOSITION,
                                    'text-amber-800': wordClass === EnumWORDCLASSES.KONJUNKTION,
                                    'text-teal-500': wordClass === EnumWORDCLASSES.PARTIKEL,
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
    )
}
