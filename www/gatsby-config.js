module.exports = {
  siteMetadata: {
    title: `Paragon Design System`,
    description: `Technical documentation for the Paragon Design System.`,
    author: `@edx`,
  },
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
      },
    },
  ],
}
