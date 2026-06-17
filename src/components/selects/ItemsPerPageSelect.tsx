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
import { useRouter, useSearchParams } from 'next/navigation'
import { ITEMS_PER_PAGE_OPTIONS } from '@/constans/constans'
import { parseSize, patchQuery } from '@/lib/cards-url'

export const ItemsPerPageSelect = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const currentSize = parseSize(searchParams.get('size') ?? undefined)

    const handleItemsPerPageChange = (value: string) => {
        router.push('/page/1?' + patchQuery(searchParams.toString(), { size: value }))
    }

    return (
        <div className="w-full flex justify-start gap-2 px-1">
            <Select value={String(currentSize)} onValueChange={handleItemsPerPageChange}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue>{currentSize} Stück</SelectValue>
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
