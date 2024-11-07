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

export const WordLevelSelect = () => {
    const handleSelectChange = (value: string) => {}

    return (
        <div className="w-full flex justify-start gap-2 px-1">
            <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue placeholder="Wähle das Niveau der Wörter" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="5">A2-B2</SelectItem>
                        <SelectItem value="10">C1 Sicher!</SelectItem>
                        <SelectItem value="10">C1 Beruf</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            {/* <Badge variant="default" className="bg-primary"></Badge> */}
        </div>
    )
}
