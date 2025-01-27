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
import { EnumWORDLEVELS } from '@/enums/enums'
import { useCardsStore } from '@/stores'
import { useRouter } from 'next/navigation'
import { ILanguageCard } from '@/interfaces/interfaces'
import { A2_B2_data, C1_Beruf_data, C1_Sicher_data } from '@/data'
import { Badge } from '../ui/badge'

export const WordLevelSelect = () => {
    const { selectedWordLevel, setSelectedWordLevel } = useCardsStore()

    const [selectedValue, setSelectedValue] =
        useState<(typeof EnumWORDLEVELS)[keyof typeof EnumWORDLEVELS]>(selectedWordLevel)
    const router = useRouter()

    const handleSelectChange = (value: (typeof EnumWORDLEVELS)[keyof typeof EnumWORDLEVELS]) => {
        setSelectedWordLevel(value)
        setSelectedValue(value)
        router.push('/page/1')
    }

    // function countTotalCards(cards: ILanguageCard[]): number {
    //     let count = 0

    //     for (const card of cards) {
    //         count++

    //         if (card.multiple) {
    //             count += countTotalCards(card.multiple)
    //         }
    //     }

    //     return count
    // }

    function countTotalCards(cards: ILanguageCard[]): number {
        return cards.reduce((count, card) => {
            return count + 1 + (card.multiple ? countTotalCards(card.multiple) : 0)
        }, 0)
    }

    // const totalA2B2Cards = countTotalCards(A2_B2_data)
    // const totalC1SicherCards = countTotalCards(C1_Sicher_data)
    // const totalC1BerufCards = countTotalCards(C1_Beruf_data)
    // const totalAllLevels = totalA2B2Cards + totalC1SicherCards + totalC1BerufCards

    const totalA2B2Cards = React.useMemo(() => countTotalCards(A2_B2_data), [A2_B2_data])
    const totalC1SicherCards = React.useMemo(
        () => countTotalCards(C1_Sicher_data),
        [C1_Sicher_data]
    )
    const totalC1BerufCards = React.useMemo(() => countTotalCards(C1_Beruf_data), [C1_Beruf_data])
    const totalAllLevelsCards = React.useMemo(
        () => totalA2B2Cards + totalC1SicherCards + totalC1BerufCards,
        [totalA2B2Cards, totalC1SicherCards, totalC1BerufCards]
    )

    const renderSelectItem = (
        level: (typeof EnumWORDLEVELS)[keyof typeof EnumWORDLEVELS],
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
            <Select value={selectedValue} onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue>{selectedValue}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value={EnumWORDLEVELS.ALLLEVELS} className="cursor-pointer">
                            <span className="mr-10">{EnumWORDLEVELS.ALLLEVELS}</span>
                            <Badge variant="default" className="bg-primary">
                                {totalAllLevelsCards} Stück
                            </Badge>
                        </SelectItem>
                        <SelectItem value={EnumWORDLEVELS.A2B2} className="cursor-pointer">
                            <span className="mr-10">{EnumWORDLEVELS.A2B2}</span>
                            <Badge variant="default" className="bg-primary">
                                {totalA2B2Cards} Stück
                            </Badge>
                        </SelectItem>
                        <SelectItem value={EnumWORDLEVELS.C1SICHER} className="cursor-pointer">
                            <span className="mr-10">{EnumWORDLEVELS.C1SICHER}</span>{' '}
                            <Badge variant="default" className="bg-primary">
                                {totalC1SicherCards} Stück
                            </Badge>
                        </SelectItem>
                        <SelectItem value={EnumWORDLEVELS.C1BERUF} className="cursor-pointer">
                            <span className="mr-10">{EnumWORDLEVELS.C1BERUF}</span>{' '}
                            <Badge variant="default" className="bg-primary">
                                {totalC1BerufCards} Stück
                            </Badge>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
