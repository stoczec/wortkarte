import { Button } from './ui/button'
import { Input } from './ui/input'

export function SearchBar({
	searchQuery,
	setSearchQuery,
}: {
	searchQuery: string
	setSearchQuery: (query: string) => void
}) {
	return (
		<div className="flex gap-2 py-3">
			<Input
				type="text"
				placeholder="Search"
				value={searchQuery}
				onChange={e => setSearchQuery(e.target.value)}
			/>
			<Button onClick={() => setSearchQuery('')}>Clear</Button>
		</div>
	)
}
