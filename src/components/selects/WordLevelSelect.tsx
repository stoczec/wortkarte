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
    const { selectedLevel, setSelectedLevel } = useCardsStore()

    const [selectedValue, setSelectedValue] =
        useState<(typeof EnumWORDLEVELS)[keyof typeof EnumWORDLEVELS]>(selectedLevel)
    const router = useRouter()

    const handleSelectChange = (value: (typeof EnumWORDLEVELS)[keyof typeof EnumWORDLEVELS]) => {
        setSelectedLevel(value)
        setSelectedValue(value)
        router.push('/page/1')
    }

    function countTotalCards(cards: ILanguageCard[]): number {
        let count = 0

        for (const card of cards) {
            count++

            if (card.multiple) {
                count += countTotalCards(card.multiple)
            }
        }

        return count
    }

    const totalA2B2Cards = countTotalCards(A2_B2_data)
    const totalC1SicherCards = countTotalCards(C1_Sicher_data)
    const totalC1BerufCards = countTotalCards(C1_Beruf_data)
    const totalAllLevels = totalA2B2Cards + totalC1SicherCards + totalC1BerufCards

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
                                {totalAllLevels} Stück
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
