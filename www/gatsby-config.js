const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Paragon Documentation',
    description: 'Documentation for Paragon Pattern Library',
  },
  // Match the location of the site on github pages if no path prefix is specified
  pathPrefix: 'PATH_PREFIX' in process.env ? process.env.PATH_PREFIX : '/paragon',
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx'],
        defaultLayouts: {
          default: require.resolve('./src/components/mdx-layout.jsx'),
        },
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      // Will auto-generate favicon
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/paragon-icon.png',
      },
    },
    {
      // Using the layout plugin to prevent re-renders of nav sidebar between routes
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/layout.jsx'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/../src`,
      },
    },
    // Note this will throw a warning about conflicting field types during build, but it is O.K.
    // https://github.com/gatsbyjs/gatsby/issues/7027
    'gatsby-transformer-react-docgen',
  ],
};
