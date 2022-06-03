import React from 'react';
import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

const Search = () => {
  const algoliaEnvVars = [process.env.GATSBY_ALGOLIA_API_ID, process.env.GATSBY_ALGOLIA_API_KEY, process.env.GATSBY_ALGOLIA_INDEX_NAME];
  if (algoliaEnvVars.some(envVar => !envVar)) {
    // some required environment variables for Algolia not set, so don't render `DocSearch`.
    return null;
  }
  return (
    <DocSearch
      appId={process.env.GATSBY_ALGOLIA_APP_ID}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      apiKey={process.env.GATSBY_ALGOLIA_API_KEY}
    />
  );
}

export default Search;
