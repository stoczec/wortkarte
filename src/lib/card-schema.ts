import { z } from 'zod'
import { WORD_CLASSES, WORD_LEVELS } from '@/enums/enums'

const NOUN_CLASSES: string[] = [
    WORD_CLASSES.MASKULIN,
    WORD_CLASSES.FEMININ,
    WORD_CLASSES.NEUTRAL,
    WORD_CLASSES.PLURAL,
]

function articleMatchesClass(article: string, wordClass: string): boolean {
    if (!NOUN_CLASSES.includes(wordClass)) return true
    if (article === 'der') return wordClass === WORD_CLASSES.MASKULIN
    if (article === 'das') return wordClass === WORD_CLASSES.NEUTRAL
    if (article === 'die')
        return wordClass === WORD_CLASSES.FEMININ || wordClass === WORD_CLASSES.PLURAL
    return true
}

export const cardSchema = z
    .object({
        id: z.string().min(1),
        article: z.string(),
        pluralEnding: z.string(),
        wordDe: z.string().min(1),
        wordRu: z.string().min(1),
        wordClass: z.nativeEnum(WORD_CLASSES),
        exampleDe: z.string().min(1),
        exampleRu: z.string().min(1),
        fileKeyUploadthing: z.string().min(1),
        sourceBook: z.string().optional(),
        level: z.nativeEnum(WORD_LEVELS).optional(),
        addedAt: z.string().optional(),
    })
    .refine(card => articleMatchesClass(card.article, card.wordClass), {
        message: 'article does not match wordClass gender',
        path: ['wordClass'],
    })

export type CardSchema = z.infer<typeof cardSchema>
