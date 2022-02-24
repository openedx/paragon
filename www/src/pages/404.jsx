import React from 'react';

import Layout from '../components/PageLayout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
