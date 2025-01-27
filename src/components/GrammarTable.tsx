import React from 'react'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { WORD_CLASSES } from '@/enums/enums'
import { getWordClassColor } from '@/lib/utils'

export const GrammarTable = () => {
    return (
        <Table>
            <TableBody className="text-center">
                {Object.values(WORD_CLASSES).map((wordClass, index) => (
                    <TableRow key={index}>
                        <TableCell className={`text-lg font-bold ${getWordClassColor(wordClass)}`}>
                            {wordClass}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
