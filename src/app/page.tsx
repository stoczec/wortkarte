import { CardWord } from '@/components/cardWord'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'

import { data } from '@/data/data'
import { ModeToggle } from '@/components/modeToggle'

export default function Home() {
	return (
		<div
			className="flex justify-center items-center mt-32 p-1
		"
		>
			<ModeToggle />
			<Carousel
				opts={{
					align: 'start',
				}}
				orientation="vertical"
				className="w-full max-w-xs"
			>
				<CarouselContent className="-mt-1 h-[304px] items-center ">
					{data.map(card => (
						<CarouselItem key={card.id} className="pt-1">
							<CardWord data={card} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}
