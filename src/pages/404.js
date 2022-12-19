import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import brSmall from '../images/br-small.webp'
import notFound from '../images/404.png'
import ScrollButton from '../components/ScrollButton'

const NotFoundPage = () => {
	return (
		<>
			<header class='header'>
				<div class='infobar xs-hidden'>
					<div class='container'>
						<div class='cols-list pull-left cols-md'>
							<div class='list-item contact'>
								<span class='info-icon' aria-label='Address'>
									<i class='fas fa-home' aria-hidden='true'></i>
								</span>

								<a
									href='https://g.page/BRComputers?share'
									target='_blank'
								>
									363 East Main Street, Kutztown, PA 19530
								</a>
							</div>

							<div class='list-item contact'>
								<span class='info-icon' aria-label='Phone'>
									<i class='fas fa-phone'></i>
								</span>

								<a href='tel:4846418083'>(484) 641-8083</a>
							</div>

							<div class='list-item contact'>
								<span class='info-icon' aria-label='Hours'>
									<i class='fas fa-clock' aria-hidden='true'></i>
								</span>
								<strong>Monday - Friday:</strong> 9AM - 5PM
							</div>
						</div>

						<div class='cols-list pull-right cols-md socials'>
							<div class='list-item'>
								<a
									href='https://www.facebook.com/BRComputers'
									target='_blank'
									aria-label='Facebook'
								>
									<i class='fab fa-facebook-f' aria-hidden='true'></i>
								</a>
							</div>

							<div class='list-item'>
								<a
									href='https://www.instagram.com/brcomputers/'
									target='_blank'
									aria-label='Instagram'
								>
									<i class='fab fa-instagram' aria-hidden='true'></i>
								</a>
							</div>

							<div class='list-item'>
								<a
									href='mailto:info@bandrcomputers.com'
									target='_blank'
									aria-label='Email'
								>
									<i class='far fa-envelope' aria-hidden='true'></i>
								</a>
							</div>
						</div>
					</div>
				</div>

				<nav class='stick-menu menu-wrap simple line'>
					<div class='menu-container menu-row'>
						<div class='logo'>
							<a href='/'>
								<img src={brSmall} alt='B & R Computers' />
							</a>
						</div>

						<div class='header-toggler pull-right xs-shown'>
							<label class='header-shown-sign' for='header-hidden'>
								<i class='fas fa-times' aria-hidden='true'></i>
							</label>
							<label class='header-hidden-sign' for='header-shown'>
								<i class='fas fa-bars' aria-hidden='true'></i>
							</label>
						</div>

						<div class='clearfix xs-shown'></div>

						<div class='menu'>
							<ul class='menu-items menu-no-sides'>
								<li>
									<a href='/'>Home</a>
									<span class='toggle-icon'>
										<i
											class='fas fa-chevron-down'
											aria-hidden='true'
										></i>
									</span>
								</li>

								<li>
									<a href='/services.html'>Services</a>

									<span class='toggle-icon'>
										<i
											class='fas fa-chevron-down'
											aria-hidden='true'
										></i>
									</span>

									<ul>
										<li>
											<a href='/services/repairs-upgrades.html'>
												Repairs & Upgrades
											</a>
										</li>

										<li>
											<a href='/services/custom-desktops.html'>
												Custom-Built Desktops
											</a>
										</li>

										<li>
											<a href='/services/managed-services.html'>
												Managed Services
											</a>
										</li>

										<li>
											<a href='/services/remote-support.html'>
												Remote Support
											</a>
										</li>

										<li>
											<a href='/services/refurbished-computers.html'>
												Refurbished Computers
											</a>
										</li>

										<li>
											<a href='/services/on-site.html'>
												On-Site Consultations / Repairs
											</a>
										</li>
									</ul>
								</li>

								<li>
									<a
										href='https://www.ebay.com/str/brcomputers'
										target='_blank'
									>
										Shop
									</a>
								</li>

								<li>
									<a href='/about-us.html'>About Us</a>
								</li>

								<li>
									<a href='/contact-us.html'>Contact Us</a>

									<span class='toggle-icon'>
										<i
											class='fas fa-chevron-down'
											aria-hidden='true'
										></i>
									</span>

									<ul class='left'>
										<li>
											<a href='/contact-us.html'>Contact Us</a>
										</li>

										<li>
											<a
												href='https://calendly.com/bandrcomputers'
												target='_blank'
											>
												Schedule an Appointment
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
			<section class='text-center content-section'>
				<div class='container'>
					<StaticImage
						class='image offs-md'
						src='../images/404.png'
						alt='404'
						data-inview-showup='showup-scale'
					/>

					<div class='section-head text-center container-md'>
						<h2
							class='section-title text-upper text-lg'
							data-inview-showup='showup-translate-right'
						>
							Error
						</h2>

						<p data-inview-showup='showup-translate-left'>
							This page could not be found!
						</p>
					</div>

					<a
						class='btn text-upper'
						href='/index.html'
						data-inview-showup='showup-translate-up'
					>
						back to homepage
					</a>
				</div>
			</section>

			<ScrollButton />

			<footer class='footer alt-bg'>
				<div class='container only-xs-text-justify-center'>
					<div class='solid-section tight'>
						<div class='row cols-md'>
							<div class='sm-col-3'>
								<div class='footer-logo'>
									<StaticImage
										src='../images/br-small-white.webp'
										alt='B & R Computers'
									/>
								</div>
								<div class='footer-text sm-text-justify'>
									Your Trusted Technology Partner
								</div>
							</div>
							<div class='sm-col-8 sm-push-1'>
								<div class='row cols-md'>
									<div class='sm-col-4'>
										<div class='footer-title text-upper'>
											Additional links
										</div>
										<ul class='list'>
											<li>
												<a class='content-link' href='/index.html'>
													Home
												</a>
											</li>
											<li>
												<a
													class='content-link'
													href='https://www.ebay.com/str/brcomputers'
													target='_blank'
												>
													Shop
												</a>
											</li>
											<li>
												<a
													class='content-link'
													href='/services.html'
												>
													Services
												</a>
											</li>
											<li>
												<a
													class='content-link'
													href='/about-us.html'
												>
													About Us
												</a>
											</li>
											<li>
												<a class='content-link' href='/terms.html'>
													Terms of Use
												</a>
											</li>
											<li>
												<a
													class='content-link'
													href='/privacy.html'
												>
													Privacy Policy
												</a>
											</li>
											<li>
												<a
													class='content-link'
													href='/contact-us.html'
												>
													Contact Us
												</a>
											</li>
										</ul>
									</div>

									<div class='sm-col-4'>
										<div class='footer-title text-upper'>
											Services
										</div>
										<ul class='list'>
											<li>
												<a
													class='content-link'
													href='/services/repairs-upgrades.html'
												>
													Repairs &amp; Upgrades
												</a>
											</li>

											<li>
												<a
													class='content-link'
													href='/services/custom-desktops.html'
												>
													Custom-Built Desktops
												</a>
											</li>

											<li>
												<a
													class='content-link'
													href='/services/managed-services.html'
												>
													Managed Services
												</a>
											</li>

											<li>
												<a
													class='content-link'
													href='/services/remote-support.html'
												>
													Remote Support
												</a>
											</li>

											<li>
												<a
													class='content-link'
													href='/services/refurbished-computers.html'
												>
													Refurbished Computer Sales
												</a>
											</li>

											<li>
												<a
													class='content-link'
													href='/services/on-site.html'
												>
													On-Site Consultations / Repairs
												</a>
											</li>
										</ul>
									</div>

									<div class='sm-col-4'>
										<div class='footer-title text-upper'>Socials</div>

										<div class='cols-list social-blocks inline-block'>
											<a
												href='https://www.facebook.com/BRComputers'
												target='_blank'
												class='list-item'
												aria-label='Facebook'
											>
												<i
													class='fab fa-facebook-f'
													aria-hidden='true'
												></i>
											</a>

											<a
												href='https://www.instagram.com/brcomputers/'
												target='_blank'
												class='list-item'
												aria-label='Instagram'
											>
												<i
													class='fab fa-instagram'
													aria-hidden='true'
												></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class='footer-copyrights text-center ins-md solid-border-top'>
						&copy; 2022 <b>B & R Computers</b>. All Rights Reserved
					</div>
				</div>
			</footer>
		</>
	)
}

export default NotFoundPage

export const Head = () => <title>Page Not Found</title>
