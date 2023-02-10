import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
const _ = require('lodash')

const Categories = ({ pageContext, data }) => {
	const { tag } = pageContext
	const { edges, totalCount } = data.allMarkdownRemark
	const tagHeader = `${totalCount} post${
		totalCount === 1 ? '' : 's'
	} tagged with "${tag}"`

	return (
		<Layout pageTitle='Blog'>
			<div className='articles'>
				<h2>{tagHeader}</h2>
				{edges.map(({ node }) => {
					const title = node.frontmatter.title || node.fields.slug
					const date = node.frontmatter.date.split(' ')
					const month = date[0]
					const day = date[1]
					const year = date[2]
					const slug = node.fields.slug
					const excerpt = node.excerpt
					const author = node.frontmatter.author
					const image = node.frontmatter.image
					const categories = node.frontmatter.tags

					return (
						<article
							key={slug}
							className='article'
							data-inview-showup='showup-translate-up'
						>
							<a href={slug} className='block-link text-center offs-lg'>
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
								{categories.map((c, i, a) => {
									if (i !== a.length - 1) {
										return (
											<a
												key={c}
												className='text-upper'
												href={`/categories/${_.kebabCase(c)}/`}
											>
												{c},{' '}
											</a>
										)
									} else {
										return (
											<a
												key={c}
												className='text-upper'
												href={`/categories/${_.kebabCase(c)}/`}
											>
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
			></div>
		</Layout>
	)
}

Categories.propTypes = {
	pageContext: PropTypes.shape({
		tag: PropTypes.string.isRequired,
	}),
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			totalCount: PropTypes.number.isRequired,
			edges: PropTypes.arrayOf(
				PropTypes.shape({
					node: PropTypes.shape({
						frontmatter: PropTypes.shape({
							title: PropTypes.string.isRequired,
						}),
						fields: PropTypes.shape({
							slug: PropTypes.string.isRequired,
						}),
					}),
				}).isRequired
			),
		}),
	}),
}

export default Categories

export const pageQuery = graphql`
	query ($tag: String) {
		allMarkdownRemark(
			limit: 2000
			sort: { frontmatter: { date: DESC } }
			filter: { frontmatter: { tags: { in: [$tag] } } }
		) {
			totalCount
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMM D YYYY")
						image
						title
						tags
						author
					}
					excerpt
				}
			}
		}
	}
`
