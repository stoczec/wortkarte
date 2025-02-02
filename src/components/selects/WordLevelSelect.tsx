'use client'

import React, { useMemo, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { WORD_LEVELS } from '@/enums/enums'
import { useCardsStore } from '@/stores'
import { useRouter } from 'next/navigation'
import { ILanguageCard } from '@/interfaces/interfaces'
import { A2_B2_data, C1_data } from '@/data'
import { Badge } from '../ui/badge'

export const WordLevelSelect = () => {
    const { selectedWordLevel, setSelectedWordLevel } = useCardsStore()

    const [selectedValue, setSelectedValue] =
        useState<(typeof WORD_LEVELS)[keyof typeof WORD_LEVELS]>(selectedWordLevel)
    const router = useRouter()

    const handleWordLevelChange = (value: (typeof WORD_LEVELS)[keyof typeof WORD_LEVELS]) => {
        setSelectedWordLevel(value)
        setSelectedValue(value)
        router.push('/page/1')
    }

    const calculateTotalCards = (cards: ILanguageCard[]): number => {
        return cards.reduce((count, card) => {
            return count + 1 + (card.multiple ? calculateTotalCards(card.multiple) : 0)
        }, 0)
    }

    const totalA2B2Cards = useMemo(() => calculateTotalCards(A2_B2_data), [A2_B2_data])
    // const totalC1Cards = useMemo(() => calculateTotalCards(C1_data), [C1_data])
    const totalC1Cards = useMemo(() => calculateTotalCards(C1_data), [C1_data])
    const totalAllLevelsCards = useMemo(
        () => totalA2B2Cards + totalC1Cards,
        [totalA2B2Cards, totalC1Cards]
    )

    const renderSelectItem = (
        level: (typeof WORD_LEVELS)[keyof typeof WORD_LEVELS],
        totalCards: number
    ) => (
        <SelectItem value={level} className="cursor-pointer">
            <span className="mr-10">{level}</span>
            <Badge variant="default" className="bg-primary">
                {totalCards} Stück
            </Badge>
        </SelectItem>
    )

    return (
        <div className="w-full flex justify-start gap-2 px-1">
            <Select value={selectedValue} onValueChange={handleWordLevelChange}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue>{selectedValue}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {renderSelectItem(WORD_LEVELS.ALL_LEVELS, totalAllLevelsCards)}
                        {renderSelectItem(WORD_LEVELS.A2B2, totalA2B2Cards)}
                        {/* {renderSelectItem(WORD_LEVELS.C1, totalC1Cards)} */}
                        {renderSelectItem(WORD_LEVELS.C1, totalC1Cards)}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
