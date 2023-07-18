import Carousel from '../../pages/slider/Carousel'
const slides = [
	'/img/UltimateDisney-clone.jpg',
	'/img/eCCBDS.jpg',
	'/img/edit missing form field alert.PNG',
	'/img/fm toggler light.PNG',
	'/img/FM Challenge Toggler.PNG',
	'/img/Project 3D.jpg',
	'/img/Project 3D 1.jpg',
	'/img/Project 2 light.jpg',
	'img/Disney-Clone.jpg',
]

export default function Sliders() {
	return (
		<main className="SlideShow">
			<div className="bg-[hsl(240,81%,90%)] dark:bg-gradient-to-l from-neutral-400 via-slate-700 to-orange-400">
				{/* Initial white bg-color{ bg-gray-400 } */}

				<div className="max-w-xl m-auto">
					<Carousel autoSlide={true} autoSlideInterval={5000}>
						{slides.map((slide) => (
							<img key={slide} src={slide} />
						))}
					</Carousel>
				</div>
			</div>
		</main>
	)
}
