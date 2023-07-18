import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidenav from './components/Sidenav'
import Main from './pages/landing-page/Main'
import Work from './pages/work/Work'
import Projects from './pages/project/Projects'
import Footer from './components/Footer'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

function App() {
	return (
		<section className="dark:text-gray-100 dark:bg-slate-900">
			<div>
				<Router>
					<Sidenav />
					<Routes>
						<Route exact path="/" element={<Main />} />
						<Route path="/work" element={<Work />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>

					<Footer />
				</Router>
			</div>
		</section>
	)
}

export default App
