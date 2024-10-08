'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardFooter } from './ui/card'
import Image from 'next/image'
import { LanguageCard } from '@/interfaces/interfaces'
import { cn, getWordClassColor } from '@/lib/utils'
import { WordClasses } from '@/enums/enums'
import { motion } from 'framer-motion'
import { Separator } from '@radix-ui/react-separator'
import { AspectRatio } from './ui/aspect-ratio'

interface CardWordProperties {
	data: LanguageCard
}

const animationTransitionConfig = {
	duration: 1,
	type: 'tween',
}

export const CardWord = ({ data }: CardWordProperties) => {
	const [isFlipped, setIsFlipped] = useState(false)

	const { id, wordClass, wordDe, exampleDe, exampleRu, wordRu } = data

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
	return (
		<Card
			className="w-[320px] h-[635px] p-0 relative rounded-xl "
			onClick={handleFlipCard}
		>
			{/* <AspectRatio ratio={9 / 16}> */}
			<Image
				src={`/images/${id}.png`}
				alt={wordDe}
				width={320}
				height={635}
				className=" rounded-xl"
				priority={true}
			/>
			{/* </AspectRatio> */}
			<CardContent className="p-1 absolute bottom-0 z-10 flex justify-center items-center w-full rounded-b-xl overflow-hidden before:bg-white/10 shadow-small  backdrop-brightness-50">
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
								'text-amber-950': wordClass === WordClasses.KONJUNKTION,
								'text-teal-500': wordClass === WordClasses.PARTIKEL,
							}
						)}
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						transition={animationTransitionConfig}
					>
						{wordDe}
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
									'text-amber-950': wordClass === WordClasses.KONJUNKTION,
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
