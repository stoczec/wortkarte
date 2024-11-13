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
import { useAllCardsStore } from '@/stores'
import { Badge } from './ui/badge'
import { useRouter } from 'next/navigation'
import { ILanguageCard } from '@/interfaces/interfaces'
import { A2_B2_data, C1_Beruf_data, C1_Sicher_data } from '@/data'

export const WordLevelSelect = () => {
    const { selectedLevel, setSelectedLevel } = useAllCardsStore()

    const router = useRouter()

    const handleSelectChange = (value: (typeof EnumWORDLEVELS)[keyof typeof EnumWORDLEVELS]) => {
        setSelectedLevel(value)
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

    return (
        <div className="w-full flex justify-start gap-2 px-1">
            <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[240px] flex  items-center">
                    <SelectValue placeholder="Wähle das Niveau der Wörter" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value={EnumWORDLEVELS.A2B2} className="cursor-pointer">
                            <span className="mr-10">A2-B2</span>
                            <Badge variant="default" className="bg-primary">
                                {totalA2B2Cards} Stück
                            </Badge>
                        </SelectItem>
                        <SelectItem value={EnumWORDLEVELS.C1SICHER} className="cursor-pointer">
                            <span className="mr-10">C1 Sicher!</span>{' '}
                            <Badge variant="default" className="bg-primary">
                                {totalC1SicherCards} Stück
                            </Badge>
                        </SelectItem>
                        <SelectItem value={EnumWORDLEVELS.C1BERUF} className="cursor-pointer">
                            <span className="mr-10">C1 Beruf</span>{' '}
                            <Badge variant="default" className="bg-primary">
                                {totalC1BerufCards} Stück
                            </Badge>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Badge variant="default" className="bg-primary">
                {selectedLevel}
            </Badge>
        </div>
    )
}
