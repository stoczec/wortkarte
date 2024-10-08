import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

import { data } from '@/data/data'
import { CardWord, MaxWidthWrapper } from '@/components'

export default function Home() {
	return (
		<div>
			<section>
				<MaxWidthWrapper className="flex py-5 sm:pb-16 lg:py-20 items-center justify-center">
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
						{/* <CarouselPrevious />
						<CarouselNext /> */}
					</Carousel>
				</MaxWidthWrapper>
			</section>
		</div>
	)
}
