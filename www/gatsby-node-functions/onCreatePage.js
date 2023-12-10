async function onCreatePage(page, actions) {
  const { createPage } = actions;
  const githubEditPath = `https://github.com/openedx/paragon/edit/master/www/src${page.componentPath.split('src')[1]}`;

  createPage({
    ...page,
    context: {
      ...page.context,
      githubEditPath,
    },
  });
}

module.exports = onCreatePage;
