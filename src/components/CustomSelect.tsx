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

export const CustomSelect = () => {
    const setItemsPerPage = useAllCardsStore(state => state.setItemsPerPage)
    const itemsPerPage = useAllCardsStore(state => state.itemsPerPage)

    const handleSelectChange = (value: string) => {
        setItemsPerPage(Number(value))
    }
    return (
        <div className="w-full flex justify-start gap-2 px-2">
            <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[260px]">
                    <SelectValue placeholder="Die Anzahl der angezeigten Karten" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="15">15</SelectItem>
                        <SelectItem value="20">20</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Badge variant="default" className="bg-primary">
                {itemsPerPage} Stück
            </Badge>
        </div>
    )
}
