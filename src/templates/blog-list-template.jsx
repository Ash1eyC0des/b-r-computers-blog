import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby'

const BlogList = ({ data, pageContext }) => {
	const posts = data.allMarkdownRemark.edges
	const { currentPage, numPages } = pageContext
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
	const nextPage = (currentPage + 1).toString()

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
									<img className='image' src={image} alt='' />
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
								Categories:{' '}
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
					{!isFirst && (
						<Link to={prevPage} className='previous'>
							<i className='fas fa-angle-left' aria-hidden='true'></i>
						</Link>
					)}

					{Array.from({ length: numPages }, (_, i) => (
						<Link
							to={`/${i === 0 ? '' : i + 1}`}
							className={i + 1 === currentPage ? 'active' : ''}
						>
							{i + 1}
						</Link>
					))}

					{!isLast && (
						<Link to={nextPage} rel='next' className='next'>
							<i className='fas fa-angle-right' aria-hidden='true'></i>
						</Link>
					)}
				</div>
			</div>
		</Layout>
	)
}

export const blogListQuery = graphql`
	query blogListQuery($skip: Int!, $limit: Int!) {
		allMarkdownRemark(
			sort: { frontmatter: { date: DESC } }
			limit: $limit
			skip: $skip
		) {
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

export default BlogList
