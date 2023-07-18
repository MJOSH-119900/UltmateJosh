import React from 'react'
import Toggle from '../../components/Toggle'

const text =
	'I possess a Bachelor’s degree (B.Tech) in Cyber Security Science, I am an ICT savvy, a frontend developer with great passion for building user friendly, user appealing and secure web application by applying my knowledge on cryptography. I am seeking an opportunity in a reputable organization to put my skills, discipline and knowledge into use.'

const About = () => {
	return (
		<>
			<div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 flex flex-col-reverse justify-between items-center gap-10 md:flex-row md:space-y-0 h-screen">
				<div className="w-full relative ">
					<div className="bg-[hsl(220,23%,42%)] origin-center transform rotate-45 absolute md:h-[200px] md:w-[200px] md:translate-x-16 md:translate-y-10 -z-60 -translate-x-10 opacity-20 " />
					<h1 className="font-bold text-4xl text-[#001b5e] dark:text-white/90">
						About
					</h1>
					<p className="py-8 text-stone-500 dark:text-white/90">{text}</p>

					<span className="mt-9 text-stone-500 dark:text-white/90">
						Contact Developer{' '}
						<a
							href="/contact"
							className=" hover:text-cyan-400 font-bold tracking-wide">
							Click Here
						</a>
					</span>
					<span
						href="mailto:micahshegbo1@gmail.com"
						className="block text-sm md:text-md text-slate-800 font-bold dark:text-gray-300 dark:hover:text-slate-500 hover:text-cyan-500">
						micahshegbo1@gmail.com
					</span>
				</div>
				<img
					src="/img/me.jpg"
					alt="Ultimate Josh"
					className="w-full bg-cover h-[300px] rounded-lg mx-auto"
				/>
			</div>
			<div className="bg-[#b9c0d4] text-lg p-1 rounded-md md:absolute md:right-2 md:z-10 md:top-2 hidden md:flex">
				<Toggle />
			</div>
		</>
	)
}
export default About
