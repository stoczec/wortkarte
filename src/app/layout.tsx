import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { NavMenu } from '@/components'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Wortkarte - Deutsch lernen mit farblichen Lernkarten',
	description:
		'Wortkarte hilft Nutzern dabei, Deutsch zu lernen, indem Wörter je nach Wortklasse farblich hervorgehoben und Lernkarten mit assoziativen Bildern verwendet werden, um die Einprägung zu verbessern.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="flex flex-col h-full">
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<NavMenu />
						{children}
					</ThemeProvider>
				</div>
			</body>
		</html>
	)
}
