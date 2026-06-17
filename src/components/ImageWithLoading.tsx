'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { IImageWithLoadingProperties } from '@/interfaces/interfaces'
import { Ban } from 'lucide-react'

const ImageWithLoading = ({ src, alt, priority = false }: IImageWithLoadingProperties) => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)

    if (error) {
        return <Ban />
    }

    return (
        <div className="relative aspect-[9/16] bg-muted">
            <Image
                src={src}
                alt={alt}
                fill
                sizes="320px"
                priority={priority}
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
