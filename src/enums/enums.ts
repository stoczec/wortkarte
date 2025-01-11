type EnumWordClassesType =
    | 'maskulin' // мужской род
    | 'feminin' // женский род
    | 'neutral' // средний род
    | 'plural' // множественное число
    | 'verb' // глагол
    | 'adjektiv' // прилагательное
    | 'adverb' // наречие
    | 'präposition' // предлог
    | 'konjunktion' // союз
    | 'partikel' // частица
    | 'numerale' // числительное
    | 'pronomen' // местоимение
    | 'interjektion' // междометие
    | 'artikel' // артикль
    | 'phrasen' // фразы
    | 'satzadverbien' // предложные наречия
    | 'auxiliarverb' // вспомогательный глагол
    | 'modalverb' // модальный глагол
    | 'reflexivpronomen' // рефлексивное местоимение
    | 'demonstrativpronomen' // указательное местоимение
    | 'relativpronomen' // относительное местоимение
    | 'interrogativpronomen' // вопросительное местоимение
    | 'possessivpronomen' // притяжательное местоимение

export const EnumWORDCLASSES = {
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
    NUMERALE: 'numerale' as EnumWordClassesType,
    PRONOMEN: 'pronomen' as EnumWordClassesType,
    INTERJEKTION: 'interjektion' as EnumWordClassesType,
    ARTIKEL: 'artikel' as EnumWordClassesType,
    PHRASEN: 'phrasen' as EnumWordClassesType,
    SATZADVERBIEN: 'satzadverbien' as EnumWordClassesType,
    AUXILIARVERB: 'auxiliarverb' as EnumWordClassesType,
    MODALVERB: 'modalverb' as EnumWordClassesType,
    REFLEXIVPRONOMEN: 'reflexivpronomen' as EnumWordClassesType,
    DEMONSTRATIVPRONOMEN: 'demonstrativpronomen' as EnumWordClassesType,
    RELATIVPRONOMEN: 'relativpronomen' as EnumWordClassesType,
    INTERROGATIVPRONOMEN: 'interrogativpronomen' as EnumWordClassesType,
    POSSESSIVPRONOMEN: 'possessivpronomen' as EnumWordClassesType,
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
