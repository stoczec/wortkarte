'use client'

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { ModeToggle, NavMenu } from '.'
import { Separator } from './ui/separator'
import { Menu } from 'lucide-react'

const SHEET_SIDES = ['right'] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function BurgerMenu() {
	return (
		<Sheet>
			<SheetTrigger asChild className="flex justify-center items-center">
				<Menu className="cursor-pointer" />
			</SheetTrigger>
			<SheetContent side="right">
				<SheetTitle>Navigation</SheetTitle>
				<SheetDescription>
					Wählen Sie einen Bereich zum Navigieren aus
				</SheetDescription>
				<ul className="grid gap-4 py-10">
					<NavMenu />
					<Separator />
					<div className="flex justify-between items-center px-2 text-sm">
						<p>Theme</p>
						<ModeToggle />
					</div>
				</ul>
				<SheetFooter></SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
