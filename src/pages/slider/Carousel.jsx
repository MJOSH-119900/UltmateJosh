import React, { useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

export default function Carousel({
	children: slides,
	autoSlide = false,
	autoSlideInterval = 3000,
}) {
	const [current, setCurrent] = useState(0)

	const previous = () =>
		setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
	const next = () =>
		setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
	useEffect(() => {
		if (!autoSlide) return
		const slideInterval = setInterval(next, autoSlideInterval)
		return () => clearInterval(slideInterval)
	}, [])

	return (
		<div className="overflow-hidden relative  bg-[hsl(240,81%,90%)] dark:bg-gradient-to-l from-neutral-400 via-slate-700 to-orange-400 group  transition-transform ease-out duration-500 py-10">
			<div
				className="flex"
				style={{ transform: `translateX(-${current * 100}%)` }}
			>
				{slides}
			</div>
			<div className="absolute inset-0 flex items-center justify-between p-4">
				<button
					onClick={previous}
					className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
				>
					<BsChevronCompactLeft size={40} />
				</button>
				<button
					onClick={next}
					className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
				>
					<BsChevronCompactRight size={40} />
				</button>
				<div className="absolute bottom-4 right-0 left-0 ">
					<div className="flex items-center justify-center gap-2">
						{slides.map((s, slideIndex) => (
							<div
								key={slideIndex}
								className={`transition-all w-3 h-3 bg-white/70 dark:bg-[#db5d15] rounded-full ${
									current === slides ? 'p-2' : 'bg-opacity-40'
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
