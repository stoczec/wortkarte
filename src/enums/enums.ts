export type WordClass =
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

export const WORD_CLASSES = {
    MASKULIN: 'Maskulin' as WordClass,
    FEMININ: 'Feminin' as WordClass,
    NEUTRAL: 'Neutral' as WordClass,
    PLURAL: 'Plural' as WordClass,
    VERB: 'Verb' as WordClass,
    ADJEKTIV: 'Adjektiv' as WordClass,
    ADVERB: 'Adverb' as WordClass,
    PRÄPOSITION: 'Präposition' as WordClass,
    KONJUNKTION: 'Konjunktion' as WordClass,
    PARTIKEL: 'Partikel' as WordClass,
    NUMERALE: 'Numerale' as WordClass,
    PRONOMEN: 'Pronomen' as WordClass,
    INTERJEKTION: 'Interjektion' as WordClass,
    ARTIKEL: 'Artikel' as WordClass,
    PHRASEN: 'Phrasen' as WordClass,
    SATZADVERBIEN: 'Satzadverbien' as WordClass,
    AUXILIARVERB: 'Auxiliarverb' as WordClass,
    MODALVERB: 'Modalverb' as WordClass,
    REFLEXIVPRONOMEN: 'Reflexivpronomen' as WordClass,
    DEMONSTRATIVPRONOMEN: 'Demonstrativpronomen' as WordClass,
    RELATIVPRONOMEN: 'Relativpronomen' as WordClass,
    INTERROGATIVPRONOMEN: 'Interrogativpronomen' as WordClass,
    POSSESSIVPRONOMEN: 'Possessivpronomen' as WordClass,
}

// Определение типа через union
export type WordLevel = 'A2-B2' | 'C1' | 'Alle Sprachebenen'

// Определение констант
export const WORD_LEVELS = {
    A2B2: 'A2-B2',
    // C1: 'C1',
    C1: 'C1',
    ALL_LEVELS: 'Alle Sprachebenen',
} as const satisfies Record<string, WordLevel>

type CardsCategory = 'Alle' | 'Gemischten' | 'Favoriten'

export const CARDS_CATEGORY = {
    ALLE: 'Alle' as CardsCategory,
    GEMISCHTEN: 'Gemischten' as CardsCategory,
    FAVORITEN: 'Favoriten' as CardsCategory,
}

export type Topic =
    | 'Thema 1'
    | 'Thema 2'
    | 'Thema 3'
    | 'Thema 4'
    | 'Thema 5'
    | 'Thema 6'
    | 'Thema 7'
    | 'Thema 8'
    | 'Thema 9'
    | 'Thema 10'

export const TOPICS = {
    THEMA1: 'Thema 1' as Topic,
    THEMA2: 'Thema 2' as Topic,
    THEMA3: 'Thema 3' as Topic,
    THEMA4: 'Thema 4' as Topic,
    THEMA5: 'Thema 5' as Topic,
    THEMA6: 'Thema 6' as Topic,
    THEMA7: 'Thema 7' as Topic,
    THEMA8: 'Thema 8' as Topic,
    THEMA9: 'Thema 9' as Topic,
    THEMA10: 'Thema 10' as Topic,
}
