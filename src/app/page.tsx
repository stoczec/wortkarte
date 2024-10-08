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
import { MaxWidthWrapper } from '@/components/MaxWidthWrapper'

export default function Home() {
	return (
		<div>
			<section>
				<MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-32 lg:pb-52">
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
				</MaxWidthWrapper>
			</section>
		</div>
	)
}
