import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
const _ = require('lodash')

export default function BlogPostTemplate({ data }) {
	const { markdownRemark, allMarkdownRemark } = data
	const { frontmatter, html, fields } = markdownRemark
	const date = frontmatter.date.split(' ')
	const month = date[0]
	const day = date[1]
	const slug = fields.slug
	const slugs = allMarkdownRemark.nodes.map(({ fields }) => fields.slug)
	const tags = frontmatter.tags

	return (
		<Layout pageTitle={frontmatter.title}>
			<div className='article'>
				<div
					className='cols-md offs-md'
					data-inview-showup='showup-translate-up'
				>
					<div className='table'>
						<div className='col col-tight'>
							<span className='date-square small main-bg text-center'>
								<span className='middle-block'>
									<span className='day'>{day}</span>
									<span className='month'>{month}</span>
								</span>
							</span>
						</div>
						<div className='col col-middle'>
							<h3 className='reset-offs text-upper'>
								{frontmatter.title}
							</h3>
						</div>
					</div>
				</div>
				<img
					className='col-12 offs-md'
					data-inview-showup='showup-translate-up'
					src={frontmatter.image}
					alt={frontmatter.title}
				/>
				<div className='category' data-inview-showup='showup-translate-up'>
					Categories:{' '}
					{tags.map((c, i, a) => {
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
				<div
					className='content-text clearfix'
					data-inview-showup='showup-translate-up'
					dangerouslySetInnerHTML={{ __html: html }}
				></div>
				<div
					className='top-separator out-lg'
					data-inview-showup='showup-translate-up'
				></div>
				<div
					className='table offs-lg'
					data-inview-showup='showup-translate-up'
				>
					<div className='col col-middle'>
						<div className='author'>
							Posted by{' '}
							<span className='text-colorful'>{frontmatter.author}</span>
						</div>
					</div>
					<div className='col'>
						<div className='row cols-md pull-right share'>
							<div className='col'>Share:</div>
							<div className='col'>
								<div className='cols-list cols-sm'>
									<a
										href={`https://www.facebook.com/sharer.php?u=www.blog.bandrcomputers.com${fields.slug}`}
										target='_blank'
										className='list-item'
									>
										<i
											className='fab fa-facebook-f'
											aria-hidden='true'
										></i>
									</a>
									<a
										href={`http://twitter.com/share?text=${frontmatter.title} - B and R Computers&url=https://www.blog.bandrcomputers.com${fields.slug}`}
										target='_blank'
										className='list-item'
									>
										<i
											className='fab fa-twitter'
											aria-hidden='true'
										></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='clearfix' data-inview-showup='showup-translate-up'>
					{slug !== slugs[0] && (
						<Link
							to={slugs[slugs.indexOf(slug) - 1]}
							className='btn btn-md btns-bordered pull-left text-upper'
						>
							previous
						</Link>
					)}
					{slug !== slugs[slugs.length - 1] && (
						<Link
							to={slugs[slugs.indexOf(slug) + 1]}
							className='btn btn-md btns-bordered pull-right text-upper'
						>
							next
						</Link>
					)}
				</div>
			</div>
		</Layout>
	)
}

export const pageQuery = graphql`
	query ($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				date(formatString: "MMM D YYYY")
				image
				title
				tags
				author
			}
			fields {
				slug
			}
		}
		allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
			nodes {
				fields {
					slug
				}
			}
		}
	}
`
