'use client'

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Loader, PaginatedList } from '@/components'
import { getDataByLevel, useCardsStore } from '@/stores'
import { EnumCARDSCATEGORY } from '@/enums/enums'
import { ILanguageCard } from '@/interfaces/interfaces'
import { useRouter } from 'next/navigation'
import { ToastContainer, cssTransition, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function PaginatedPage() {
    const pathname = usePathname()
    const pageParam = pathname.split('/').pop() || '1'
    const currentPage = Number(pageParam)
    const router = useRouter()
    const bounce = cssTransition({
        enter: 'animate__animated animate__bounceIn',
        exit: 'animate__animated animate__bounceOut',
    })
    const notify = () =>
        toast.success(' Neue Wörter wurden hinzugefügt!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: 'colored',
            transition: bounce,
        })

    const {
        displayedCards,
        favoriteCards,
        shuffledCards,
        selectedCardCategory,
        searchQuery,
        filteredCards,
        selectedLevel,
        resetStore,
    } = useCardsStore()
    const [loading, setLoading] = useState(true)

    function getDataByCategory(
        selectedCardCategory: (typeof EnumCARDSCATEGORY)[keyof typeof EnumCARDSCATEGORY]
    ): ILanguageCard[] {
        switch (selectedCardCategory) {
            case EnumCARDSCATEGORY.ALLE:
                return displayedCards
            case EnumCARDSCATEGORY.GEMISCHTEN:
                return shuffledCards
            case EnumCARDSCATEGORY.FAVORITEN:
                return favoriteCards

            default:
                return []
        }
    }
    const checkDataConsistency = () => {
        const expectedLength = getDataByLevel(selectedLevel).flatMap(card => [
            card,
            ...(card.multiple || []),
        ]).length
        return expectedLength !== displayedCards.length
    }
    useEffect(() => {
        if (displayedCards) {
            setLoading(false)
        }

        if (checkDataConsistency()) {
            resetStore()
            router.push('/page/1')
            notify()
        }
    }, [displayedCards, selectedLevel])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Loader />
            </div>
        )
    }

    return (
        <div className="h-full flex flex-col justify-between items-center flex-grow">
            <PaginatedList
                displayedCards={
                    searchQuery ? filteredCards : getDataByCategory(selectedCardCategory)
                }
                pageName="page"
                currentPage={currentPage}
            />
            <ToastContainer />
        </div>
    )
}
