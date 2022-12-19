import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function BlogList({ data }) {
	const { nodes } = data.allMarkdownRemark

	return (
		<Layout pageTitle={frontmatter.title}>
			{nodes.map(({ node }) => {
				const title = node.frontmatter.title || node.fields.slug
				return <div key={node.fields.slug}>{title}</div>
			})}
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
