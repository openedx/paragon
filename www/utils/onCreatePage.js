async function onCreatePage(page, actions) {
  const { createPage } = actions;
  const { componentPath, path } = page;
  const githubEditPath = `https://github.com/openedx/paragon/edit/master/www/src${componentPath.split('src')[1]}`;
  const categoryName = path.split('/')[1];
  const componentTitle = path.split('/')[2];

  createPage({
    ...page,
    context: {
      ...page.context,
      githubEditPath,
      componentCategories: categoryName,
      componentName: componentTitle,
    },
  });
}

module.exports = onCreatePage;
