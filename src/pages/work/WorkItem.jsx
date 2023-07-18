import React from 'react'
import Toggle from '../../components/Toggle'

const WorkItem = ({ year, title, duration, details }) => {
	return (
		<>
			<div className="bg-[#b9c0d4] text-lg p-1 rounded-md md:absolute md:right-2 md:z-10 md:top-2 hidden md:flex">
				<Toggle />
			</div>
			<ol className="flex flex-col relative border-l border-stone-200 md:flex-row">
				<li className="mb-10 ml-4">
					<div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border-white bg-stone-200" />
					<p className="flex flex-wrap gap-4 flex-row items-center  justify-start text-xs md:text-sm">
						<span className="inline-block px-2 font-semibold rounded-md text-white bg-[#001b5e] ">
							{year}
						</span>
						<span className="text-lg font-semibold text-[#001b5e] dark:bg-gradient-to-r from-white to-slate-500 rounded-lg Dark:opacity-100 ">
							{title}
						</span>
						<span className="my-1 text-sm font-normal leading-none text-stone-400">
							{duration}
						</span>
					</p>
					<p className="my-2 text-base font-normal text-stone-500 dark:text-white/90 ">
						{details}
					</p>
				</li>
			</ol>
		</>
	)
}
export default WorkItem
