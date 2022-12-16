import * as React from 'react'
import { Script } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import brSmall from '../images/br-small.webp'

const IndexPage = () => {
	return (
		<>
			<body className='body loader-loading'>
				<header className='header'>
					<input
						id='header-default'
						type='radio'
						className='collapse'
						checked='checked'
						name='siteheader'
					/>
					<input
						id='header-shown'
						type='radio'
						className='collapse'
						name='siteheader'
					/>
					<input
						id='header-hidden'
						type='radio'
						className='collapse'
						name='siteheader'
					/>

					{/* Top Info Bar */}
					<div className='infobar xs-hidden'>
						<div className='container'>
							<div className='cols-list pull-left cols-md'>
								<div className='list-item contact'>
									<span className='info-icon' aria-label='Address'>
										<i className='fas fa-home' aria-hidden='true'></i>
									</span>

									<a
										href='https://g.page/BRComputers?share'
										target='_blank'
									>
										363 East Main Street, Kutztown, PA 19530
									</a>
								</div>

								<div className='list-item contact'>
									<span className='info-icon' aria-label='Phone'>
										<i className='fas fa-phone'></i>
									</span>

									<a href='tel:4846418083'>(484) 641-8083</a>
								</div>

								<div className='list-item contact'>
									<span className='info-icon' aria-label='Hours'>
										<i
											className='fas fa-clock'
											aria-hidden='true'
										></i>
									</span>
									<strong>Monday - Friday:</strong> 9AM - 5PM
								</div>
							</div>

							<div className='cols-list pull-right cols-md socials'>
								<div className='list-item'>
									<a
										href='https://www.facebook.com/BRComputers'
										target='_blank'
										aria-label='Facebook'
									>
										<i
											className='fab fa-facebook-f'
											aria-hidden='true'
										></i>
									</a>
								</div>

								<div className='list-item'>
									<a
										href='https://www.instagram.com/brcomputers/'
										target='_blank'
										aria-label='Instagram'
									>
										<i
											className='fab fa-instagram'
											aria-hidden='true'
										></i>
									</a>
								</div>

								<div className='list-item'>
									<a
										href='mailto:info@bandrcomputers.com'
										target='_blank'
										aria-label='Email'
									>
										<i
											className='far fa-envelope'
											aria-hidden='true'
										></i>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Nav Bar */}
					<nav className='stick-menu menu-wrap simple line'>
						<div className='menu-container menu-row'>
							<div className='logo'>
								<a href='https://www.bandrcomputers.com'>
									<img src={brSmall} alt='B & R Computers' />
								</a>
							</div>

							<div className='header-toggler pull-right xs-shown'>
								<label
									className='header-shown-sign'
									for='header-hidden'
								>
									<i className='fas fa-times' aria-hidden='true'></i>
								</label>
								<label
									className='header-hidden-sign'
									for='header-shown'
								>
									<i className='fas fa-bars' aria-hidden='true'></i>
								</label>
							</div>

							<div className='clearfix xs-shown'></div>

							<div className='menu'>
								<ul className='menu-items menu-no-sides'>
									<li>
										<a href='/'>Home</a>
										<span className='toggle-icon'>
											<i
												className='fas fa-chevron-down'
												aria-hidden='true'
											></i>
										</span>
									</li>

									<li>
										<a href='/services.html'>Services</a>

										<span className='toggle-icon'>
											<i
												className='fas fa-chevron-down'
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
										<a href='/portal.html'>Customer Portal</a>

										<span className='toggle-icon'>
											<i
												className='fas fa-chevron-down'
												aria-hidden='true'
											></i>
										</span>

										<ul>
											<li>
												<a href='/portal.html#signIn'>Sign In</a>
											</li>

											<li>
												<a href='/portal.html#existing'>
													Existing Ticket Lookup
												</a>
											</li>

											<li>
												<a href='/portal.html#new'>
													Create a New Ticket
												</a>
											</li>
										</ul>
									</li>

									<li>
										<a href='/about-us.html'>About Us</a>
									</li>

									<li>
										<a href='/contact-us.html'>Contact Us</a>

										<span className='toggle-icon'>
											<i
												className='fas fa-chevron-down'
												aria-hidden='true'
											></i>
										</span>

										<ul className='left'>
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

				<section className='with-bg solid-section'>
					<div className='fix-image-wrap parallax' id='img1'></div>
					<div className='theme-back'></div>
					<div className='container page-info'>
						<div className='section-alt-head container-md'>
							<h1
								className='section-title text-upper text-lg'
								data-inview-showup='showup-translate-right'
							>
								Blog
							</h1>
						</div>
					</div>

					<div className='section-footer'>
						<div
							className='container'
							data-inview-showup='showup-translate-down'
						>
							<ul className='page-path'>
								<li>
									<a href='index.html'>Home</a>
								</li>

								<li className='path-separator'>
									<i
										className='fas fa-chevron-right'
										aria-hidden='true'
									></i>
								</li>

								<li>Blog</li>
							</ul>
						</div>
					</div>
				</section>
				<div className='clearfix page-sidebar-right container'>
					<div className='page-content'>
						<section className='content-section'>
							<div className='articles'>
								<article
									className='article'
									data-inview-showup='showup-translate-up'
								>
									<a
										href='article.html'
										className='block-link text-center offs-lg'
									>
										<span className='image-wrap'>
											<StaticImage
												className='image'
												src='http://via.placeholder.com/960x540'
												alt=''
											/>
										</span>
										<span className='hover'>
											<span className='hover-show'>
												<span className='back'></span>
												<span className='content'>
													<i
														className='fas fa-search'
														aria-hidden='true'
													></i>
												</span>
											</span>
										</span>
										<span className='date-square main-bg text-center pos-bottom pos-right'>
											<span className='middle-block'>
												<span className='month'>July</span>
												<span className='day'>15</span>
												<span className='year'>2017</span>
											</span>
										</span>
									</a>
									<h3 className='offs-sm'>
										<a className='content-link' href='article.html'>
											What is BGA
										</a>
									</h3>
									<div className='category'>
										Category:{' '}
										<a className='text-upper' href='blog.html'>
											micro chip repair
										</a>
										,{' '}
										<a className='text-upper' href='blog.html'>
											technology
										</a>
									</div>
									<p>
										A ball grid array (BGA) is a type of surface-mount
										packaging (a chip carrier) used for integrated
										circuits. BGA packages are used to permanently
										mount devices such as microprocessors. A BGA can
										provide more interc... pins than can be put on a
										dual in-line or flat package. The whole bottom
										surface of the device can be used, instead of just
										the perimeter. The leads are also on average
										shorter than with a perimeter-only type, leading
										to better performance at high speeds. Soldering of
										BGA devices requires precise control and is
										usually done by automated processes. BGA devices
										are not suitable for socket mounting, normal
										distribution of letters, as opposed to using
										'Content here, content here', making it look like
										readable English.
									</p>
									<div className='table'>
										<div className='col col-middle'>
											<div className='author'>
												Posted by{' '}
												<span className='text-colorful'>admin</span>
											</div>
										</div>
										<div className='col text-right'>
											<a
												href='article.html'
												className='btn btn-md btns-bordered text-upper'
											>
												read more
											</a>
										</div>
									</div>
								</article>
								<article
									className='article'
									data-inview-showup='showup-translate-up'
								>
									<a
										href='article.html'
										className='block-link text-center offs-lg'
									>
										<span className='image-wrap'>
											<StaticImage
												className='image'
												src='http://via.placeholder.com/960x540'
												alt=''
											/>
										</span>
										<span className='hover'>
											<span className='hover-hidden'>
												<span className='content op'>
													<i
														className='fas fa-3x fa-play-circle'
														aria-hidden='true'
													></i>
												</span>
											</span>
											<span className='hover-show'>
												<span className='back'></span>
												<span className='content'>
													<i
														className='fas fa-play'
														aria-hidden='true'
													></i>
												</span>
											</span>
										</span>
										<span className='date-square main-bg text-center pos-bottom pos-right'>
											<span className='middle-block'>
												<span className='month'>July</span>
												<span className='day'>12</span>
												<span className='year'>2017</span>
											</span>
										</span>
									</a>
									<h3 className='offs-sm'>
										<a className='content-link' href='article.html'>
											Calibrating the Home button in iPhone, iPad and
											iPod touch
										</a>
									</h3>
									<div className='category'>
										Category:{' '}
										<a className='text-upper' href='blog.html'>
											iphone
										</a>
										,{' '}
										<a className='text-upper' href='blog.html'>
											thechnology
										</a>
									</div>
									<p>
										Over time, most owners of iOS-devices can have a
										small, but rather unpleasant problem with the Home
										button, which starts responding to the presses
										through time. Usually this does not happen
										immediately, but after about 1.5-2 years from the
										date of purchase.pins than can be put on a dual
										in-line or flat package. The whole bottom surface
										of the device can be used, instead of just the
										perimeter. The leads are also on average shorter
										than with a perimeter-only type, leading to better
										performance at high speeds. Soldering of BGA
										devices requires precise control and is usually
										done by automated processes. BGA devices are not
										suitable for socket mounting.normal distribution
										of letters, as opposed to using 'Content here,
										content here', making it look like readable
										English.
									</p>
									<div className='table'>
										<div className='col col-middle'>
											<div className='author'>
												Posted by{' '}
												<span className='text-colorful'>admin</span>
											</div>
										</div>
										<div className='col text-right'>
											<a
												href='article.html'
												className='btn btn-md btns-bordered text-upper'
											>
												read more
											</a>
										</div>
									</div>
								</article>
								<article
									className='article'
									data-inview-showup='showup-translate-up'
								>
									<a
										href='article.html'
										className='block-link text-center offs-lg'
									>
										<span className='image-wrap'>
											<StaticImage
												className='image'
												src='http://via.placeholder.com/960x540'
												alt=''
											/>
										</span>
										<span className='hover'>
											<span className='hover-show'>
												<span className='back'></span>
												<span className='content'>
													<i
														className='fas fa-search'
														aria-hidden='true'
													></i>
												</span>
											</span>
										</span>
										<span className='date-square main-bg text-center pos-bottom pos-right'>
											<span className='middle-block'>
												<span className='month'>July</span>
												<span className='day'>11</span>
												<span className='year'>2017</span>
											</span>
										</span>
									</a>
									<h3 className='offs-sm'>
										<a className='content-link' href='article.html'>
											Replace videochip
										</a>
									</h3>
									<div className='category'>
										Category:{' '}
										<a className='text-upper' href='blog.html'>
											BGA
										</a>
										,{' '}
										<a className='text-upper' href='blog.html'>
											thechnology
										</a>
										,{' '}
										<a className='text-upper' href='blog.html'>
											replace
										</a>
									</div>
									<p>
										Over time, most owners of iOS-devices can have a
										small, but rather unpleasant problem with the Home
										button, which starts responding to the presses
										through time. Usually this does not happen
										immediately, but after about 1.5-2 years from the
										date of purchase.pins than can be put on a dual
										in-line or flat package. The whole bottom surface
										of the device can be used, instead of just the
										perimeter. The leads are also on average shorter
										than with a perimeter-only type, leading to better
										performance at high speeds. Soldering of BGA
										devices requires precise control and is usually
										done by automated processes. BGA devices are not
										suitable for socket mounting.normal distribution
										of letters, as opposed to using 'Content here,
										content here', making it look like readable
										English.
									</p>
									<div className='table'>
										<div className='col col-middle'>
											<div className='author'>
												Posted by{' '}
												<span className='text-colorful'>admin</span>
											</div>
										</div>
										<div className='col text-right'>
											<a
												href='article.html'
												className='btn btn-md btns-bordered text-upper'
											>
												read more
											</a>
										</div>
									</div>
								</article>
							</div>
							<div
								className='text-center shift-lg'
								data-inview-showup='showup-translate-up'
							>
								<div className='paginator'>
									<a href='#' className='previous'>
										<i
											className='fas fa-angle-left'
											aria-hidden='true'
										></i>
									</a>
									<span className='active'>2</span>
									<a href='#'>3</a>
									<span>...</span>
									<a href='#'>12</a>
									<a href='#' className='next'>
										<i
											className='fas fa-angle-right'
											aria-hidden='true'
										></i>
									</a>
								</div>
							</div>
						</section>
					</div>
					<aside className='page-sidebar content-section'>
						<section
							className='side-content-section'
							data-inview-showup='showup-translate-up'
						>
							<h5 className='shift-sm offs-md'>Our Services</h5>

							<ul className='spaced-list text-medium solid-color'>
								<li>
									<a className='muted-solid-link block-md' href='#'>
										Repairs & Upgrades
									</a>
								</li>

								<li>
									<a className='muted-solid-link block-md' href='#'>
										Custom-Built Desktops
									</a>
								</li>

								<li>
									<a className='muted-solid-link block-md' href='#'>
										Managed Services
									</a>
								</li>

								<li>
									<a className='muted-solid-link block-md' href='#'>
										Remote Support
									</a>
								</li>

								<li>
									<a className='muted-solid-link block-md' href='#'>
										Refurbished Computers
									</a>
								</li>

								<li>
									<a className='muted-solid-link block-md' href='#'>
										On-Site Consultations / Repairs
									</a>
								</li>
							</ul>
						</section>

						<div
							className='line-sides main-bg out-lg'
							data-inview-showup='showup-translate-up'
						></div>

						<section
							className='side-content-section'
							data-inview-showup='showup-translate-up'
						>
							<h5 className='shift-sm offs-md'>Categories</h5>

							<ul className='list text-medium solid-color text-upper'>
								<li>
									<a href='#'>
										<i
											className='fas fa-angle-right'
											aria-hidden='true'
										></i>
										&nbsp;&nbsp;&nbsp;&nbsp;computer
									</a>
								</li>

								<li>
									<a href='#'>
										<i
											className='fas fa-angle-right'
											aria-hidden='true'
										></i>
										&nbsp;&nbsp;&nbsp;&nbsp;micro chip repair
									</a>
								</li>

								<li>
									<a href='#'>
										<i
											className='fas fa-angle-right'
											aria-hidden='true'
										></i>
										&nbsp;&nbsp;&nbsp;&nbsp;technology
									</a>
								</li>

								<li>
									<a href='#'>
										<i
											className='fas fa-angle-right'
											aria-hidden='true'
										></i>
										&nbsp;&nbsp;&nbsp;&nbsp;iphone
									</a>
								</li>

								<li>
									<a href='#'>
										<i
											className='fas fa-angle-right'
											aria-hidden='true'
										></i>
										&nbsp;&nbsp;&nbsp;&nbsp;replace
									</a>
								</li>
							</ul>
						</section>

						<div
							className='line-sides main-bg out-lg'
							data-inview-showup='showup-translate-up'
						></div>

						<section
							className='side-content-section'
							data-inview-showup='showup-translate-up'
						>
							<div className='block-md muted-bg'>
								<h5 className='text-upper'>Free consultation</h5>
								<p>
									Get answers and advice from people you want it from.
								</p>
								<div className='buttons-block text-right'>
									<a
										className='btn btn-md text-upper'
										href='contact-us.html'
									>
										contact us
									</a>
								</div>
							</div>
						</section>
					</aside>
				</div>

				<a href='#' className='scroll-top disabled'>
					<i className='fas fa-angle-up' aria-hidden='true'></i>
				</a>
				<div
					className='singlepage-block collapse alt-bg'
					data-block='search'
					data-show-block-className='animation-scale-top-right'
					data-hide-block-className='animation-unscale-top-right'
				>
					<a href='#' className='close-link' data-close-block>
						<i className='fas fa-times' aria-hidden='true'></i>
					</a>
					<div className='pos-v-center col-12'>
						<div className='container'>
							<form action='#'>
								<div className='row cols-md rows-md'>
									<div className='lg-col-9 md-col-8 sm-col-12'>
										<div className='field-group'>
											<div className='field-wrap'>
												<input
													className='field-control'
													name='search'
													placeholder='Search Tags'
													required='required'
												/>

												<span className='field-back'></span>
											</div>
										</div>
									</div>
									<div className='lg-col-3 md-col-4 sm-col-6'>
										<button
											className='btn btns-white-bordered text-upper'
											type='submit'
										>
											search
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>

				<footer className='footer alt-bg'>
					<div className='container only-xs-text-justify-center'>
						<div className='solid-section tight'>
							<div className='row cols-md'>
								<div className='sm-col-3'>
									<div className='footer-logo'>
										<StaticImage
											src='../images/br-small-white.webp'
											alt='B & R Computers'
										/>
									</div>
									<div className='footer-text sm-text-justify'>
										Your Trusted Technology Partner
									</div>
								</div>
								<div className='sm-col-8 sm-push-1'>
									<div className='row cols-md'>
										<div className='sm-col-4'>
											<div className='footer-title text-upper'>
												Additional links
											</div>
											<ul className='list'>
												<li>
													<a
														className='content-link'
														href='/index.html'
													>
														Home
													</a>
												</li>
												<li>
													<a
														className='content-link'
														href='/portal.html'
													>
														Customer Portal
													</a>
												</li>
												<li>
													<a
														className='content-link'
														href='https://www.ebay.com/str/brcomputers'
														target='_blank'
													>
														Shop
													</a>
												</li>
												<li>
													<a
														className='content-link'
														href='/services.html'
													>
														Services
													</a>
												</li>
												<li>
													<a
														className='content-link'
														href='/about-us.html'
													>
														About Us
													</a>
												</li>
												<li>
													<a
														className='content-link'
														href='/terms.html'
													>
														Terms of Use
													</a>
												</li>
												<li>
													<a
														className='content-link'
														href='/privacy.html'
													>
														Privacy Policy
													</a>
												</li>
												<li>
													<a
														className='content-link'
														href='/contact-us.html'
													>
														Contact Us
													</a>
												</li>
											</ul>
										</div>

										<div className='sm-col-4'>
											<div className='footer-title text-upper'>
												Services
											</div>
											<ul className='list'>
												<li>
													<a
														className='content-link'
														href='/services/repairs-upgrades.html'
													>
														Repairs &amp; Upgrades
													</a>
												</li>

												<li>
													<a
														className='content-link'
														href='/services/custom-desktops.html'
													>
														Custom-Built Desktops
													</a>
												</li>

												<li>
													<a
														className='content-link'
														href='/services/managed-services.html'
													>
														Managed Services
													</a>
												</li>

												<li>
													<a
														className='content-link'
														href='/services/remote-support.html'
													>
														Remote Support
													</a>
												</li>

												<li>
													<a
														className='content-link'
														href='/services/refurbished-computers.html'
													>
														Refurbished Computer Sales
													</a>
												</li>

												<li>
													<a
														className='content-link'
														href='/services/on-site.html'
													>
														On-Site Consultations / Repairs
													</a>
												</li>
											</ul>
										</div>

										<div className='sm-col-4'>
											<div className='footer-title text-upper'>
												Socials
											</div>

											<div className='cols-list social-blocks inline-block'>
												<a
													href='https://www.facebook.com/BRComputers'
													target='_blank'
													className='list-item'
													aria-label='Facebook'
												>
													<i
														className='fab fa-facebook-f'
														aria-hidden='true'
													></i>
												</a>

												<a
													href='https://www.instagram.com/brcomputers/'
													target='_blank'
													className='list-item'
													aria-label='Instagram'
												>
													<i
														className='fab fa-instagram'
														aria-hidden='true'
													></i>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='footer-copyrights text-center ins-md solid-border-top'>
							&copy; 2022 <b>B & R Computers</b>. All Rights Reserved
						</div>
					</div>
				</footer>

				{/* <!-- jQuery library --> */}
				<script src='./assets/jquery/jquery-3.3.1.js'></script>

				{/* <!-- Paralax.js --> */}
				<script src='./assets/parallax.js/parallax.js'></script>

				{/* <!-- FlexSlider --> */}
				<script src='./assets/flexslider/jquery.flexslider-min.js'></script>

				{/* <!-- OwlCarousel2 --> */}
				<script src='./assets/owlcarousel2/owl.carousel.min.js'></script>

				{/* <!-- Shuffle --> */}
				<script src='./assets/shuffle/shuffle.min.js'></script>

				{/* <!-- Waypoints --> */}
				<script src='./assets/waypoints/jquery.waypoints.min.js'></script>

				{/* <!-- Chosen --> */}
				<script src='./assets/chosen/chosen.jquery.min.js'></script>

				{/* <!-- Pentix scripts start --> */}
				<script
					src='./assets/pentix/js/pentix.js'
					type='text/javascript'
				></script>
				{/* <!-- Pentix scripts end --> */}

				{/* <!-- Inits theme scripts --> */}
				<script src='./assets/js/script.js' type='text/javascript'></script>
			</body>
		</>
	)
}

export default IndexPage

export const Head = () => <title>Home Page</title>
