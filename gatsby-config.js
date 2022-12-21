/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	// flags: {
	// 	DEV_SSR: true,
	// },
	siteMetadata: {
		title: `B & R Computers`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	pathPrefix: '/blog',
	plugins: [
		'gatsby-plugin-netlify-cms',
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: `blog`,
				path: `${__dirname}/blog`,
			},
		},
		`gatsby-transformer-remark`,
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/favicon.png',
			},
		},
	],
}
