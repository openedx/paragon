require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const segmentPlugin = {
  resolve: `gatsby-plugin-segment-js`,
  options: {
    prodKey: process.env && process.env.SEGMENT_KEY,
    devKey: process.env && process.env.SEGMENT_KEY,
    trackPage: true,
    trackPageDelay: 100,
  }
};

const plugins = [
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
    resolve: 'gatsby-plugin-react-axe',
    options: {
      debounce: 1000,
      showInProduction: false,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/../src`,
      name: `components`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/../CHANGELOG.md`,
      name: `changelog`,
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
            behavior: 'append',
            content: {
              type: 'element',
              tagName: 'span',
              properties: {
                className: 'pgn-doc__anchor',
              },
              children: [
                { type: 'text', value: '#' }
              ],
            },
          },
        ],
      ],
    },
  },
  {
    resolve: 'gatsby-plugin-page-creator',
    options: {
      path: `${__dirname}/src/pages`,
      ignore: ['insights.jsx'],
    },
  },
];

if (process.env && process.env.SEGMENT_KEY) {
  plugins.push(segmentPlugin)
}

module.exports = {
  siteMetadata: {
    title: `Paragon Design System`,
    description: `Technical documentation for the Paragon Design System.`,
    author: `@edx`,
  },
  // Match the location of the site on github pages if no path prefix is specified
  pathPrefix: 'PATH_PREFIX' in process.env ? process.env.PATH_PREFIX : '/paragon',
  plugins: plugins,
}
