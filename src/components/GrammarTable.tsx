import React from 'react'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

export const GrammarTable = () => {
	return (
		<Table>
			<TableBody className="text-center">
				<TableRow>
					<TableCell className="text-blue-500 text-lg font-bold">
						Maskulin
					</TableCell>
					<TableCell className="text-red-500 text-lg font-bold">
						Feminin
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="text-green-500 text-lg font-bold">
						Neutral
					</TableCell>
					<TableCell className="text-yellow-500 text-lg font-bold">
						Plural
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="text-orange-500 text-lg font-bold">
						Verb
					</TableCell>
					<TableCell className="text-purple-500 text-lg font-bold">
						Adjective
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="text-pink-500 text-lg font-bold">
						Adverb
					</TableCell>
					<TableCell className="text-gray-500 text-lg font-bold">
						Präposition
					</TableCell>
				</TableRow>
				<TableRow>
					<TableCell className="text-amber-800 text-lg font-bold">
						Konjunktion
					</TableCell>
					<TableCell className="text-teal-500 text-lg font-bold">
						Partikel
					</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	)
}
