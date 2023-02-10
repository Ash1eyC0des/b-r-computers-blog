import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

export default function PageNotFound() {
	return (
		<Layout pageTitle='404'>
			<section className='text-center content-section'>
				<div className='container'>
					<StaticImage
						className='image offs-md'
						src='../images/404.png'
						alt='404'
						data-inview-showup='showup-scale'
					/>

					<div className='section-head text-center container-md'>
						<h2
							className='section-title text-upper text-lg'
							data-inview-showup='showup-translate-right'
						>
							Error
						</h2>

						<p data-inview-showup='showup-translate-left'>
							This page could not be found!
						</p>
					</div>

					<a
						className='btn text-upper'
						href='/index.html'
						data-inview-showup='showup-translate-up'
					>
						back to homepage
					</a>
				</div>
			</section>
		</Layout>
	)
}
