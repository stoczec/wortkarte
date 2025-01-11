import { EnumWORDCLASSES } from '@/enums/enums'
import { clsx, type ClassValue } from 'clsx'
import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export const getWordClassColor = (
    wordClass: (typeof EnumWORDCLASSES)[keyof typeof EnumWORDCLASSES]
) => {
    switch (wordClass) {
        case EnumWORDCLASSES.MASCULIN:
            return 'text-blue-500'
        case EnumWORDCLASSES.FEMININ:
            return 'text-red-500'
        case EnumWORDCLASSES.NEUTRAL:
            return 'text-green-500'
        case EnumWORDCLASSES.PLURAL:
            return 'text-yellow-500'
        case EnumWORDCLASSES.VERB:
            return 'text-orange-500'
        case EnumWORDCLASSES.ADJEKTIV:
            return 'text-purple-500'
        case EnumWORDCLASSES.ADVERB:
            return 'text-pink-500'
        case EnumWORDCLASSES.PRÄPOSITION:
            return 'text-gray-500'
        case EnumWORDCLASSES.KONJUNKTION:
            return 'text-amber-800'
        case EnumWORDCLASSES.PARTIKEL:
            return 'text-teal-500'
        case EnumWORDCLASSES.NUMERALE:
            return 'text-indigo-600'
        case EnumWORDCLASSES.PRONOMEN:
            return 'text-lime-500'
        case EnumWORDCLASSES.INTERJEKTION:
            return 'text-indigo-500'
        case EnumWORDCLASSES.ARTIKEL:
            return 'text-slate-700'
        case EnumWORDCLASSES.PHRASEN:
            return 'text-teal-700'
        case EnumWORDCLASSES.SATZADVERBIEN:
            return 'text-cyan-600'
        case EnumWORDCLASSES.AUXILIARVERB:
            return 'text-gray-800'
        case EnumWORDCLASSES.MODALVERB:
            return 'text-orange-700'
        case EnumWORDCLASSES.REFLEXIVPRONOMEN:
            return 'text-rose-500'
        case EnumWORDCLASSES.DEMONSTRATIVPRONOMEN:
            return 'text-yellow-600'
        case EnumWORDCLASSES.RELATIVPRONOMEN:
            return 'text-teal-600'
        case EnumWORDCLASSES.INTERROGATIVPRONOMEN:
            return 'text-blue-600'
        case EnumWORDCLASSES.POSSESSIVPRONOMEN:
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
            : length < 20
            ? 'text-3xl'
            : length < 24
            ? 'text-2xl'
            : 'text-xl'
    }, [word])

    return size
}
