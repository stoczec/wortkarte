import { CustomPagination, WordCarousel } from '@/components'
import { FavoritesView } from '@/components/FavoritesView'
import { CARDS_CATEGORY } from '@/enums/enums'
import { filterCards, getDataByLevel } from '@/lib/cards'
import { paginate, seededShuffle } from '@/lib/cards-pagination'
import { parseCategory, parseLevel, parseSize } from '@/lib/cards-url'

interface PaginatedPageProps {
    params: { page: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export default function PaginatedPage({ params, searchParams }: PaginatedPageProps) {
    const requestedPage = Number(params.page) || 1
    const level = parseLevel(searchParams.level)
    const category = parseCategory(searchParams.cat)
    const size = parseSize(searchParams.size)
    const query = typeof searchParams.q === 'string' ? searchParams.q : ''
    const seed = Number(searchParams.seed) || 0

    if (category === CARDS_CATEGORY.FAVORITEN) {
        return <FavoritesView page={requestedPage} size={size} />
    }

    let cards = getDataByLevel(level)
    if (query) cards = filterCards(cards, query)
    else if (category === CARDS_CATEGORY.GEMISCHTEN) cards = seededShuffle(cards, seed)

    const { slice, totalPages, page } = paginate(cards, requestedPage, size)

    return (
        <div className="h-full flex flex-col justify-between items-center flex-grow">
            <section className="flex flex-col items-center justify-center gap-2 px-4 py-2">
                {query && (
                    <p className="text-center text-sm py-1">
                        {cards.length === 0
                            ? 'Nichts gefunden!'
                            : `${cards.length} ${cards.length === 1 ? 'Wort' : 'Wörter'} gefunden`}
                    </p>
                )}
                <WordCarousel data={slice} />
                <CustomPagination currentPage={page} totalPages={totalPages} pageName="page" />
            </section>
        </div>
    )
}
