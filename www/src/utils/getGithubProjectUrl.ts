const getGithubProjectUrl = (repository: string | { type: string; url: any; } | undefined) => {
  let repositoryUrl;
  // @ts-ignore
  if (repository === Object(repository) && repository?.url) {
    if (typeof repository !== 'string') {
      repositoryUrl = repository.url;
    }
  } else if (typeof repository === 'string') {
    repositoryUrl = repository;
  } else {
    // unsupported repository field
    return;
  }
  const parts = repositoryUrl?.split('/');
  const githubDomainIndex = parts?.findIndex((part: string) => part === 'github.com');
  parts?.splice(0, githubDomainIndex);
  const parsedRepositoryUrl = parts?.join('/').replace('.git', '');
  // eslint-disable-next-line consistent-return
  return `https://${parsedRepositoryUrl}/blob/master`;
};

export default getGithubProjectUrl;
