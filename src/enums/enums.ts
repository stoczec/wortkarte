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

export type WordLevel = 'A2-B2' | 'C1 Sicher!' | 'C1 Aspekte Beruf' | 'Alle Sprachebenen'

export const WORD_LEVELS = {
    A2B2: 'A2-B2' as WordLevel,
    C1SICHER: 'C1 Sicher!' as WordLevel,
    C1BERUF: 'C1 Aspekte Beruf' as WordLevel,
    ALLLEVELS: 'Alle Sprachebenen' as WordLevel,
}

// Основные уровни
export type MainLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Alle Sprachebenen'

export const MAIN_LEVELS = {
    A1: 'A1' as MainLevel,
    A2: 'A2' as MainLevel,
    B1: 'B1' as MainLevel,
    B2: 'B2' as MainLevel,
    C1: 'C1' as MainLevel,
    C2: 'C2' as MainLevel,
    ALLLEVELS: 'Alle Sprachebenen' as MainLevel,
}

// Вложенные уровни
export type SubLevel = 'C1 Sicher!' | 'C1 Beruf'

export const SUB_LEVELS = {
    C1_SICHER: 'C1 Sicher!' as SubLevel,
    C1_BERUF: 'C1 Beruf' as SubLevel,
}

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

export interface SubLevelWithTopics {
    subLevel: SubLevel
    topics?: Topic[] // Темы для конкретного вложенного уровня
}

export interface LevelStructure {
    mainLevel: MainLevel
    subLevels?: SubLevelWithTopics[] // Вложенные уровни с их темами (опционально)
    topics?: Topic[] // Темы для основного уровня (если нет вложенных уровней)
}

export const LEVEL_STRUCTURE: LevelStructure[] = [
    {
        mainLevel: MAIN_LEVELS.A1,
    },
    {
        mainLevel: MAIN_LEVELS.A2,
    },
    {
        mainLevel: MAIN_LEVELS.B1,
    },
    {
        mainLevel: MAIN_LEVELS.B2,
    },
    {
        mainLevel: MAIN_LEVELS.C1,
        subLevels: [
            {
                subLevel: SUB_LEVELS.C1_SICHER,
            },
            {
                subLevel: SUB_LEVELS.C1_BERUF,
                topics: [
                    TOPICS.THEMA1,
                    TOPICS.THEMA2,
                    TOPICS.THEMA3,
                    TOPICS.THEMA4,
                    TOPICS.THEMA5,
                    TOPICS.THEMA6,
                    TOPICS.THEMA7,
                    TOPICS.THEMA8,
                    TOPICS.THEMA9,
                    TOPICS.THEMA10,
                ], // Темы для C1 Beruf
            },
        ],
    },
    {
        mainLevel: MAIN_LEVELS.C2,
        topics: [], // C2 может не иметь тем
    },
]

const LEVELS = {
    A1: {
        A1_MAIN: 'A1',
    },
    A2: {
        A2_MAIN: 'A2',
    },
    B1: {
        B1_MAIN: 'B1',
    },
    B2: {
        B2_MAIN: 'B2',
        B2_EINFACH_BESSER_500: 'B2 Einfach besser 500',
    },
    C1: {
        C1_MAIN: 'C1',
        C1_ASPEKTE_BERUF: 'C1 Aspekte Beruf',
        C1_FOKUS: 'C1 Fokus Deutsch',
        C1_SICHER: 'C1 Sicher!',
    },
    C2: {
        C2_MAIN: 'C2',
    },
}
