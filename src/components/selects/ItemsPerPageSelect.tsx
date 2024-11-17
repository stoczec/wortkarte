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
import { Badge } from '@/components/ui/badge'
import { useCardsStore } from '@/stores'
import { useRouter } from 'next/navigation'

export const ItemsPerPageSelect = () => {
    const setItemsPerPage = useCardsStore(state => state.setItemsPerPage)
    const itemsPerPage = useCardsStore(state => state.itemsPerPage)

    const router = useRouter()

    const handleSelectChange = (value: string) => {
        setItemsPerPage(Number(value))
        const currentPath = window.location.pathname.split('/')
        currentPath[currentPath.length - 1] = '1'

        router.replace(currentPath.join('/'))
    }
    return (
        <div className="w-full flex justify-start gap-2 px-1">
            <Select value={String(itemsPerPage)} onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue>{itemsPerPage} Stück</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="5" className="cursor-pointer">
                            5 Stück
                        </SelectItem>
                        <SelectItem value="10" className="cursor-pointer">
                            10 Stück
                        </SelectItem>
                        <SelectItem value="15" className="cursor-pointer">
                            15 Stück
                        </SelectItem>
                        <SelectItem value="20" className="cursor-pointer">
                            20 Stück
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}
