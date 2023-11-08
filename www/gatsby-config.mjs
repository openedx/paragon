import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import rehypeSlugPlugin from 'rehype-slug';
import rehypeAutolinkHeadingsPlugin from 'rehype-autolink-headings';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const segmentPlugin = {
  resolve: 'gatsby-plugin-segment-js',
  options: {
    prodKey: process.env && process.env.SEGMENT_KEY,
    devKey: process.env && process.env.SEGMENT_KEY,
    trackPage: true,
    trackPageDelay: 100,
  },
};

const axePlugin = {
  resolve: 'gatsby-plugin-react-axe',
  options: {
    debounce: 1000,
    showInProduction: false,
  },
};

const plugins = [
  {
    resolve: 'gatsby-plugin-sass',
    options: {
      cssLoaderOptions: {
        modules: {
          namedExport: false,
        },
      },
    },
  },
  'gatsby-plugin-mdx-source-name',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      start_url: '/',
      icon: 'src/images/paragon-icon.png', // This path is relative to the root of the site.
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/../src`,
      ignore: ['**/*.(snap|test.jsx)'],
      name: 'components',
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/pages`,
      name: 'pages',
    },
  },
  // {
  //   resolve: 'gatsby-source-filesystem',
  //   options: {
  //     path: `${__dirname}/../CHANGELOG.md`,
  //     name: 'changelog',
  //   },
  // },
  // Note this will throw a warning about conflicting field types during build, but it is O.K.
  // https://github.com/gatsbyjs/gatsby/issues/7027
  'gatsby-transformer-react-docgen',
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      extensions: ['.mdx', '.md'],
      mdxOptions: {
        rehypePlugins: [
          [
            rehypeMdxCodeProps,
            {
              tagName: 'code'
            },
          ],
          rehypeSlugPlugin,
          [
            rehypeAutolinkHeadingsPlugin,
            {
              behavior: 'append',
              content: {
                type: 'element',
                tagName: 'span',
                properties: {
                  className: 'pgn-doc__anchor',
                },
                children: [
                  {type: 'text', value: '#'},
                ],
              },
            },
          ]
        ],
      }
    },
  },
  {
    resolve: 'gatsby-plugin-page-creator',
    options: {
      path: `${__dirname}/src/pages`,
      ignore: ['insights.tsx', '**/*.(md|mdx)'],
    },
  },
  'gatsby-plugin-perf-budgets',
  'gatsby-plugin-webpack-bundle-analyser-v2'
];

if (process.env && process.env.SEGMENT_KEY) {
  plugins.push(segmentPlugin);
}

if (process.env && process.env.FEATURE_ENABLE_AXE) {
  plugins.push(axePlugin);
}

const config = {
  siteMetadata: {
    title: 'Paragon Design System',
    description: 'Technical documentation for the Paragon Design System.',
    author: '@edx',
  },
  // Match the location of the site on github pages if no path prefix is specified
  pathPrefix: process.env.PATH_PREFIX || '',
  plugins,
};

export default config;
