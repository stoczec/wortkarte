'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IImageWithLoadingProperties } from '@/interfaces/interfaces'
import { Loader } from './Loader'
import { Ban } from 'lucide-react'

const ImageWithLoading = ({ src, alt }: IImageWithLoadingProperties) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        let active = true
        const fetchImage = async () => {
            try {
                const response = await fetch(src)
                if (!response.ok) throw new Error('Image load failed')
                if (active) setError(false)
            } catch {
                if (active) setError(true)
            } finally {
                if (active) setLoading(false)
            }
        }
        fetchImage()
        return () => {
            active = false
        }
    }, [src])

    if (loading && !error) {
        return <Loader />
    }

    if (error) {
        return <Ban />
    }

    return (
        <div className="relative aspect-[9/16]">
            <Image src={src} alt={alt} fill sizes="320px" className="rounded-t-xl" />
        </div>
    )
}

export default ImageWithLoading
