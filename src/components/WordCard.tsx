'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Separator } from '@radix-ui/react-separator'
import { Card, CardContent } from './ui/card'
import { IWordCardProperties } from '@/interfaces/interfaces'
import { cn } from '@/lib/utils'
import { WordClasses } from '@/enums/enums'
import { useCardsStore } from '@/stores'
import { Heart } from 'lucide-react'

const animationTransitionConfig = {
	duration: 1,
	type: 'tween',
}

export const WordCard = ({ data }: IWordCardProperties) => {
	const [isFlipped, setIsFlipped] = useState(false)

	// Подписываемся на изменения конкретной карточки
	const favorite = useCardsStore(
		state => state.cards.find(card => card.id === data.id)?.favorite
	)

	const toggleFavorite = useCardsStore(state => state.toggleFavorite)

	const {
		id,
		article,
		pluralEnding,
		wordDe,
		wordRu,
		wordClass,
		exampleDe,
		exampleRu,
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

	const handleToggleFavorite = () => {
		toggleFavorite(id)
	}

	return (
		<Card
			className="relative aspect-[9/16] w-[320px] p-0 rounded-xl"
			onClick={handleFlipCard}
		>
			<div
				onClick={e => {
					e.stopPropagation()
					handleToggleFavorite()
				}}
				className="cursor-pointer"
			>
				<Heart
					className={cn('absolute top-2 right-2 z-10', {
						'fill-primary': favorite,
						'text-primary': !favorite,
					})}
				/>
			</div>
			<Image
				src={`/images/${id}.png`}
				alt={wordDe}
				fill
				sizes="320px"
				className="rounded-xl"
				priority={id === 1 ? true : false}
			/>
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
								'text-blue-500': wordClass === WordClasses.MASCULIN,
								'text-red-500': wordClass === WordClasses.FEMININ,
								'text-green-500': wordClass === WordClasses.NEUTRAL,
								'text-yellow-500': wordClass === WordClasses.PLURAL,
								'text-orange-500': wordClass === WordClasses.VERB,
								'text-purple-500': wordClass === WordClasses.ADJEKTIV,
								'text-pink-500': wordClass === WordClasses.ADVERB,
								'text-gray-500': wordClass === WordClasses.PRÄPOSITION,
								'text-amber-800': wordClass === WordClasses.KONJUNKTION,
								'text-teal-500': wordClass === WordClasses.PARTIKEL,
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
							className={cn(
								'text-xl font-bold text-balance text-center text-gray-300'
							)}
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
							className={cn(
								'text-xl font-bold text-balance text-center text-gray-300'
							)}
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
									'text-blue-500': wordClass === WordClasses.MASCULIN,
									'text-red-500': wordClass === WordClasses.FEMININ,
									'text-green-500': wordClass === WordClasses.NEUTRAL,
									'text-yellow-500': wordClass === WordClasses.PLURAL,
									'text-orange-500': wordClass === WordClasses.VERB,
									'text-purple-500': wordClass === WordClasses.ADJEKTIV,
									'text-pink-500': wordClass === WordClasses.ADVERB,
									'text-gray-500': wordClass === WordClasses.PRÄPOSITION,
									'text-amber-800': wordClass === WordClasses.KONJUNKTION,
									'text-teal-500': wordClass === WordClasses.PARTIKEL,
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
