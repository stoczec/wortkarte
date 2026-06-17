'use client'

import React, { useEffect, useState } from 'react'
import { X, Search } from 'lucide-react'
import { Input } from './ui/input'
import { useRouter, useSearchParams } from 'next/navigation'
import { patchQuery } from '@/lib/cards-url'

export function SearchBar() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [value, setValue] = useState(searchParams.get('q') ?? '')

    useEffect(() => {
        if (value === (searchParams.get('q') ?? '')) return
        const id = setTimeout(() => {
            const next = patchQuery(searchParams.toString(), { q: value || undefined })
            router.replace(`/page/1${next ? `?${next}` : ''}`)
        }, 300)
        return () => clearTimeout(id)
    }, [value, searchParams, router])

    return (
        <div className="w-[210px] relative flex gap-2 py-1">
            <Input
                type="text"
                placeholder="Wort suchen"
                value={value}
                onChange={e => setValue(e.target.value)}
                className="pl-6"
            />
            {value ? (
                <X
                    className="h-5 w-5 text-destructive font-bold absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => setValue('')}
                />
            ) : (
                <Search className="h-[14px] w-[14px] text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
            )}
        </div>
    )
}
