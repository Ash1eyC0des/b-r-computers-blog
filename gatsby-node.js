const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async function ({ actions, graphql }) {
	const { createPage } = actions
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

	// Create blog post list pages
	const posts = data.allMarkdownRemark.nodes
	const postsPerPage = 3
	const numPages = Math.ceil(posts.length / postsPerPage)

	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/` : `/${i + 1}`,
			component: path.resolve('./src/templates/blog-list-template.jsx'),
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
			},
		})
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name: `slug`,
			node,
			value,
		})
	}
}
