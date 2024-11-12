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

export const WordLevelSelect = () => {
    const { selectedLevel, setSelectedLevel } = useAllCardsStore()

    const router = useRouter()

    const handleSelectChange = (value: EnumWORDLEVELS) => {
        setSelectedLevel(value)
        router.push('/page/1')
    }

    return (
        <div className="w-full flex justify-start gap-2 px-1">
            <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue placeholder="Wähle das Niveau der Wörter" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value={EnumWORDLEVELS.A2B2}>A2-B2</SelectItem>
                        <SelectItem value={EnumWORDLEVELS.C1SICHER}>C1 Sicher!</SelectItem>
                        <SelectItem value={EnumWORDLEVELS.C1BERUF}>C1 Beruf</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Badge variant="default" className="bg-primary">
                {selectedLevel}
            </Badge>
        </div>
    )
}
