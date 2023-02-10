import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import brSmall from '../images/br-small.webp'
import ScrollButton from './ScrollButton'
const _ = require('lodash')

const Layout = ({ pageTitle, children }) => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				group(field: { frontmatter: { tags: SELECT } }) {
					fieldValue
				}
			}
		}
	`)

	const tags = data.allMarkdownRemark.group

	return (
		<>
			<body className='body'>
				<header className='header'>
					<input
						id='header-default'
						type='radio'
						className='collapse'
						defaultChecked='checked'
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
									htmlFor='header-hidden'
								>
									<i className='fas fa-times' aria-hidden='true'></i>
								</label>
								<label
									className='header-hidden-sign'
									htmlFor='header-shown'
								>
									<i className='fas fa-bars' aria-hidden='true'></i>
								</label>
							</div>

							<div className='clearfix xs-shown'></div>

							<div className='menu'>
								<ul className='menu-items menu-no-sides'>
									<li>
										<a href='https://www.bandrcomputers.com/'>Home</a>
										<span className='toggle-icon'>
											<i
												className='fas fa-chevron-down'
												aria-hidden='true'
											></i>
										</span>
									</li>

									<li>
										<a href='https://www.bandrcomputers.com/services'>
											Services
										</a>

										<span className='toggle-icon'>
											<i
												className='fas fa-chevron-down'
												aria-hidden='true'
											></i>
										</span>

										<ul>
											<li>
												<a href='https://www.bandrcomputers.com/services/repairs-upgrades'>
													Repairs & Upgrades
												</a>
											</li>

											<li>
												<a href='https://www.bandrcomputers.com/services/custom-desktops'>
													Custom-Built Desktops
												</a>
											</li>

											<li>
												<a href='https://www.bandrcomputers.com/services/managed-services'>
													Managed Services
												</a>
											</li>

											<li>
												<a href='https://www.bandrcomputers.com/services/remote-support'>
													Remote Support
												</a>
											</li>

											<li>
												<a href='https://www.bandrcomputers.com/services/refurbished-computers'>
													Refurbished Computers
												</a>
											</li>

											<li>
												<a href='https://www.bandrcomputers.com/services/on-site'>
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
										<a href='https://www.bandrcomputers.com/portal'>
											Customer Portal
										</a>

										<span className='toggle-icon'>
											<i
												className='fas fa-chevron-down'
												aria-hidden='true'
											></i>
										</span>

										<ul>
											<li>
												<a href='https://www.bandrcomputers.com/portal#signIn'>
													Sign In
												</a>
											</li>

											<li>
												<a href='https://www.bandrcomputers.com/portal#existing'>
													Existing Ticket Lookup
												</a>
											</li>

											<li>
												<a href='https://www.bandrcomputers.com/portal#new'>
													Create a New Ticket
												</a>
											</li>
										</ul>
									</li>

									<li>
										<a href='/'>Blog</a>
									</li>

									<li>
										<a href='https://www.bandrcomputers.com/about-us'>
											About Us
										</a>
									</li>

									<li>
										<a href='https://www.bandrcomputers.com/contact-us'>
											Contact Us
										</a>

										<span className='toggle-icon'>
											<i
												className='fas fa-chevron-down'
												aria-hidden='true'
											></i>
										</span>

										<ul className='left'>
											<li>
												<a href='https://www.bandrcomputers.com/contact-us'>
													Contact Us
												</a>
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
									<a href='https://www.bandrcomputers.com'>Home</a>
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
						<section className='content-section'>{children}</section>
					</div>
					<aside className='page-sidebar content-section'>
						<section
							className='side-content-section'
							data-inview-showup='showup-translate-up'
						>
							<h5 className='shift-sm offs-md'>Our Services</h5>

							<ul className='spaced-list text-medium solid-color'>
								<li>
									<a
										className='muted-solid-link block-md'
										href='https://www.bandrcomputers.com/services/repairs-upgrades'
									>
										Repairs & Upgrades
									</a>
								</li>

								<li>
									<a
										className='muted-solid-link block-md'
										href='https://www.bandrcomputers.com/services/custom-desktops'
									>
										Custom-Built Desktops
									</a>
								</li>

								<li>
									<a
										className='muted-solid-link block-md'
										href='https://www.bandrcomputers.com/services/managed-services'
									>
										Managed Services
									</a>
								</li>

								<li>
									<a
										className='muted-solid-link block-md'
										href='https://www.bandrcomputers.com/services/remote-support'
									>
										Remote Support
									</a>
								</li>

								<li>
									<a
										className='muted-solid-link block-md'
										href='https://www.bandrcomputers.com/services/refurbished-computers'
									>
										Refurbished Computers
									</a>
								</li>

								<li>
									<a
										className='muted-solid-link block-md'
										href='https://www.bandrcomputers.com/services/on-site'
									>
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
								{tags.map((tag) => {
									return (
										<li>
											<Link
												to={`/categories/${_.kebabCase(
													tag.fieldValue
												)}/`}
											>
												<i
													className='fas fa-angle-right'
													aria-hidden='true'
												></i>
												&nbsp;&nbsp;&nbsp;&nbsp;{tag.fieldValue}
											</Link>
										</li>
									)
								})}
								{/* <li>
									<a href='../categories/custom-desktops'>
										<i
											className='fas fa-angle-right'
											aria-hidden='true'
										></i>
										&nbsp;&nbsp;&nbsp;&nbsp;Custom Desktops
									</a>
								</li>

								<li>
									<a href='../categories/general-hardware'>
										<i
											className='fas fa-angle-right'
											aria-hidden='true'
										></i>
										&nbsp;&nbsp;&nbsp;&nbsp;General Hardware
									</a>
								</li>

								<li>
									<a href='../categories/general-software'>
										<i
											className='fas fa-angle-right'
											aria-hidden='true'
										></i>
										&nbsp;&nbsp;&nbsp;&nbsp;General Software
									</a>
								</li>

								<li>
									<a href='../categories/how-tos'>
										<i
											className='fas fa-angle-right'
											aria-hidden='true'
										></i>
										&nbsp;&nbsp;&nbsp;&nbsp;How Tos
									</a>
								</li>

								<li>
									<a href='../categories/refurbished-computers'>
										<i
											className='fas fa-angle-right'
											aria-hidden='true'
										></i>
										&nbsp;&nbsp;&nbsp;&nbsp;Refurbished Computers
									</a>
								</li>

								<li>
									<a href='../categories/repairs-and-upgrades'>
										<i
											className='fas fa-angle-right'
											aria-hidden='true'
										></i>
										&nbsp;&nbsp;&nbsp;&nbsp;Repairs and Upgrades
									</a>
								</li>

								<li>
									<a href='../categories/scams'>
										<i
											className='fas fa-angle-right'
											aria-hidden='true'
										></i>
										&nbsp;&nbsp;&nbsp;&nbsp;Scams
									</a>
								</li>

								<li>
									<a href='../categories/tips-and-tricks'>
										<i
											className='fas fa-angle-right'
											aria-hidden='true'
										></i>
										&nbsp;&nbsp;&nbsp;&nbsp;Tips and Tricks
									</a>
								</li> */}
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
									Let's chat about what our services can do to improve
									your daily business operations.
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

				<ScrollButton />

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
														href='https://www.bandrcomputers.com/'
													>
														Home
													</a>
												</li>
												<li>
													<a
														className='content-link'
														href='https://www.bandrcomputers.com/portal'
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
														href='https://www.bandrcomputers.com/services'
													>
														Services
													</a>
												</li>
												<li>
													<a
														className='content-link'
														href='https://www.bandrcomputers.com/about-us'
													>
														About Us
													</a>
												</li>
												<li>
													<a
														className='content-link'
														href='https://www.bandrcomputers.com/terms'
													>
														Terms of Use
													</a>
												</li>
												<li>
													<a
														className='content-link'
														href='https://www.bandrcomputers.com/privacy'
													>
														Privacy Policy
													</a>
												</li>
												<li>
													<a
														className='content-link'
														href='https://www.bandrcomputers.com/contact-us'
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
														href='https://www.bandrcomputers.com/services/repairs-upgrades'
													>
														Repairs &amp; Upgrades
													</a>
												</li>

												<li>
													<a
														className='content-link'
														href='https://www.bandrcomputers.com/services/custom-desktops'
													>
														Custom-Built Desktops
													</a>
												</li>

												<li>
													<a
														className='content-link'
														href='https://www.bandrcomputers.com/services/managed-services'
													>
														Managed Services
													</a>
												</li>

												<li>
													<a
														className='content-link'
														href='https://www.bandrcomputers.com/services/remote-support'
													>
														Remote Support
													</a>
												</li>

												<li>
													<a
														className='content-link'
														href='https://www.bandrcomputers.com/services/refurbished-computers'
													>
														Refurbished Computer Sales
													</a>
												</li>

												<li>
													<a
														className='content-link'
														href='https://www.bandrcomputers.com/services/on-site'
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
			</body>
		</>
	)
}

export default Layout
