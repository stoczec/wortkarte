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
                // Output = static card data + query; Vercel's function no-store beats config Cache-Control.
                // Documents only: a bare RSC request gets a 307 without Vary, which must not be cached.
                source: '/page/:page*',
                missing: [{ type: 'header', key: 'rsc' }],
                headers: [
                    {
                        key: 'Vercel-CDN-Cache-Control',
                        value: 'max-age=86400, stale-while-revalidate=604800',
                    },
                ],
            },
        ]
    },
}

export default nextConfig
