import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {
	FaTwitter,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
} from 'react-icons/fa'
import Toggle from '../../components/Toggle'
import Work from '../work/Work'
import Projects from '../project/Projects'
import Sliders from '../slider/Sliders'

const Main = () => {
	return (
		<div id="main">
			<img
				className="w-full h-screen object-left scale-x-[-1]"
				src="/img/vscode (1).jpg"
				alt="Mountain_edge"
			/>

			<div className="w-full h-screen absolute top-0 left-0 bg-white/20">
				<div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
					<h1 className="overflow-hidden text-4xl font-bold sm:text-5xl dark:text-white/50 z-10">
						<a href="/about" className="hover:text-cyan-200">
							Ultimate O'Destran{' '}
						</a>
					</h1>
					<h2 className="flex text-2xl p-4 sm:text-3xl  dark:text-white/50 hover:text-cyan-200">
						I'm a
						<TypeAnimation
							sequence={[
								'Developer', // type developer
								2000, //waits 2s
								'Coder ', // deletes 'developer' and types 'coder'
								2000,
								'Cyberian',
								2000, // waits 2s
								'Tech Enthusiast', // types the last set word
								2000,
							]}
							wrapper="div"
							cursor={true}
							repeat={Infinity}
							style={{ fontSize: '1em', paddingLeft: '5px' }}
						/>
					</h2>
					<div className="flex justify-between pt-6 max-w-[200px] w-full">
						{' '}
						{/* can also use space-x-10 for m-w[] & w-full */}
						<FaTwitter
							href="https://twitter.com/micahshegbo1?s=09"
							className="cursor-pointer hover:text-cyan-200"
							size={20}
						/>
						<FaFacebookF
							href="https://facebook.com/profile.php?id=100091890610919"
							className="cursor-pointer hover:text-cyan-200"
							size={20}
						/>
						<FaInstagram
							className="cursor-pointer hover:text-cyan-200"
							size={20}
						/>
						<FaLinkedinIn
							className="cursor-pointer hover:text-cyan-200"
							size={20}
						/>
					</div>
				</div>
			</div>
			<div className="bg-[#b9c0d4] text-lg p-1 rounded-md md:absolute md:right-2 md:z-10 md:top-2 hidden md:flex">
				<Toggle />
			</div>
			<div>
				<div>
					<Work />
					<Projects />
				</div>
				<Sliders />
			</div>
		</div>
	)
}
export default Main
