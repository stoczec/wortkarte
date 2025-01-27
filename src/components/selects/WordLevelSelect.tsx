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
import { A2_B2_data, C1_Beruf_data, C1_Sicher_data } from '@/data'
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
    const totalC1SicherCards = useMemo(() => calculateTotalCards(C1_Sicher_data), [C1_Sicher_data])
    const totalC1BerufCards = useMemo(() => calculateTotalCards(C1_Beruf_data), [C1_Beruf_data])
    const totalAllLevelsCards = useMemo(
        () => totalA2B2Cards + totalC1SicherCards + totalC1BerufCards,
        [totalA2B2Cards, totalC1SicherCards, totalC1BerufCards]
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
                        {renderSelectItem(WORD_LEVELS.ALLLEVELS, totalAllLevelsCards)}
                        {renderSelectItem(WORD_LEVELS.A2B2, totalA2B2Cards)}
                        {renderSelectItem(WORD_LEVELS.C1SICHER, totalC1SicherCards)}
                        {renderSelectItem(WORD_LEVELS.C1BERUF, totalC1BerufCards)}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
