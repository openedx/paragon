module.exports = {
  siteMetadata: {
    title: `Paragon Design System`,
    description: `Technical documentation for the Paragon Design System.`,
    author: `@edx`,
  },
  // Match the location of the site on github pages if no path prefix is specified
  pathPrefix: 'PATH_PREFIX' in process.env ? process.env.PATH_PREFIX : '/paragon',
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        icon: `src/images/paragon-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/../src`,
        name: `components`,
      },
    },
    // Note this will throw a warning about conflicting field types during build, but it is O.K.
    // https://github.com/gatsbyjs/gatsby/issues/7027
    "gatsby-transformer-react-docgen",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          components: require.resolve(
            "./src/templates/component-page-template.jsx"
          ),
          default: require.resolve(
            "./src/templates/default-mdx-page-template.jsx"
          ),
        },
        rehypePlugins: [
          require("rehype-slug"),
          [
            require("rehype-autolink-headings"),
            {
              behavior: 'prepend',
              properties: { /* intentionally blank to remove default properties */ },
              content: {
                type: 'element',
                tagName: 'span',
                properties: {
                  className: 'heading-icon-link',
                },
                children: [],
              },
            },
          ],
        ],
      },
    },
  ],
}
