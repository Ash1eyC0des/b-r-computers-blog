const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async function ({ actions, graphql }) {
	const { data } = await graphql(`
		query {
			allMarkdownRemark {
				nodes {
					fields {
						slug
					}
				}
			}
		}
	`)
	// Create blog-list pages
	const posts = result.data.allMarkdownRemark.edges
	const postsPerPage = 6
	const numPages = Math.ceil(posts.length / postsPerPage)
	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/blog` : `/blog/${i + 1}`,
			component: path.resolve('./src/templates/blog-list-template.js'),
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
			},
		})
	})
}

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` })
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
	}
}
