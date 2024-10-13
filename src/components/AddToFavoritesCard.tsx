import React from 'react'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { Heart, MoveUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const AddToFavoritesCard = () => {
	return (
		<MaxWidthWrapper
			className={cn(
				'flex flex-col items-center justify-center ',
				'py-3 sm:py-6 lg:py-6'
			)}
		>
			<div
				className={cn(
					' flex justify-center items-center text-center ',
					'relative aspect-[9/16] w-[320px] p-3 border rounded-xl'
				)}
			>
				<Heart className={cn('absolute top-2 right-2 z-10 ', 'text-primary')} />
				<MoveUpRight
					size={200}
					className={cn('absolute top-5 right-3 z-10 ', 'text-primary')}
				/>
				Fügen Sie die Wortkarte zu den Favoriten hinzu!
			</div>
		</MaxWidthWrapper>
	)
}
