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
import { WORD_LEVELS } from '@/enums/enums'
import { useRouter, useSearchParams } from 'next/navigation'
import { CARD_COUNTS, TOTAL_CARDS } from '@/data/counts'
import { levelToSlug, parseLevel, patchQuery } from '@/lib/cards-url'
import { Badge } from '../ui/badge'

type WordLevel = (typeof WORD_LEVELS)[keyof typeof WORD_LEVELS]

export const WordLevelSelect = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentLevel = parseLevel(searchParams.get('level') ?? undefined)

    const handleWordLevelChange = (value: WordLevel) => {
        router.push('/page/1?' + patchQuery(searchParams.toString(), { level: levelToSlug(value) }))
    }

    const renderSelectItem = (level: WordLevel, totalCards: number) => (
        <SelectItem value={level} className="cursor-pointer">
            <span className="mr-10">{level}</span>
            <Badge variant="default" className="bg-primary">
                {totalCards} Stück
            </Badge>
        </SelectItem>
    )

    return (
        <div className="w-full flex justify-start gap-2 px-1">
            <Select value={currentLevel} onValueChange={handleWordLevelChange}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue>{currentLevel}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {renderSelectItem(WORD_LEVELS.ALL_LEVELS, TOTAL_CARDS)}
                        {renderSelectItem(WORD_LEVELS.A2B2, CARD_COUNTS[WORD_LEVELS.A2B2])}
                        {renderSelectItem(WORD_LEVELS.C1, CARD_COUNTS[WORD_LEVELS.C1])}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
