'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Separator } from '@radix-ui/react-separator'
import { Card, CardContent } from './ui/card'
import { IWordCardProperties } from '@/interfaces/interfaces'
import { cn } from '@/lib/utils'
import { WordClasses } from '@/enums/enums'
import { useFavoriteCardsStore } from '@/stores'
import { Heart } from 'lucide-react'
import { URL_IMAGES } from '@/constans/constans'
import ImageWithLoading from './ImageWithLoading'

const animationTransitionConfig = {
	duration: 1,
	type: 'tween',
}

export const WordCard = ({ data }: IWordCardProperties) => {
	const [isFlipped, setIsFlipped] = useState(false)

	// Подписываемся на изменения конкретной карточки
	const isFavorite = useFavoriteCardsStore(state =>
		state.favoriteCards.some(card => card.id === data.id)
	)

	const addFavoriteCard = useFavoriteCardsStore(state => state.addFavoriteCard)
	const removeFavoriteCard = useFavoriteCardsStore(
		state => state.removeFavoriteCard
	)

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

	return (
		<Card
			className="relative aspect-[9/16] w-[320px] p-0 rounded-xl shadow-lg shadow-zinc-900 transform transition-transform "
			onClick={handleFlipCard}
		>
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
			<ImageWithLoading
				src={`${URL_IMAGES}${fileKeyUploadthing}`}
				alt={wordDe}
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
