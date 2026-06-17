import { CARDS_CATEGORY, WORD_LEVELS } from '@/enums/enums'
import { ITEMS_PER_PAGE_OPTIONS } from '@/constans/constans'

type WordLevel = (typeof WORD_LEVELS)[keyof typeof WORD_LEVELS]
type CardsCategory = (typeof CARDS_CATEGORY)[keyof typeof CARDS_CATEGORY]

const LEVEL_SLUGS: Record<WordLevel, string> = {
    [WORD_LEVELS.ALL_LEVELS]: 'all',
    [WORD_LEVELS.A2B2]: 'a2-b2',
    [WORD_LEVELS.C1]: 'c1',
}
const CATEGORY_SLUGS = {
    [CARDS_CATEGORY.ALLE]: 'alle',
    [CARDS_CATEGORY.GEMISCHTEN]: 'gemischten',
    [CARDS_CATEGORY.FAVORITEN]: 'favoriten',
} as Record<CardsCategory, string>

const DEFAULT_SIZE = ITEMS_PER_PAGE_OPTIONS[0]

function reverse<T extends string>(map: Record<T, string>): Record<string, T> {
    return Object.fromEntries(Object.entries(map).map(([k, v]) => [v, k])) as Record<string, T>
}
const SLUG_TO_LEVEL = reverse(LEVEL_SLUGS)
const SLUG_TO_CATEGORY = reverse(CATEGORY_SLUGS)

export const levelToSlug = (level: WordLevel) => LEVEL_SLUGS[level]
export const categoryToSlug = (cat: CardsCategory) => CATEGORY_SLUGS[cat]

export function parseLevel(value: string | string[] | undefined): WordLevel {
    return (typeof value === 'string' && SLUG_TO_LEVEL[value]) || WORD_LEVELS.ALL_LEVELS
}
export function parseCategory(value: string | string[] | undefined): CardsCategory {
    return (typeof value === 'string' && SLUG_TO_CATEGORY[value]) || CARDS_CATEGORY.ALLE
}
export function parseSize(value: string | string[] | undefined): number {
    const n = typeof value === 'string' ? Number(value) : NaN
    return (ITEMS_PER_PAGE_OPTIONS as readonly number[]).includes(n) ? n : DEFAULT_SIZE
}

export function patchQuery(currentQs: string, patch: Record<string, string | undefined>): string {
    const params = new URLSearchParams(currentQs)
    for (const [key, value] of Object.entries(patch)) {
        if (value === undefined || value === '') params.delete(key)
        else params.set(key, value)
    }
    return params.toString()
}
