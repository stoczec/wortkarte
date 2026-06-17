'use client'

import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { useCardsStore } from '@/stores'
import { useRouter, useSearchParams } from 'next/navigation'
import { CARDS_CATEGORY } from '@/enums/enums'
import { categoryToSlug, parseCategory, parseLevel, patchQuery } from '@/lib/cards-url'
import { countForLevel } from '@/data/counts'

type CardsCategory = (typeof CARDS_CATEGORY)[keyof typeof CARDS_CATEGORY]

export const CardCategorySelect = () => {
    const favoriteCount = useCardsStore(state => state.favoriteCards.length)
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentCategory = parseCategory(searchParams.get('cat') ?? undefined)
    const levelCount = countForLevel(parseLevel(searchParams.get('level') ?? undefined))

    const handleCategoryChange = (value: CardsCategory) => {
        const seed =
            value === CARDS_CATEGORY.GEMISCHTEN ? String(Math.floor(Math.random() * 1e6)) : undefined
        router.push(
            '/page/1?' + patchQuery(searchParams.toString(), { cat: categoryToSlug(value), seed })
        )
    }

    return (
        <div className="w-full flex justify-start gap-2 px-1">
            <Select value={currentCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue>{currentCategory} Karten</SelectValue>
                </SelectTrigger>
                <SelectContent className="w-[240px]">
                    <SelectGroup>
                        <SelectItem value={CARDS_CATEGORY.ALLE} className="cursor-pointer">
                            <span className="mr-5">{CARDS_CATEGORY.ALLE}</span>
                            <Badge variant="default" className="bg-primary">
                                {levelCount} Stück
                            </Badge>
                        </SelectItem>
                        <SelectItem value={CARDS_CATEGORY.GEMISCHTEN} className="cursor-pointer">
                            <span className="mr-5">{CARDS_CATEGORY.GEMISCHTEN}</span>
                            <Badge variant="default" className="bg-primary">
                                {levelCount} Stück
                            </Badge>
                        </SelectItem>
                        <SelectItem value={CARDS_CATEGORY.FAVORITEN} className="cursor-pointer">
                            <span className="mr-5">{CARDS_CATEGORY.FAVORITEN}</span>
                            <Badge variant="default" className="bg-primary">
                                {favoriteCount} Stück
                            </Badge>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
