import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IAllCardsStore, ILanguageCard } from '@/interfaces/interfaces'
import { C1_Sicher_data, C1_Beruf_data, A2_B2_data } from '@/data'
import { WordLevels } from '@/enums/enums'

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
function getDataByLevel(level: WordLevels): ILanguageCard[] {
    switch (level) {
        case WordLevels.C1SICHER:
            return C1_Sicher_data
        case WordLevels.C1BERUF:
            return C1_Beruf_data
        case WordLevels.A2B2:
            return A2_B2_data
        default:
            return []
    }
}

export const useAllCardsStore = create<IAllCardsStore>()(
    persist(
        set => ({
            cards: C1_Sicher_data.flatMap(card => [card, ...(card.multiple || [])]),
            shuffledCards: shuffleArray(C1_Sicher_data).flatMap(card => [
                card,
                ...(card.multiple || []),
            ]),
            loading: true,
            itemsPerPage: 5,
            selectedLevel: WordLevels.C1SICHER, // Добавляем selectedLevel в хранилище

            setLoading: isLoading => set({ loading: isLoading }),
            setItemsPerPage: items => set({ itemsPerPage: items }),

            // Метод для установки уровня и обновления карт
            setSelectedLevel: (level: WordLevels) => {
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
                selectedLevel: state.selectedLevel, // Сохраняем selectedLevel в локальном хранилище
            }),
        }
    )
)
