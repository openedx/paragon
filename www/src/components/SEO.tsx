/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import useSiteMetadata from '../hooks/use-site-metadata';

export interface ISEO {
  description?: string,
  children?: null | React.ReactNode,
  title: string,
}

export default function SEO({
  description, title, children,
}: ISEO) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
  } = useSiteMetadata();

  const metaDescription = description || defaultDescription;
  const resolvedTitle = defaultTitle ? `${title} | ${defaultTitle}` : title;

  return (
    <>
      <title>{resolvedTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content={author || ''} />
      {children}
    </>
  );
}

SEO.defaultProps = {
  children: null,
  description: '',
};

SEO.propTypes = {
  children: PropTypes.node,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};
