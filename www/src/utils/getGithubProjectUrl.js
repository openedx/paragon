const getGithubProjectUrl = (repositoryUrl) => {
  if (!repositoryUrl) {
    return;
  }
  const parts = repositoryUrl.split('/');
  const githubDomainIndex = parts.findIndex(part => part === 'github.com');
  parts.splice(0, githubDomainIndex);
  const parsedRepositoryUrl = parts.join('/').replace('.git', '');
  return `https://${parsedRepositoryUrl}/blob/master`;
};

export default getGithubProjectUrl;
