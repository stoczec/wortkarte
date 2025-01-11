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
