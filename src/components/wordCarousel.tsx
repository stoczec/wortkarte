import { ILanguageCard } from '@/interfaces/interfaces'
import { CardWord } from './cardWord'
import { MaxWidthWrapper } from './maxWidthWrapper'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

export function WordCarousel({ data }: { data: ILanguageCard[] }) {
	return (
		<MaxWidthWrapper className="flex py-3 sm:py-6 lg:py-6">
			<Carousel
				opts={{
					align: 'start',
				}}
				orientation="vertical"
				className="w-full p-2"
			>
				<CarouselContent className="-mt-1 items-center h-[576px]">
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
	)
}
