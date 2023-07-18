import React from 'react'
import { BsArrowUpCircleFill } from 'react-icons/bs'
import {
	FaTwitter,
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
} from 'react-icons/fa'
const nightSkyColor = { color: '#001947' }

const FooterItem = () => {
	return (
		<div className=" bg-slate-700 overflow-x-auto ">
			{/* flex container  */}
			<div className="container relative flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
				{/* logo and social links container */}
				<div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
					<div className="mx-auto my-6 text-center text-white md:hidden">
						Copyright &copy; 2023, All Rights Reserved
					</div>
					{/* logo  */}

					<img src="/img/logo.svg" alt="" className="h-8 w-32 lg:w-40" />

					{/* social links container  */}

					<div className="flex space-x-2 lg:space-x-4 justify-center">
						<a href="#">
							<FaTwitter className="cursor-pointer" size={25} />
						</a>
						<a href="#">
							<FaFacebookF className="cursor-pointer" size={25} />
						</a>
						<a href="#">
							<FaInstagram className="cursor-pointer" size={25} />
						</a>
						<a href="#">
							<FaLinkedinIn className="cursor-pointer" size={25} />
						</a>
					</div>
				</div>
				{/* list container  */}
				<div className="flex justify-around space-x-16 lg:space-x-32">
					<div className="flex flex-col space-y-3 text-white">
						<a href="/" className="hover:text-opacity-5 hover:text-white">
							Home
						</a>
						<a href="/work" className="hover:text-opacity-5 hover:text-white">
							Career
						</a>
						<a
							href="/projects"
							className="hover:text-opacity-5 hover:text-white">
							Projects
						</a>
					</div>
					<div className="flex flex-col space-y-3 text-white">
						<a
							href="/contact"
							className="hover:text-opacity-5 hover:text-white">
							Contact
						</a>
						<a href="/main" className="hover:text-opacity-5 hover:text-white">
							Information
						</a>
						<a href="/main" className="hover:text-opacity-5 hover:text-white">
							About
						</a>
					</div>
				</div>
				{/* input container  */}
				<div className="flex flex-col justify-between">
					<form action="">
						<div className="flex space-x-3">
							<input
								placeholder="Email: odestult@gmail.com"
								type="text"
								className="flex-1 px-3 rounded-lg focus:outline-[#5984f3] font-semibold"
							/>
							<button className="px-6 py-2 text-white rounded-lg bg-[#ea5916] hover:bg-gray-200 focus:outline-none">
								Submit
							</button>
						</div>
					</form>
					<div className="hidden text-white md:block">
						Copyright &copy; 2023, All Rights Reserved
					</div>
					<div className="rounded-full absolute bottom-0 end-0 p-5mb-1 right-4 mb-2 p-2 ">
						<a href="#main">
							<BsArrowUpCircleFill
								style={nightSkyColor}
								size={25}
								className="dark:bg-gradient-to-l from-neutral-400 via-orange-600 to-sky-900 rounded-md"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
export default FooterItem
