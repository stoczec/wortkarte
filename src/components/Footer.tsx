'use client'

import { useAllCardsStore, useFavoriteCardsStore } from '@/stores'
import { MaxWidthWrapper } from '.'

export const Footer = () => {
	const cards = useAllCardsStore(state => state.cards)
	const favoriteCards = useFavoriteCardsStore(state => state.favoriteCards)
	return (
		<footer className="w-full h-14 border-t border-gray-200 bg-black/5 flex-grow-0 flex-shrink-0 basis-auto">
			<MaxWidthWrapper>
				<div className="h-full flex flex-col justify-center items-center md:flex-row md:justify-between ">
					<div>
						<p className="text-sm text-muted-foreground">
							Anzahl der Karten:{' '}
							<span className="text-primary">{cards.length}</span> Stück
						</p>
					</div>

					<div>
						<p className="text-sm text-muted-foreground">
							Anzahl deiner Favoritenkarten:{' '}
							<span className="text-primary">{favoriteCards.length}</span> Stück
						</p>
					</div>
				</div>
			</MaxWidthWrapper>
		</footer>
	)
}
