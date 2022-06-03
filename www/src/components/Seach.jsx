import React from 'react';
import { DocSearch } from '@docsearch/react';

import '@docsearch/css';

const Search = () => {
  const algoliaEnvVars = [process.env.ALGOLIA_API_ID, process.env.ALGOLIA_API_KEY, process.env.ALGOLIA_INDEX_NAME];
  if (algoliaEnvVars.some(envVar => !envVar)) {
    // some required environment variables for Algolia not set, so don't render `DocSearch`.
    return null;
  }
  return (
    <DocSearch
      appId={process.env.ALGOLIA_APP_ID}
      indexName={process.env.ALGOLIA_INDEX_NAME}
      apiKey={process.env.ALGOLIA_API_KEY}
    />
  );
}

export default Search;
