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

	useEffect(() => {
		const fetchImage = async () => {
			// setLoading(true)
			try {
				const response = await fetch(src)
				if (!response.ok) throw new Error('Image load failed')
				setError(false)
			} catch {
				setError(true)
			} finally {
				setLoading(false)
			}
		}

		fetchImage()
	}, [src, setLoading])

	return (
		<div className="relative aspect-[9/16]">
			{loading && !error && <Loader />}
			{error && <Ban />}
			{!loading && !error && (
				<Image src={src} alt={alt} fill sizes="320px" className="rounded-xl" />
			)}
		</div>
	)
}

export default ImageWithLoading
