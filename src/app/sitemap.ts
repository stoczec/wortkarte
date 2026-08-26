import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/constans/constans'
import { ITEMS_PER_PAGE_OPTIONS } from '@/constans/constans'
import { TOTAL_CARDS } from '@/data/counts'

const DEFAULT_SIZE = ITEMS_PER_PAGE_OPTIONS[0]
const TOTAL_PAGES = Math.max(1, Math.ceil(TOTAL_CARDS / DEFAULT_SIZE))

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = ['', '/about', '/contacts', '/datenschutz'].map(path => ({
        url: `${SITE_URL}${path}`,
        changeFrequency: 'monthly' as const,
        priority: path === '' ? 1 : 0.5,
    }))

    const cardPages = Array.from({ length: TOTAL_PAGES }, (_, i) => ({
        url: `${SITE_URL}/page/${i + 1}`,
        changeFrequency: 'monthly' as const,
        priority: i === 0 ? 0.8 : 0.6,
    }))

    return [...staticRoutes, ...cardPages]
}
