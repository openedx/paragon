const path = require('path');
const fs = require('fs');
const { INSIGHTS_PAGES } = require('../src/config');
const componentsUsage = require('../src/utils/componentsUsage');

async function createPages(graphql, actions, reporter) {
  // Destructure the createPage function from the actions object
  const { createPage, createRedirect } = actions;
  // MDX transforms markdown generated by gatsby-transformer-react-docgen
  // This query filters out all of those markdown nodes and assumes all others
  // are for page creation purposes.
  const result = await graphql(`
    query {
      allMdx(
        filter: {
          parent: {
            internal: { owner: { nin: "gatsby-transformer-react-docgen" } }
          }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              components
            }
            slug
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading createPages query');
  }
  // Create component detail pages.
  const components = result.data.allMdx.edges;

  // you'll call `createPage` for each result
  // eslint-disable-next-line no-restricted-syntax
  for (const { node } of components) {
    const componentDir = node.slug.split('/')[0];
    const cssVariablesData = [];

    const pathToComponents = fs.readdirSync(`../src/${componentDir}`);

    pathToComponents.forEach(componentFile => {
      if (componentFile.endsWith('.scss')) {
        const fileData = fs.readFileSync(`../src/${componentDir}/${componentFile}`, 'utf-8');
        const customCSSVariables = fileData.match(/var\((\w|-|_)*\)/g);

        customCSSVariables?.forEach(variable => {
          if (!cssVariablesData.includes(variable)) {
            cssVariablesData.push(variable);
          }
        });
      }
    });

    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve('./src/templates/component-page-template.tsx'),
      // You can use the values in this context in
      // our page layout component
      context: {
        id: node.id, 
        components: node.frontmatter.components || [], 
        cssVariablesData,
        componentsUsageInsights: Object.keys(componentsUsage),
      },
    });
  }

  INSIGHTS_PAGES.forEach(({ path: pagePath, tab }) => {
    createPage({
      path: pagePath,
      component: require.resolve('../src/pages/insights.tsx'),
      context: { tab },
    });
  });

  createRedirect({
    fromPath: '/playroom',
    toPath: '/playroom/index.html',
  });

  createRedirect({
    fromPath: '/playroom/preview',
    toPath: '/playroom/preview/index.html',
  });
}

module.exports = createPages;
