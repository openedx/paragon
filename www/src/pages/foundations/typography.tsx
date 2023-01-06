import React from 'react';
import Layout from '../../components/PageLayout';
import SEO from '../../components/SEO';
import { Container } from '~paragon-react';
import {
  HeadingsTable,
  BodyTable,
  DisplayTable,
  DecorationAndEmphasisTable,
  LinksTable,
  AlignmentTable,
} from '../../components/typography-page';

export default function TypographyPage() {
  return (
    <Layout>
      <Container size="xl" className="py-5">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <SEO title="Typography" />
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
