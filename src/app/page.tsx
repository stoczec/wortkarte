'use client'

import { data } from '@/data/data'
import { SearchBar, WordCarousel } from '@/components'
import { useState } from 'react'
import { LanguageCard } from '@/interfaces/interfaces'

export default function Home() {
	const [searchQuery, setSearchQuery] = useState('')

	// Фильтрация данных на основе поискового запроса
	const filteredData: LanguageCard[] = data.reduce<LanguageCard[]>(
		(acc, card) => {
			// Проверяем, соответствует ли родительский объект поисковому запросу
			if (
				card.wordDe.toLowerCase().includes(searchQuery.toLowerCase()) ||
				card.wordRu.toLowerCase().includes(searchQuery.toLowerCase())
			) {
				acc.push(card)
			}

			// Если у объекта есть свойство multiple, проверяем и добавляем дочерние объекты
			if (card.multiple) {
				card.multiple.forEach(subCard => {
					if (
						subCard.wordDe.toLowerCase().includes(searchQuery.toLowerCase()) ||
						subCard.wordRu.toLowerCase().includes(searchQuery.toLowerCase())
					) {
						acc.push(subCard)
					}
				})
			}

			return acc
		},
		[]
	)
	return (
		<div className="flex items-center justify-center flex-grow flex-shrink-0 basis-auto">
			<section>
				<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
				<WordCarousel data={filteredData} />
			</section>
		</div>
	)
}
