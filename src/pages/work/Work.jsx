import React from 'react'
import WorkItem from './WorkItem'
import data from './WorkData'

const Work = () => {
	return (
		<div
			id="/work"
			className="overflow-hidden max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
			<h1 className="font-bold text-4xl text-center text-[#001b5e] dark:text-white/90">
				Work
			</h1>
			{data.map((item, idx) => (
				<WorkItem
					key={idx}
					year={item.year}
					title={item.title}
					duration={item.duration}
					details={item.details}
				/>
			))}
		</div>
	)
}
export default Work
