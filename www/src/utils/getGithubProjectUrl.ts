const getGithubProjectUrl = (repository: any) => {
  let repositoryUrl;
  if (repository === Object(repository) && repository.url) {
    repositoryUrl = repository.url;
  } else if (typeof repository === 'string') {
    repositoryUrl = repository;
  } else {
    // unsupported repository field
    return;
  }
  const parts = repositoryUrl.split('/');
  const githubDomainIndex = parts.findIndex((part: string) => part === 'github.com');
  parts.splice(0, githubDomainIndex);
  const parsedRepositoryUrl = parts.join('/').replace('.git', '');
  return `https://${parsedRepositoryUrl}/blob/master`;
};

export default getGithubProjectUrl;
