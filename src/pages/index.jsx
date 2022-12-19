import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
	const posts = data.allMarkdownRemark.edges
	console.log(posts)
	return (
		<Layout pageTitle='Blog'>
			<div className='articles'>
				{posts.map(({ node }) => {
					const title = node.frontmatter.title || node.fields.slug
					const date = node.frontmatter.date.split(' ')
					const month = date[0]
					const day = date[1]
					const year = date[2]
					const slug = node.fields.slug
					const excerpt = node.excerpt
					const author = node.frontmatter.author
					const image = node.frontmatter.image

					return (
						<article
							className='article'
							data-inview-showup='showup-translate-up'
						>
							<a
								href={`.${slug}`}
								className='block-link text-center offs-lg'
							>
								<span className='image-wrap'>
									<StaticImage className='image' src={image} alt='' />
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
										<span className='month'>{month}</span>
										<span className='day'>{day}</span>
										<span className='year'>{year}</span>
									</span>
								</span>
							</a>
							<h3 className='offs-sm'>
								<a className='content-link' href='article.html'>
									{title}
								</a>
							</h3>
							<div className='category'>
								Category: Categories:{' '}
								{node.frontmatter.categories.map((c, i, a) => {
									if (i !== a.length - 1) {
										return (
											<a className='text-upper' href='/'>
												{c},{' '}
											</a>
										)
									} else {
										return (
											<a className='text-upper' href='/'>
												{c}
											</a>
										)
									}
								})}
							</div>
							<p>{excerpt}</p>
							<div className='table'>
								<div className='col col-middle'>
									<div className='author'>
										Posted by{' '}
										<span className='text-colorful'>{author}</span>
									</div>
								</div>
								<div className='col text-right'>
									<a
										href={slug}
										className='btn btn-md btns-bordered text-upper'
									>
										read more
									</a>
								</div>
							</div>
						</article>
					)
				})}
			</div>
			<div
				className='text-center shift-lg'
				data-inview-showup='showup-translate-up'
			>
				<div className='paginator'>
					<a href='#' className='previous'>
						<i className='fas fa-angle-left' aria-hidden='true'></i>
					</a>
					<span className='active'>2</span>
					<a href='#'>3</a>
					<span>...</span>
					<a href='#'>12</a>
					<a href='#' className='next'>
						<i className='fas fa-angle-right' aria-hidden='true'></i>
					</a>
				</div>
			</div>
		</Layout>
	)
}

export const blogListQuery = graphql`
	query {
		allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMM D YYYY")
						image
						title
						categories
						author
					}
					excerpt
				}
			}
		}
	}
`

export const Head = () => <Seo title='Blog' />

export default IndexPage
