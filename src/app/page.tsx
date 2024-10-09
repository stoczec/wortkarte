'use client'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

import { data } from '@/data/data'
import { CardWord, MaxWidthWrapper } from '@/components'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Home() {
	const [searchQuery, setSearchQuery] = useState('')

	// Фильтрация данных на основе поискового запроса
	const filteredData = data.filter(
		card =>
			card.wordDe.toLowerCase().includes(searchQuery.toLowerCase()) ||
			card.wordRu.toLowerCase().includes(searchQuery.toLowerCase())
	)
	return (
		<div className="flex flex-col items-center justify-center flex-grow flex-shrink-0 basis-auto">
			<section>
				<div className="flex gap-2 py-3">
					<Input
						type="text"
						placeholder="Search"
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
					/>
					<Button onClick={() => setSearchQuery('')}>Clear</Button>
				</div>
				<MaxWidthWrapper className="flex py-3 sm:py-6 lg:py-6">
					<Carousel
						opts={{
							align: 'start',
						}}
						orientation="vertical"
						className="w-full p-2"
					>
						<CarouselContent className="-mt-1 items-center h-[576px]">
							{filteredData.map(card => (
								<CarouselItem key={card.id} className="pt-1">
									<CardWord data={card} />
								</CarouselItem>
							))}
						</CarouselContent>
						{/* <CarouselPrevious />
						<CarouselNext /> */}
					</Carousel>
				</MaxWidthWrapper>
			</section>
		</div>
	)
}
