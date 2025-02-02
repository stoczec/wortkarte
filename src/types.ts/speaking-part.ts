export enum SpeakingPartType {
    PART_1 = 'Sprechen Teil 1',
    PART_2 = 'Sprechen Teil 2',
    PART_3 = 'Sprechen Teil 3',
}

export enum ConversationPart {
    INTRODUCTION = 'Einleitung',
    ASK_OPINION = 'Nach der Meinung fragen',
    AGREE = 'Zustimmen',
    CONCLUSION = 'Abschluss',
}

export interface SpeakingPhrase {
    id: string | number
    conversationPart: ConversationPart
    phraseDe: string
    phraseRu: string
    fileKeyUploadthing: string
}

export interface SpeakingPhraseWithPart {
    INTRODUCTION: SpeakingPhrase[]
    ASK_OPINION: SpeakingPhrase[]
    AGREE: SpeakingPhrase[]
    CONCLUSION: SpeakingPhrase[]
}
