const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Paragon Documentation',
    description: 'Documentation for Paragon Pattern Library',
  },
  // Match the location of the site on github pages
  pathPrefix: '/paragon/v2',
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-mdx',
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
  ],
};
