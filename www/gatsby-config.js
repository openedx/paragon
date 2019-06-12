const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Paragon Documentation',
    description: 'Documentation for Paragon Pattern Library',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-mdx',
      options: {
        defaultLayouts: { default: path.resolve('./src/components/layout.jsx') },
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
  ],
};
