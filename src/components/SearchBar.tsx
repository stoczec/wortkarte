'use client'

import React from 'react'
import { X, Search } from 'lucide-react'
import { Input } from './ui/input'
import { useCardsStore } from '@/stores'
import { useRouter } from 'next/navigation'

export function SearchBar() {
    const { searchQuery, updateSearchQuery } = useCardsStore()
    const router = useRouter()

    const resetSearchAndNavigate = () => {
        updateSearchQuery('')
        router.replace('/page/1')
    }
    return (
        <div className="w-[250px] relative flex gap-2 py-3">
            <Input
                type="text"
                placeholder="Wort suchen"
                value={searchQuery}
                onChange={e => updateSearchQuery(e.target.value)}
                className="pl-6"
            />
            {searchQuery ? (
                <X
                    className="h-5 w-5 text-primary absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={resetSearchAndNavigate}
                />
            ) : (
                <Search className="h-[14px] w-[14px] text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
            )}
        </div>
    )
}
