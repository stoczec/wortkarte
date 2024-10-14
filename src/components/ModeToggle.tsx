'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Monitor, MoonIcon, SunIcon } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

export function ModeToggle() {
	const { setTheme } = useTheme()

	return (
		<ToggleGroup type="single" className="w-32">
			<ToggleGroupItem
				value="system"
				aria-label="Toggle system"
				onClick={() => setTheme('system')}
				className="border rounded-full p-5"
			>
				<Monitor className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100" />
			</ToggleGroupItem>
			<ToggleGroupItem
				value="dark"
				aria-label="Toggle dark"
				onClick={() => setTheme('dark')}
				className="border rounded-full p-5"
			>
				<MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100" />
			</ToggleGroupItem>
			<ToggleGroupItem
				value="light"
				aria-label="Toggle light"
				onClick={() => setTheme('light')}
				className="border rounded-full p-5"
			>
				<SunIcon className=" absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-0 dark:scale-100" />
			</ToggleGroupItem>
		</ToggleGroup>
	)
}
