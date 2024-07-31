import React, { useContext } from 'react';
import PropTypes from 'prop-types';
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
import { SettingsContext } from '../../context/SettingsContext';

export default function TypographyPage({ pageContext }) {
  const { settings } = useContext(SettingsContext);

  return (
    <Layout isAutoToc githubEditPath={pageContext.githubEditPath}>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title="Typography" />
      <Container size={settings.containerWidth} className="py-5">
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

TypographyPage.propTypes = {
  pageContext: PropTypes.shape({
    githubEditPath: PropTypes.string,
  }).isRequired,
};
