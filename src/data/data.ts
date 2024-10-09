import { WordClasses } from '@/enums/enums'
import { LanguageCard } from '@/interfaces/interfaces'

export const data: LanguageCard[] = [
	{
		id: 1,
		article: 'die',
		pluralEnding: ', -n',
		wordDe: 'Manie',
		wordRu: 'Мания',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Er hat starke Manie',
		exampleRu: 'У него сильная мания',
	},
	{
		id: 2,
		article: 'die',
		pluralEnding: ', -e',
		wordDe: 'Sucht',
		wordRu: 'Зависимость',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Er leidet an einer Sucht.',
		exampleRu: 'Он страдает от зависимости.',
	},
	{
		id: 3,
		article: 'die',
		pluralEnding: ', -en',
		wordDe: 'Albernheit',
		wordRu: 'Глупость',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Ihre Albernheit hat alle zum Lachen gebracht.',
		exampleRu: 'Её глупость рассмешила всех.',
	},
	{
		id: 4,
		article: 'die',
		pluralEnding: ', -en',
		wordDe: 'Beschleunigung',
		wordRu: 'Ускорение',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Die Beschleunigung des Autos war beeindruckend.',
		exampleRu: 'Ускорение автомобиля было впечатляющим.',
	},
	{
		id: 5,
		article: 'die',
		pluralEnding: ', -n',
		wordDe: 'Glosse',
		wordRu: 'Ироничный комментарий',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Die Glosse in der Zeitung war sehr treffend.',
		exampleRu: 'Ироничный комментарий в газете был очень метким.',
	},
	{
		id: 6,
		article: 'der',
		pluralEnding: ', -en',
		wordDe: 'Held',
		wordRu: 'Герой',
		wordClass: WordClasses.MASCULIN,
		exampleDe: 'Der Held der Geschichte rettete die Stadt.',
		exampleRu: 'Герой истории спас город.',
	},
	{
		id: 7,
		article: 'die',
		pluralEnding: ' (Sg.)',
		wordDe: 'Nahrungsaufnahme',
		wordRu: 'Приём пищи',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Die Nahrungsaufnahme sollte regelmäßig erfolgen.',
		exampleRu: 'Приём пищи должен происходить регулярно.',
	},
	{
		id: 8,
		article: 'die',
		pluralEnding: ', -en',
		wordDe: 'Rastlosigkeit',
		wordRu: 'Беспокойство',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Seine Rastlosigkeit führte zu Schlaflosigkeit.',
		exampleRu: 'Его беспокойство привело к бессоннице.',
	},
	{
		id: 9,
		article: 'die',
		pluralEnding: ', -en',
		wordDe: 'Reduktion',
		wordRu: 'Сокращение',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Die Reduktion der Kosten war notwendig.',
		exampleRu: 'Сокращение затрат было необходимо.',
	},
	{
		id: 10,
		article: 'die',
		pluralEnding: ', -n',
		wordDe: 'Suchmaschine',
		wordRu: 'Поисковая система',
		wordClass: WordClasses.FEMININ,
		exampleDe: 'Die Suchmaschine hilft uns, Informationen zu finden.',
		exampleRu: 'Поисковая система помогает нам находить информацию.',
	},
	{
		id: 11,
		article: '',
		pluralEnding: '',
		wordDe: 'beeinträchtigen',
		wordRu: 'Влиять (негативно)',
		wordClass: WordClasses.VERB,
		exampleDe: 'Lärm kann die Konzentration beeinträchtigen.',
		exampleRu: 'Шум может негативно влиять на концентрацию.',
	},
	{
		id: 12,
		article: '',
		pluralEnding: '',
		wordDe: 'kraulen',
		wordRu: 'Плавать кролем',
		wordClass: WordClasses.VERB,
		exampleDe: 'Er kann sehr schnell kraulen.',
		exampleRu: 'Он может плавать кролем очень быстро.',
		multiple: [
			{
				id: 13,
				article: '',
				pluralEnding: '',
				wordDe: 'kraulen',
				wordRu: 'Гладить (животное)',
				wordClass: WordClasses.VERB,
				exampleDe: 'Die Kinder kraulen den Hund.',
				exampleRu: 'Дети гладят собаку.',
			},
		],
	},
]
