import React from 'react'
import ProjectItem from './ProjectItem'
import projectData from './ProjectData'

import Toggle from '../../components/Toggle'

const text =
	'Some of the projects I have worked on using HTML, CSS, Javascript,bootstrap, Tailwindcss, REACT, PhP Vite.js'

const Projects = () => {
	return (
		<div id="/projects" className="max-w-[1040px] m-auto md:pl-20 py-16 p-4">
			<h1 className="font-bold text-center text-4xl text-[#001b5e] dark:text-white/90 box-content">
				Project
			</h1>
			<p className="text-center py-8 text-stone-500 dark:text-white/90">
				{text}
			</p>
			<div className="grid md:grid-cols-2 gap-12">
				{projectData.map((item, title) => (
					<ProjectItem
						key={title}
						title={item.title}
						imgUrl={item.imgUrl}
						hoverName={item.hoverName}
						tech={item.tech}
						workUrl={item.workUrl}
					/>
				))}
			</div>

			<div className="bg-[#b9c0d4] text-lg p-1 rounded-md md:absolute md:right-2 md:z-10 md:top-2 hidden md:flex">
				<Toggle />
			</div>
		</div>
	)
}
export default Projects
