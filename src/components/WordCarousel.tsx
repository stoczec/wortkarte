import React from 'react'
import { ILanguageCard } from '@/interfaces/interfaces'
import { MaxWidthWrapper, WordCard } from '.'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'

export function WordCarousel({ data }: { data: ILanguageCard[] }) {
    return (
        <MaxWidthWrapper className="flex">
            <Carousel
                opts={{
                    align: 'start',
                }}
                orientation="vertical"
                className="w-full"
            >
                <CarouselContent className="-mt-1 items-center h-[616px] ">
                    {data.map(card => (
                        <CarouselItem key={card.id} className="pt-1 rounded-b-xl">
                            <WordCard data={card} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </MaxWidthWrapper>
    )
}
