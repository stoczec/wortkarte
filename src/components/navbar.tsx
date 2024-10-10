import Link from 'next/link'

import { ModeToggle } from './modeToggle'
import { MaxWidthWrapper } from './maxWidthWrapper'

export const Navbar = async () => {
	return (
		<nav className="h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-black/5 backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between">
					<Link href="/" className="flex z-40 font-semibold">
						wort<span className="text-primary">karte</span>
					</Link>
					<ModeToggle />
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}
