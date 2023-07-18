import React, { useState } from 'react'
import {
	AiOutlineMenu,
	AiOutlineHome,
	AiOutlineProject,
	AiOutlineMail,
} from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { GrProjects, GrWindows } from 'react-icons/gr'
import Toggle from './Toggle'

const styleIcon = { color: '#5984f3', fontSize: '18' } //global Icon style

const Sidenav = () => {
	const [nav, setNav] = useState(false)
	const handleNav = () => {
		setNav(!nav)
		// console.log('State Changed')
	}
	return (
		<div>
			<AiOutlineMenu
				onClick={handleNav}
				className="absolute top-4 right-4 z-[99] md:hidden dark:bg-gray-700"
			/>
			{nav ? (
				// all Anchor link container
				<div className="overflow-hidden fixed w-full h-screen bg-gray-100 flex flex-col justify-center items-center z-20 font-bold md:hidden  dark:bg-gray-800">
					{/* Home Link */}
					<a
						onClick={handleNav}
						href="/"
						className="w-[75%] flex justify-center items-center rounded-full m-2 cursor-pointer  ease-in duration-200 p-4 shadow-lg shadow-gray-400 bg-gray-100 hover:scale-110 dark:text-gray-800 dark:bg-[#b1bec3]">
						<AiOutlineHome style={styleIcon} />
						<span className="pl-4">Home</span>
					</a>
					{/* Work Link */}
					<a
						onClick={handleNav}
						href="/work"
						className="w-[75%] flex justify-center items-center rounded-full m-2 cursor-pointer  ease-in duration-200 p-4 shadow-lg shadow-gray-400 bg-gray-100 hover:scale-110 dark:text-gray-800 dark:bg-[#b1bec3] ">
						<GrWindows style={styleIcon} />
						<span className="pl-4">Work</span>
					</a>
					{/* Project Link */}
					<a
						onClick={handleNav}
						href="/projects"
						className="w-[75%] flex justify-center items-center rounded-full m-2 cursor-pointer  ease-in duration-200 p-4 shadow-lg shadow-gray-400 bg-gray-100 hover:scale-110 dark:text-gray-800 dark:bg-[#b1bec3] ">
						<AiOutlineProject style={styleIcon} />
						<span className="pl-4">Project</span>
					</a>
					{/* Contact Link */}
					<a
						onClick={handleNav}
						href="/about"
						className="w-[75%] flex justify-center items-center rounded-full m-2 cursor-pointer  ease-in duration-200 p-4 shadow-lg shadow-gray-400 bg-gray-100 hover:scale-110 dark:text-gray-800 dark:bg-[#b1bec3] ">
						<BsPerson style={styleIcon} />
						<span className="pl-4">About</span>
					</a>
					{/* Mail Link */}
					<a
						onClick={handleNav}
						href="/contact"
						className="w-[75%] flex justify-center items-center rounded-full m-2 cursor-pointer  ease-in duration-200 p-4 shadow-lg shadow-gray-400 bg-gray-100 hover:scale-110 dark:text-gray-800 dark:bg-[#b1bec3]">
						<AiOutlineMail style={styleIcon} />
						<span className="pl-4">Contact</span>
					</a>

					{/* Toggle  */}
					<div className="border-3 bg-gradient-to-r from-gray-200 to-blue-200 dark:bg-none shadow-lg   justify-center items-center text-center w-60 my-4 rounded-xl transparent flex flex-col ">
						<p className="uppercase mb-2 font-extrabold text-[#556eae]">Mode</p>
						<div className="flex justify-center gap-4">
							<span className="text-gray-500 font-bold dark:text-gray-700">
								Light
							</span>
							<Toggle />
							<span className="text-gray-500 font-bold dark:text-gray-700">
								Dark
							</span>
						</div>
					</div>
				</div>
			) : (
				' ' //return empty when nav is false or not rendered
			)}

			{/* Link for Medium and Large screen set to the left  */}
			<div className="md:block hidden fixed top-[20%] z-10">
				<div className="flex flex-col">
					{/* Links Home */}
					<a
						href="/"
						className="rounded-full m-2 p-4 cursor-pointer ease-in duration-300 shadow-lg shadow-gray-400 bg-gray-100 hover:scale-110 ">
						<AiOutlineHome style={styleIcon} />
					</a>
					{/* Links Work */}
					<a
						href="/work"
						className="rounded-full m-2 p-4 cursor-pointer ease-in duration-300 shadow-lg shadow-gray-400 bg-gray-100 hover:scale-110 ">
						<GrProjects style={styleIcon} />
					</a>
					{/* Links Project */}
					<a
						href="/projects"
						className="rounded-full m-2 p-4 cursor-pointer ease-in duration-300 shadow-lg shadow-gray-400 bg-gray-100 hover:scale-110 ">
						<AiOutlineProject style={styleIcon} />
					</a>
					{/* Links Person */}
					<a
						href="/about"
						className="rounded-full m-2 p-4 cursor-pointer ease-in duration-300 shadow-lg shadow-gray-400 bg-gray-100 hover:scale-110 ">
						<BsPerson style={styleIcon} />
					</a>
					{/* Links PersonMail */}
					<a
						href="/contact"
						className="rounded-full m-2 p-4 cursor-pointer ease-in duration-300 shadow-lg shadow-gray-400 bg-gray-100 hover:scale-110 ">
						<AiOutlineMail style={styleIcon} />
					</a>
				</div>
			</div>
		</div>
	)
}
export default Sidenav
