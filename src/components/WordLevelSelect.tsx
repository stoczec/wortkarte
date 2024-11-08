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
import { useAllCardsStore } from '@/stores'
import { WordLevels } from '@/enums/enums'

export const WordLevelSelect = () => {
    const { setCardsByLevel } = useAllCardsStore()
    const handleSelectChange = (value: WordLevels) => {
        setCardsByLevel(value)
    }

    return (
        <div className="w-full flex justify-start gap-2 px-1">
            <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue placeholder="Wähle das Niveau der Wörter" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value={WordLevels.A2B2}>A2-B2</SelectItem>
                        <SelectItem value={WordLevels.C1SICHER}>C1 Sicher!</SelectItem>
                        <SelectItem value={WordLevels.C1BERUF}>C1 Beruf</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            {/* <Badge variant="default" className="bg-primary"></Badge> */}
        </div>
    )
}
