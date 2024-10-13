import React from 'react'
import { DNA } from 'react-loader-spinner'

export const Loader = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<DNA
				visible={true}
				height="80"
				width="80"
				ariaLabel="dna-loading"
				wrapperClass="dna-wrapper"
			/>
		</div>
	)
}
