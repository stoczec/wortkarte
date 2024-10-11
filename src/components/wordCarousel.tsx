import { ILanguageCard } from '@/interfaces/interfaces'
import { WordCard } from '@/components'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

export function WordCarousel({ data }: { data: ILanguageCard[] }) {
	return (
		<MaxWidthWrapper className="flex py-3 sm:py-6 lg:py-6">
			<Carousel
				opts={{
					align: 'start',
				}}
				orientation="vertical"
				className="w-full"
			>
				<CarouselContent className="-mt-1 items-center h-[576px]">
					{data.map(card => (
						<CarouselItem key={card.id} className="pt-1">
							<WordCard data={card} />
						</CarouselItem>
					))}
				</CarouselContent>
				{/* <CarouselPrevious />
                <CarouselNext /> */}
			</Carousel>
		</MaxWidthWrapper>
	)
}
