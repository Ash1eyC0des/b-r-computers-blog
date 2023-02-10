const path = require(`path`)
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async function ({ actions, graphql }) {
	const { createPage } = actions
	const result = await graphql(`
		{
			postsRemark: allMarkdownRemark(
				sort: { frontmatter: { date: DESC } }
				limit: 2000
			) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							tags
						}
					}
				}
			}
			tagsGroup: allMarkdownRemark(limit: 2000) {
				group(field: { frontmatter: { tags: SELECT } }) {
					fieldValue
				}
			}
		}
	`)

	// handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`)
		return
	}

	// Create blog post list pages
	const posts = result.data.postsRemark.edges
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

	// Create category pages
	const tags = result.data.tagsGroup.group

	tags.forEach((tag, i) => {
		createPage({
			path: `/categories/${_.kebabCase(tag.fieldValue)}/`,
			component: path.resolve('./src/templates/categories.jsx'),
			context: {
				tag: tag.fieldValue,
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
