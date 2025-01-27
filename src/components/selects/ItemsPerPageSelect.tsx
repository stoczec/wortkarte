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
import { useCardsStore } from '@/stores'
import { useRouter } from 'next/navigation'
import { ITEMS_PER_PAGE_OPTIONS } from '@/constans/constans'

export const ItemsPerPageSelect = () => {
    const updateItemsPerPage = useCardsStore(state => state.setItemsPerPage)
    const itemsPerPageCount = useCardsStore(state => state.itemsPerPage)
    const router = useRouter()

    const handleItemsPerPageChange = (value: `${number}`) => {
        updateItemsPerPage(Number(value))
        router.replace('/page/1')
    }

    return (
        <div className="w-full flex justify-start gap-2 px-1">
            <Select value={String(itemsPerPageCount)} onValueChange={handleItemsPerPageChange}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue>{itemsPerPageCount} Stück</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {ITEMS_PER_PAGE_OPTIONS.map(option => (
                            <SelectItem
                                key={option}
                                value={String(option)}
                                className="cursor-pointer"
                            >
                                {option} Stück
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
