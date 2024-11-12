type EnumWordClassesType =
    | 'maskulin'
    | 'feminin'
    | 'neutral'
    | 'plural'
    | 'verb'
    | 'adjektiv'
    | 'adverb'
    | 'präposition'
    | 'konjunktion'
    | 'partikel'

export const EnumWORDClASSES = {
    MASCULIN: 'maskulin' as EnumWordClassesType,
    FEMININ: 'feminin' as EnumWordClassesType,
    NEUTRAL: 'neutral' as EnumWordClassesType,
    PLURAL: 'plural' as EnumWordClassesType,
    VERB: 'verb' as EnumWordClassesType,
    ADJEKTIV: 'adjektiv' as EnumWordClassesType,
    ADVERB: 'adverb' as EnumWordClassesType,
    PRÄPOSITION: 'präposition' as EnumWordClassesType,
    KONJUNKTION: 'konjunktion' as EnumWordClassesType,
    PARTIKEL: 'partikel' as EnumWordClassesType,
}

type EnumWordLevelsType = 'A2-B2' | 'C1 Sicher!' | 'C1 Beruf'

export const EnumWORDLEVELS = {
    A2B2: 'A2-B2' as EnumWordLevelsType,
    C1SICHER: 'C1 Sicher!' as EnumWordLevelsType,
    C1BERUF: 'C1 Beruf' as EnumWordLevelsType,
}
