import { X, Search } from 'lucide-react'
import { Input } from './ui/input'

export function SearchBar({
	searchQuery,
	setSearchQuery,
}: {
	searchQuery: string
	setSearchQuery: (query: string) => void
}) {
	return (
		<div className="w-[320px] relative flex gap-2 py-3">
			<Input
				type="text"
				placeholder="Suche"
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
				className="pl-6"
			/>
			{searchQuery ? (
				<X
					className="h-5 w-5 text-primary absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
					onClick={() => setSearchQuery('')}
				/>
			) : (
				<Search className="h-[14px] w-[14px] text-gray-400 absolute left-2 top-1/2 transform -translate-y-1/2" />
			)}
		</div>
	)
}
