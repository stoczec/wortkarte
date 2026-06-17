'use client'

import React, { useEffect, useState } from 'react'
import { ILanguageCard } from '@/interfaces/interfaces'
import { MaxWidthWrapper, WordCard } from '.'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from './ui/carousel'

export function WordCarousel({ data }: { data: ILanguageCard[] }) {
    const [api, setApi] = useState<CarouselApi>()

    useEffect(() => {
        if (!api) {
            console.log('[wk-debug-embla] api not ready')
            return
        }
        console.log(
            `[wk-debug-embla] ${JSON.stringify({
                cards: data.length,
                slides: api.slideNodes().length,
                snaps: api.scrollSnapList().length,
                canNext: api.canScrollNext(),
                canPrev: api.canScrollPrev(),
            })}`
        )
    }, [api, data])

    return (
        <MaxWidthWrapper className="flex">
            <Carousel
                setApi={setApi}
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
