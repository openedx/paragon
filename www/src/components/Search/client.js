import axios from 'axios';

const AlgoliaClient = axios.create({
  baseURL: 'https://insights.algolia.io',
  headers: {
    'Content-Type': 'application/json',
    'x-algolia-application-id': process.env.GATSBY_ALGOLIA_APP_ID,
    'x-algolia-api-key': process.env.GATSBY_ALGOLIA_API_KEY,
  },
});

export default AlgoliaClient;
