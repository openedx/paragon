const getGithubProjectUrl = (repository) => {
  let repositoryUrl;
  if (typeof repository === 'string') {
    repositoryUrl = repository;
  } else if (repository?.url) {
    repositoryUrl = repository.url;
  } else {
    // unsupported repository field
    return undefined;
  }
  const parts = repositoryUrl.split('/');
  const githubDomainIndex = parts.findIndex((part) => part === 'github.com');
  parts.splice(0, githubDomainIndex);
  const parsedRepositoryUrl = parts.join('/').replace('.git', '');
  return `https://${parsedRepositoryUrl}/blob/master`;
};

module.exports = getGithubProjectUrl;
