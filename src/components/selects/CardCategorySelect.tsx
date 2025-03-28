'use client'

import React, { useState } from 'react'
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
import { useRouter } from 'next/navigation'
import { CARDS_CATEGORY } from '@/enums/enums'

export const CardCategorySelect = () => {
    const displayedCards = useCardsStore(state => state.displayedCards)
    const favoriteCards = useCardsStore(state => state.favoriteCards)
    const { selectedCardCategory, setSelectedCardCategory } = useCardsStore()

    const [selectedValue, setSelectedValue] =
        useState<(typeof CARDS_CATEGORY)[keyof typeof CARDS_CATEGORY]>(selectedCardCategory)
    const router = useRouter()

    const handleCategoryChange = (value: (typeof CARDS_CATEGORY)[keyof typeof CARDS_CATEGORY]) => {
        setSelectedCardCategory(value)
        setSelectedValue(value)
        router.replace('/page/1')
    }
    return (
        <div className="w-full flex justify-start gap-2 px-1">
            <Select value={selectedValue} onValueChange={handleCategoryChange}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue>{selectedValue} Karten</SelectValue>
                </SelectTrigger>
                <SelectContent className="w-[240px]">
                    <SelectGroup>
                        <SelectItem value={CARDS_CATEGORY.ALLE} className="cursor-pointer">
                            <span className="mr-5">{CARDS_CATEGORY.ALLE}</span>
                            <Badge variant="default" className="bg-primary">
                                {displayedCards.length} Stück
                            </Badge>
                        </SelectItem>
                        <SelectItem value={CARDS_CATEGORY.GEMISCHTEN} className="cursor-pointer">
                            <span className="mr-5">{CARDS_CATEGORY.GEMISCHTEN}</span>
                            <Badge variant="default" className="bg-primary">
                                {displayedCards.length} Stück
                            </Badge>
                        </SelectItem>
                        <SelectItem value={CARDS_CATEGORY.FAVORITEN} className="cursor-pointer">
                            <span className="mr-5">{CARDS_CATEGORY.FAVORITEN}</span>
                            <Badge variant="default" className="bg-primary">
                                {favoriteCards.length} Stück
                            </Badge>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
