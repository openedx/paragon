import React from 'react';
import { Container } from '~paragon-react';
import Layout from '../../components/PageLayout';
import SEO from '../../components/SEO';
import {
  HeadingsTable,
  BodyTable,
  DisplayTable,
  DecorationAndEmphasisTable,
  LinksTable,
  AlignmentTable,
} from '../../components/typography-page';

export default function TypographyPage({ pageContext }) {
  return (
    <Layout isAutoToc githubEditPath={pageContext.githubEditPath}>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title="Typography" />
      <Container className="py-5">
        <h1>Typography</h1>
        <hr />
        <HeadingsTable />
        <BodyTable />
        <DisplayTable />
        <LinksTable />
        <DecorationAndEmphasisTable />
        <AlignmentTable />
      </Container>
    </Layout>
  );
}
