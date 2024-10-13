'use client'

import React from 'react'
import { DNA } from 'react-loader-spinner'

export const Loader = () => {
	return (
		<div className="w-[320px] h-[576px] flex justify-center items-center">
			<DNA
				visible={true}
				height="80"
				width="80"
				ariaLabel="dna-loading"
				wrapperClass="dna-wrapper"
			/>
			<DNA
				visible={true}
				height="80"
				width="80"
				ariaLabel="dna-loading"
				wrapperClass="dna-wrapper"
			/>
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
