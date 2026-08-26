import { C1_data, A2_B2_data } from '@/data'
import { WORD_LEVELS } from '@/enums/enums'
import { ILanguageCard } from '@/interfaces/interfaces'

type WordLevel = (typeof WORD_LEVELS)[keyof typeof WORD_LEVELS]

export function getDataByLevel(level: WordLevel): ILanguageCard[] {
    switch (level) {
        case WORD_LEVELS.C1:
            return C1_data
        case WORD_LEVELS.A2B2:
            return A2_B2_data
        case WORD_LEVELS.ALL_LEVELS:
            return [...C1_data, ...A2_B2_data]
        default:
            return []
    }
}

export function filterCards(cards: ILanguageCard[], query: string): ILanguageCard[] {
    const q = query.toLowerCase()
    return cards.filter(
        card => card.wordDe.toLowerCase().includes(q) || card.wordRu.toLowerCase().includes(q)
    )
}
