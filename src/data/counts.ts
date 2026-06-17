import { WORD_LEVELS } from '@/enums/enums'

export const CARD_COUNTS = {
    [WORD_LEVELS.C1]: 679,
    [WORD_LEVELS.A2B2]: 60,
} as const

export const TOTAL_CARDS = CARD_COUNTS[WORD_LEVELS.C1] + CARD_COUNTS[WORD_LEVELS.A2B2]

type WordLevel = (typeof WORD_LEVELS)[keyof typeof WORD_LEVELS]

export function countForLevel(level: WordLevel): number {
    return level === WORD_LEVELS.ALL_LEVELS ? TOTAL_CARDS : CARD_COUNTS[level]
}
