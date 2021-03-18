const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/../src`,
        name: `components`,
        // ignore: [
        //   `**/\.*`,  // ignore files starting with a dot
        //   `**/*\.js`,  // ignore files starting with a dot
        //   `**/*\.jsx`,  // ignore files starting with a dot
        //   `**/*\.snap`,  // ignore files starting with a dot
        //   `**/*\.css`,  // ignore files starting with a dot
        //   `**/*\.scss`,  // ignore files starting with a dot
        //   `utils`,
        // ],
      },
    },
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: `${__dirname}/../src`,
    //     ignore: {
    //       // Example: Ignore `file.example.js`, `dir/s/file.example.tsx`
    //       patterns: [`**/*.(js|ts)?(x)`],
    //     }
    //   },
    // },
    // Note this will throw a warning about conflicting field types during build, but it is O.K.
    // https://github.com/gatsbyjs/gatsby/issues/7027
    'gatsby-transformer-react-docgen',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          components: require.resolve("./src/templates/component-mdx.js"),
        },
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
