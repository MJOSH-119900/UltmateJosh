import React, { useEffect, useState } from 'react'
import { BsFillSunFill, BsFillMoonStarsFill } from 'react-icons/bs'
const nightSkyColor = { color: '#5a5a5a' }

const Toggle = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') ? localStorage.getItem('theme') : ' '
	)

	function onWindowMedia() {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}
	onWindowMedia()

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [theme])

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<div className="flex object-left scale-x-[-1]">
			<button
				id="darkMode"
				type="button"
				onClick={handleThemeSwitch}
				// className="bg-[#b9c0d4] text-lg p-1 rounded-md md:absolute md:right-2 md:z-10 md:top-2" //this will
			>
				{theme === 'dark' ? (
					<BsFillSunFill />
				) : (
					<BsFillMoonStarsFill style={nightSkyColor} />
				)}
			</button>
		</div>
	)
}
export default Toggle
