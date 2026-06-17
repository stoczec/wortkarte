'use client'

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
                    {data.map((card, index) => (
                        <CarouselItem key={card.id} className="pt-1 rounded-b-xl">
                            <WordCard data={card} priority={index === 0} eager={index > 0 && index < 3} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </MaxWidthWrapper>
    )
}
