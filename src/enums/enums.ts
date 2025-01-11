type EnumWordClassesType =
    | 'Maskulin' // мужской род
    | 'Feminin' // женский род
    | 'Neutral' // средний род
    | 'Plural' // множественное число
    | 'Verb' // глагол
    | 'Adjektiv' // прилагательное
    | 'Adverb' // наречие
    | 'Präposition' // предлог
    | 'Konjunktion' // союз
    | 'Partikel' // частица
    | 'Numerale' // числительное
    | 'Pronomen' // местоимение
    | 'Interjektion' // междометие
    | 'Artikel' // артикль
    | 'Phrasen' // фразы
    | 'Satzadverbien' // предложные наречия
    | 'Auxiliarverb' // вспомогательный глагол
    | 'Modalverb' // модальный глагол
    | 'Reflexivpronomen' // рефлексивное местоимение
    | 'Demonstrativpronomen' // указательное местоимение
    | 'Relativpronomen' // относительное местоимение
    | 'Interrogativpronomen' // вопросительное местоимение
    | 'Possessivpronomen' // притяжательное местоимение

export const EnumWORDCLASSES = {
    MASCULIN: 'Maskulin' as EnumWordClassesType,
    FEMININ: 'Feminin' as EnumWordClassesType,
    NEUTRAL: 'Neutral' as EnumWordClassesType,
    PLURAL: 'Plural' as EnumWordClassesType,
    VERB: 'Verb' as EnumWordClassesType,
    ADJEKTIV: 'Adjektiv' as EnumWordClassesType,
    ADVERB: 'Adverb' as EnumWordClassesType,
    PRÄPOSITION: 'Präposition' as EnumWordClassesType,
    KONJUNKTION: 'Konjunktion' as EnumWordClassesType,
    PARTIKEL: 'Partikel' as EnumWordClassesType,
    NUMERALE: 'Numerale' as EnumWordClassesType,
    PRONOMEN: 'Pronomen' as EnumWordClassesType,
    INTERJEKTION: 'Interjektion' as EnumWordClassesType,
    ARTIKEL: 'Artikel' as EnumWordClassesType,
    PHRASEN: 'Phrasen' as EnumWordClassesType,
    SATZADVERBIEN: 'Satzadverbien' as EnumWordClassesType,
    AUXILIARVERB: 'Auxiliarverb' as EnumWordClassesType,
    MODALVERB: 'Modalverb' as EnumWordClassesType,
    REFLEXIVPRONOMEN: 'Reflexivpronomen' as EnumWordClassesType,
    DEMONSTRATIVPRONOMEN: 'Demonstrativpronomen' as EnumWordClassesType,
    RELATIVPRONOMEN: 'Relativpronomen' as EnumWordClassesType,
    INTERROGATIVPRONOMEN: 'Interrogativpronomen' as EnumWordClassesType,
    POSSESSIVPRONOMEN: 'Possessivpronomen' as EnumWordClassesType,
}

type EnumWordLevelsType = 'A2-B2' | 'C1 Sicher!' | 'C1 Beruf' | 'Alle Sprachebenen'

export const EnumWORDLEVELS = {
    A2B2: 'A2-B2' as EnumWordLevelsType,
    C1SICHER: 'C1 Sicher!' as EnumWordLevelsType,
    C1BERUF: 'C1 Beruf' as EnumWordLevelsType,
    ALLLEVELS: 'Alle Sprachebenen' as EnumWordLevelsType,
}

type EnumCardsCategoryType = 'Alle' | 'Gemischten' | 'Favoriten'

export const EnumCARDSCATEGORY = {
    ALLE: 'Alle' as EnumCardsCategoryType,
    GEMISCHTEN: 'Gemischten' as EnumCardsCategoryType,
    FAVORITEN: 'Favoriten' as EnumCardsCategoryType,
}
