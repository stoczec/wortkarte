import { EnumWORDClASSES } from '@/enums/enums'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
export const getWordClassColor = (wordClass: EnumWORDClASSES) => {
    switch (wordClass) {
        case EnumWORDClASSES.MASCULIN:
            return 'text-blue-500'
        case EnumWORDClASSES.FEMININ:
            return 'text-red-500'
        case EnumWORDClASSES.NEUTRAL:
            return 'text-green-500'
        case EnumWORDClASSES.PLURAL:
            return 'text-yellow-500'
        case EnumWORDClASSES.VERB:
            return 'text-orange-500'
        case EnumWORDClASSES.ADJEKTIV:
            return 'text-purple-500'
        case EnumWORDClASSES.ADVERB:
            return 'text-pink-500'
        case EnumWORDClASSES.PRÄPOSITION:
            return 'text-gray-500'
        case EnumWORDClASSES.KONJUNKTION:
            return 'text-amber-950'
        case EnumWORDClASSES.PARTIKEL:
            return 'text-teal-500'
        default:
            return ''
    }
}
