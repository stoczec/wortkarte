import Link from 'next/link'
import { MaxWidthWrapper } from './'

export const Footer = () => {
	return (
		<footer className=" h-14 border-t border-gray-200">
			<MaxWidthWrapper>
				<div className="h-full flex flex-col justify-center items-center md:flex-row md:justify-between ">
					<div className="text-center md:text-left pb-2 md:pb-0">
						<p className="text-sm text-muted-foreground">
							&copy;
							{new Date().getFullYear()} All rights reserved
						</p>
					</div>

					<div className="flex items-center justify-center">
						<div className="flex space-x-8">
							<Link
								href="#"
								className="text-sm text-muted-foreground hover:text-gray-600"
							>
								Therms
							</Link>
							<Link
								href="#"
								className="text-sm text-muted-foreground hover:text-gray-600"
							>
								Privacy Policy
							</Link>
							<Link
								href="#"
								className="text-sm text-muted-foreground hover:text-gray-600"
							>
								Cookie Policy
							</Link>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</footer>
	)
}
