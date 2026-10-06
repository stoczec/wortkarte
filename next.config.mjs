/** @type {import('next').NextConfig} */
const nextConfig = {
    // Keep `next dev` from writing its agent rules into CLAUDE.md.
    agentRules: false,
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'utfs.io',
            },
        ],
    },
    async headers() {
        return [
            {
                // /page/[page] reads searchParams -> dynamic render, no-store by default.
                // Output derives only from static card data, so let the CDN cache it.
                source: '/page/:page*',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, s-maxage=86400, stale-while-revalidate=604800',
                    },
                ],
            },
        ]
    },
}

export default nextConfig
