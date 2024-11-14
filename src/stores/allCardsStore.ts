import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IAllCardsStore, ILanguageCard } from '@/interfaces/interfaces'
import { C1_Sicher_data, C1_Beruf_data, A2_B2_data } from '@/data'
import { EnumWORDLEVELS } from '@/enums/enums'

// Функция для перемешивания массива
function shuffleArray(array: ILanguageCard[]) {
    const shuffled = array.slice()
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

// Функция для выбора данных по уровню
function getDataByLevel(
    level: (typeof EnumWORDLEVELS)[keyof typeof EnumWORDLEVELS]
): ILanguageCard[] {
    switch (level) {
        case EnumWORDLEVELS.C1SICHER:
            return C1_Sicher_data
        case EnumWORDLEVELS.C1BERUF:
            return C1_Beruf_data
        case EnumWORDLEVELS.A2B2:
            return A2_B2_data
        default:
            return []
    }
}

export const useAllCardsStore = create<IAllCardsStore>()(
    persist(
        set => ({
            allWords: [
                ...C1_Sicher_data.flatMap(card => [card, ...(card.multiple || [])]),
                ...C1_Beruf_data.flatMap(card => [card, ...(card.multiple || [])]),
                ...A2_B2_data.flatMap(card => [card, ...(card.multiple || [])]),
            ],
            cards: C1_Beruf_data.flatMap(card => [card, ...(card.multiple || [])]),
            shuffledCards: shuffleArray(C1_Beruf_data).flatMap(card => [
                card,
                ...(card.multiple || []),
            ]),
            loading: true,
            itemsPerPage: 5,
            selectedLevel: EnumWORDLEVELS.C1BERUF,

            setLoading: isLoading => set({ loading: isLoading }),
            setItemsPerPage: items => set({ itemsPerPage: items }),

            setSelectedLevel: (level: (typeof EnumWORDLEVELS)[keyof typeof EnumWORDLEVELS]) => {
                const data = getDataByLevel(level)
                set({
                    selectedLevel: level,
                    cards: data.flatMap(card => [card, ...(card.multiple || [])]),
                    shuffledCards: shuffleArray(data).flatMap(card => [
                        card,
                        ...(card.multiple || []),
                    ]),
                })
            },
        }),
        {
            name: 'all-cards-storage',
            partialize: state => ({
                itemsPerPage: state.itemsPerPage,
                cards: state.cards,
                selectedLevel: state.selectedLevel,
                shuffledCards: state.shuffledCards,
            }),
        }
    )
)
