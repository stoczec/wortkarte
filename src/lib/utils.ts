import { WORD_CLASSES } from '@/enums/enums'
import { clsx, type ClassValue } from 'clsx'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export const getWordClassColor = (wordClass: (typeof WORD_CLASSES)[keyof typeof WORD_CLASSES]) => {
    switch (wordClass) {
        case WORD_CLASSES.MASKULIN:
            return 'text-blue-500'
        case WORD_CLASSES.FEMININ:
            return 'text-red-500'
        case WORD_CLASSES.NEUTRAL:
            return 'text-green-500'
        case WORD_CLASSES.PLURAL:
            return 'text-yellow-500'
        case WORD_CLASSES.VERB:
            return 'text-orange-500'
        case WORD_CLASSES.ADJEKTIV:
            return 'text-purple-500'
        case WORD_CLASSES.ADVERB:
            return 'text-pink-500'
        case WORD_CLASSES.PRÄPOSITION:
            return 'text-gray-500'
        case WORD_CLASSES.KONJUNKTION:
            return 'text-amber-800'
        case WORD_CLASSES.PARTIKEL:
            return 'text-teal-500'
        case WORD_CLASSES.NUMERALE:
            return 'text-indigo-600'
        case WORD_CLASSES.PRONOMEN:
            return 'text-lime-500'
        case WORD_CLASSES.INTERJEKTION:
            return 'text-indigo-500'
        case WORD_CLASSES.ARTIKEL:
            return 'text-slate-700'
        case WORD_CLASSES.PHRASEN:
            return 'text-teal-700'
        case WORD_CLASSES.SATZADVERBIEN:
            return 'text-cyan-600'
        case WORD_CLASSES.AUXILIARVERB:
            return 'text-gray-800'
        case WORD_CLASSES.MODALVERB:
            return 'text-orange-700'
        case WORD_CLASSES.REFLEXIVPRONOMEN:
            return 'text-rose-500'
        case WORD_CLASSES.DEMONSTRATIVPRONOMEN:
            return 'text-yellow-600'
        case WORD_CLASSES.RELATIVPRONOMEN:
            return 'text-teal-600'
        case WORD_CLASSES.INTERROGATIVPRONOMEN:
            return 'text-blue-600'
        case WORD_CLASSES.POSSESSIVPRONOMEN:
            return 'text-indigo-700'
        default:
            return ''
    }
}

export const getFontSizeClass = (word: string) => {
    const size = useMemo(() => {
        const length = word.length
        return length < 15
            ? 'text-4xl'
            : length < 19
            ? 'text-3xl'
            : length < 24
            ? 'text-2xl'
            : 'text-xl'
    }, [word])

    return size
}
