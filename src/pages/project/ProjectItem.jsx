import React from 'react'

const ProjectItem = ({ title, imgUrl, hoverName, tech, workUrl }) => {
	return (
		<div className="relative items-center justify-center shadow-lg shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#4668c0]">
			<img
				src={imgUrl}
				alt={title}
				className="h-[300px] w-full rounded-xl group-hover:opacity-20 "
			/>
			<h2 className="text-gray-400 mb-5 px-3 py-2 font-semibold text-1xl">
				{title}
			</h2>
			<div className="px-3 py-2 gap-2 flex font-semibold bg-[#a5a5a8] rounded-b-xl group-hover:opacity-20">
				{tech.map((item) => (
					<span
						key={item}
						className="text-[14px] lg:text-[20px] px-3 py-3 bg-[#cdd9da] dark:bg-black rounded-md">
						{item}
					</span>
				))}
			</div>

			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<h3 className="font-bold text-3xl text-white tracking-wider text-center">
					{hoverName}
				</h3>
				<p className="pb-4 pt-2 text-white text-center">Ultimate</p>
				<a href="#">
					<p className="p-3 rounded-lg bg-white text-gray-700 cursor-pointer text-lg text-center">
						More Info
					</p>
				</a>
			</div>
		</div>
	)
}
export default ProjectItem
