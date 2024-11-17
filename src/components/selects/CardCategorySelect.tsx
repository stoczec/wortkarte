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
import { EnumCARDSCATEGORY } from '@/enums/enums'

export const CardCategorySelect = () => {
    const displayedCards = useCardsStore(state => state.displayedCards)
    const favoriteCards = useCardsStore(state => state.favoriteCards)
    const { selectedCardCategory, setSelectedCardCategory } = useCardsStore()

    const router = useRouter()
    const [selectedValue, setSelectedValue] =
        useState<(typeof EnumCARDSCATEGORY)[keyof typeof EnumCARDSCATEGORY]>(selectedCardCategory)

    const handleSelectChange = (
        value: (typeof EnumCARDSCATEGORY)[keyof typeof EnumCARDSCATEGORY]
    ) => {
        setSelectedCardCategory(value)
        setSelectedValue(value)
        router.replace('/page/1')
    }
    return (
        <div className="w-full flex justify-start gap-2 px-1">
            <Select value={selectedValue} onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue>{selectedValue} Karten</SelectValue>
                </SelectTrigger>
                <SelectContent className="w-[240px]">
                    <SelectGroup>
                        <SelectItem value={EnumCARDSCATEGORY.ALLE} className="cursor-pointer">
                            <span className="mr-5">Alle</span>
                            <Badge variant="default" className="bg-primary">
                                {displayedCards.length} Stück
                            </Badge>
                        </SelectItem>
                        <SelectItem value={EnumCARDSCATEGORY.GEMISCHTEN} className="cursor-pointer">
                            <span className="mr-5">Gemischten</span>
                            <Badge variant="default" className="bg-primary">
                                {displayedCards.length} Stück
                            </Badge>
                        </SelectItem>
                        <SelectItem value={EnumCARDSCATEGORY.FAVORITEN} className="cursor-pointer">
                            <span className="mr-5">Favoriten</span>
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
