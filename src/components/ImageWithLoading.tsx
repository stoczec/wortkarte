'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { IImageWithLoadingProperties } from '@/interfaces/interfaces'
import { useCardsStore } from '@/stores'
import { Loader } from './Loader'
import { Ban } from 'lucide-react'

const ImageWithLoading = ({ src, alt }: IImageWithLoadingProperties) => {
	const { loading, setLoading } = useCardsStore()
	const [error, setError] = useState(false)

	const handleLoad = () => {
		setLoading(false)
	}

	const handleError = () => {
		setLoading(false)
		setError(true)
	}

	return (
		<div className="relative aspect-[9/16]">
			{loading && <Loader />}
			{error && <Ban />}
			<Image
				src={src}
				alt={alt}
				onLoad={handleLoad}
				onError={handleError}
				fill
				sizes="320px"
				className={`rounded-xl ${loading ? 'hidden' : ''}`}
			/>
		</div>
	)
}

export default ImageWithLoading
