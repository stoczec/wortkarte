export interface IPaginationResult<T> {
    slice: T[]
    totalPages: number
    page: number
}

export function paginate<T>(items: T[], page: number, size: number): IPaginationResult<T> {
    const totalPages = Math.max(1, Math.ceil(items.length / size))
    const clampedPage = Math.min(Math.max(page, 1), totalPages)
    const start = (clampedPage - 1) * size
    return {
        slice: items.slice(start, start + size),
        totalPages,
        page: clampedPage,
    }
}

function mulberry32(seed: number) {
    let state = seed | 0
    return () => {
        state = (state + 0x6d2b79f5) | 0
        let t = Math.imul(state ^ (state >>> 15), 1 | state)
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

export function seededShuffle<T>(items: T[], seed: number): T[] {
    const result = items.slice()
    const rng = mulberry32(seed)
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1))
        ;[result[i], result[j]] = [result[j], result[i]]
    }
    return result
}
