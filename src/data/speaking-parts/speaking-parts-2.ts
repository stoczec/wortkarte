import { ConversationPart, SpeakingPartType, SpeakingPhraseWithPart } from '@/types'

export const speaking_parts_2: SpeakingPhraseWithPart = {
    INTRODUCTION: [
        {
            id: `1-${SpeakingPartType.PART_2}-${ConversationPart.INTRODUCTION}`,
            conversationPart: ConversationPart.INTRODUCTION,
            phraseDe: 'Hallo, wie läuft’s bei dir momentan?',
            phraseRu: 'Привет, как у тебя сейчас дела?',
            fileKeyUploadthing: 'NjvjgtzcBn0o4elT3XWshw2jW79DKL5rglcYJOS0yTxv6CVe',
        },
        {
            id: `2-${SpeakingPartType.PART_2}-${ConversationPart.INTRODUCTION}`,
            conversationPart: ConversationPart.INTRODUCTION,
            phraseDe: '',
            phraseRu: '',
            fileKeyUploadthing: '',
        },
    ],
    ASK_OPINION: [
        {
            id: `1-${SpeakingPartType.PART_2}-${ConversationPart.ASK_OPINION}`,
            conversationPart: ConversationPart.ASK_OPINION,
            phraseDe: '',
            phraseRu: '',
            fileKeyUploadthing: '',
        },
    ],
    AGREE: [
        {
            id: `1-${SpeakingPartType.PART_2}-${ConversationPart.AGREE}`,
            conversationPart: ConversationPart.AGREE,
            phraseDe: '',
            phraseRu: '',
            fileKeyUploadthing: '',
        },
    ],
    CONCLUSION: [
        {
            id: `1-${SpeakingPartType.PART_2}-${ConversationPart.CONCLUSION}`,
            conversationPart: ConversationPart.CONCLUSION,
            phraseDe: '',
            phraseRu: '',
            fileKeyUploadthing: '',
        },
    ],
}
