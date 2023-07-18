import React from 'react'
import Toggle from '../../components/Toggle'

const Contact = () => {
	return (
		<div
			id="contact"
			className="overflow-hidden max-w-[1040px] m-auto md:pl-20 py-16 p-4">
			<h1 className="text-4xl font-bold text-center text-[rgb(0,27,94)] dark:text-white/90 ">
				Contact
			</h1>
			<p className="py-5 text-2xl font-semibold text-start opacity-20">
				{' '}
				Send Message
			</p>
			<form
				action="https://getform.io/f/0d402287-9f0e-46ee-917c-7a398431a153"
				method="POST"
				encType="multipart/form-data">
				<div className="grid md:grid-cols-2 gap-4 w-full py-2">
					<div className="flex flex-col">
						<label className="uppercase text-sm py-2">Name</label>
						<input
							type="text"
							name="name"
							className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-[#5984f3] dark:text-black "
						/>
					</div>
					<div className="flex flex-col">
						<label className="uppercase text-sm py-2">Phone</label>
						<input
							type="text"
							name="phone"
							className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-[#5984f3] dark:text-black"
						/>
					</div>
				</div>
				<div className="flex flex-col py-2">
					<label className="uppercase text-sm py-2">Email</label>
					<input
						type="email"
						name="email"
						className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-[#5984f3] dark:text-black"
					/>
				</div>
				<div className="flex flex-col">
					<label className="uppercase text-sm py-2">Subject</label>
					<input
						type="text"
						name="subject"
						className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-[#5984f3] dark:text-black"
					/>
				</div>
				<div className="h-screen">
					<div className="flex flex-col py-2 ">
						<label className="uppercase text-sm py-2">Reach</label>
						<textarea
							placeholder="Reach out, and I will keep in touch..."
							name="message"
							id=""
							cols="30"
							rows="10"
							className="border-2 roundedd-lg px-3 py-3 border-gray-300 focus:outline-[#5984f3] dark:text-black"></textarea>
					</div>
					<button className="bg-[#001b5e] rounded-lg text-gray-100 mt-4 w-full p-4 dark:bg-slate-700">
						Send Message
					</button>
				</div>
			</form>
			<div className="bg-[#b9c0d4] text-lg p-1 rounded-md md:absolute md:right-2 md:z-10 md:top-2 hidden md:flex">
				<Toggle />
			</div>
		</div>
	)
}
export default Contact
