'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { IImageWithLoadingProperties } from '@/interfaces/interfaces'
import { Ban } from 'lucide-react'

const ImageWithLoading = ({
    src,
    alt,
    priority = false,
    eager = false,
}: IImageWithLoadingProperties) => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)

    if (error) {
        return <Ban />
    }

    return (
        <div className="relative aspect-[9/16] overflow-hidden rounded-t-xl bg-neutral-200 dark:bg-neutral-900">
            {!loaded && (
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 bg-[length:200%_100%] motion-safe:animate-[shimmer_1.4s_ease-in-out_infinite] bg-[linear-gradient(105deg,transparent_0%,rgba(255,255,255,0.65)_45%,rgba(255,255,255,0.95)_50%,rgba(255,255,255,0.65)_55%,transparent_100%)] dark:bg-[linear-gradient(105deg,transparent_0%,rgba(255,255,255,0.06)_45%,rgba(255,255,255,0.10)_50%,rgba(255,255,255,0.06)_55%,transparent_100%)]"
                />
            )}
            <Image
                src={src}
                alt={alt}
                fill
                sizes="320px"
                priority={priority}
                loading={priority ? undefined : eager ? 'eager' : 'lazy'}
                unoptimized={process.env.NODE_ENV !== 'production'}
                className={cn(
                    'rounded-t-xl transition-opacity duration-300',
                    loaded ? 'opacity-100' : 'opacity-0'
                )}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}
            />
        </div>
    )
}

export default ImageWithLoading
