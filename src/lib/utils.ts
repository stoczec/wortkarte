import { EnumWORDCLASSES } from '@/enums/enums'
import { clsx, type ClassValue } from 'clsx'
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
            return 'text-amber-950'
        case EnumWORDCLASSES.PARTIKEL:
            return 'text-teal-500'
        default:
            return ''
    }
}

export const getDateLabel = (updateDate: string) => {
    const today = new Date()
    const yesterday = new Date()
    yesterday.setDate(today.getDate() - 1)

    const updateDateObj = new Date(updateDate)
    console.log(updateDateObj.getDate())
    console.log(today.getDate())

    if (
        updateDateObj.getFullYear() === today.getFullYear() &&
        updateDateObj.getMonth() === today.getMonth() &&
        updateDateObj.getDate() === today.getDate()
    ) {
        return 'heute'
    } else if (
        updateDateObj.getFullYear() === yesterday.getFullYear() &&
        updateDateObj.getMonth() === yesterday.getMonth() &&
        updateDateObj.getDate() === yesterday.getDate()
    ) {
        return 'gestern'
    } else {
        return updateDate
    }
}
