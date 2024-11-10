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
import { useAllCardsStore } from '@/stores'
import { useRouter } from 'next/navigation'

export const ItemsPerPageSelect = () => {
    const setItemsPerPage = useAllCardsStore(state => state.setItemsPerPage)
    const itemsPerPage = useAllCardsStore(state => state.itemsPerPage)
    const router = useRouter()

    const handleSelectChange = (value: string) => {
        setItemsPerPage(Number(value))
        const currentPath = window.location.pathname.split('/')
        currentPath[currentPath.length - 1] = '1'

        router.replace(currentPath.join('/'))
    }
    return (
        <div className="w-full flex justify-start gap-2 px-1">
            <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[240px]">
                    <SelectValue placeholder="Anzahl der Karten per Seite" />
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
