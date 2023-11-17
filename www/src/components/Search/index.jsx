import { DocSearch } from '@docsearch/react';
import React from 'react';

import '@docsearch/css';

import HitComponent from './HitComponent';

function Search() {
  let userId = global.localStorage?.getItem('pgn__algolia-usedId');
  if (!userId) {
    userId = global.analytics.user().anonymousId();
    global.localStorage?.setItem('pgn__algolia-usedId', userId);
  }

  const algoliaEnvVars = [
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_API_KEY,
    process.env.GATSBY_ALGOLIA_INDEX_NAME,
  ];
  if (algoliaEnvVars.some(envVar => !envVar)) {
    // some required environment variables for Algolia not set, so don't render `DocSearch`.
    return null;
  }

  return (
    <DocSearch
      appId={process.env.GATSBY_ALGOLIA_APP_ID}
      indexName={process.env.GATSBY_ALGOLIA_INDEX_NAME}
      apiKey={process.env.GATSBY_ALGOLIA_API_KEY}
      /* eslint-disable-next-line react/no-unstable-nested-components */
      hitComponent={({ hit, children }) => <HitComponent userId={userId} hit={hit}>{children}</HitComponent>}
      searchParameters={{
        clickAnalytics: true,
      }}
      // DocSearch component has poor support for Algolia's click analytics, that's why we need to
      // 1. Modify searchClient behaviour to get queryID from search response in order to send it with click event data.
      //    queryID is stored in localStorage instead of component state because changing state resets Search...
      // 2. Use transformItems prop to include each item's position in the search results array,
      //    these objects are then passed to hitComponent defined above through 'hit' prop, and then clicked
      //    item's position will get sent to algolia with other click event data (it's a required parameter for the API)
      transformSearchClient={(searchClient) => ({
        ...searchClient,
        search: (queries, requestOptions) => searchClient.search(queries, requestOptions)
          .then((response) => {
            global.localStorage.setItem('pgn__algolia-queryID', response.results[0].queryID);
            return response;
          }),
      })}
      transformItems={(items) => items.map((item, index) => ({ ...item, position: index + 1 }))}
    />
  );
}

export default Search;
