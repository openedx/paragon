import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  DataTable, breakpoints, OverlayTrigger, Tooltip, Icon, Container,
} from '~paragon-react';
import { QuestionMark } from '~paragon-icons';
import SEO from '../../components/SEO';
import Layout from '../../components/PageLayout';
import CodeBlock from '../../components/CodeBlock';
import { SettingsContext } from '../../context/SettingsContext';

const BREAKPOINT_DESCRIPTIONS = {
  extraSmall: { name: 'Extra small', identifier: 'xs' },
  small: { name: 'Small', identifier: 'sm' },
  medium: { name: 'Medium', identifier: 'md' },
  large: { name: 'Large', identifier: 'lg' },
  extraLarge: { name: 'Extra large', identifier: 'xl' },
  extraExtraLarge: { name: 'Extra extra large', identifier: 'xxl' },
};

const getBreakpointDescription = (breakpoint) => BREAKPOINT_DESCRIPTIONS[breakpoint] || {};

function IdentifierCell({ row }) {
  return <code>{row.values.identifier}</code>;
}
function MinWidthCell({ row }) {
  if (row.values.identifier === 'xs') {
    return (
      <div className="d-flex align-items-center">
        <code>-</code>
        <OverlayTrigger
          placement="top"
          overlay={(
            <Tooltip id={`tooltip-${row.values.identifier}`}>
              The min-width for the &quot;XS&quot; breakpoint is <strong>320px</strong>.
              That pixel width is the smallest that designers support for mobile devices,
              and also covers 16x magnification for accessibility.
            </Tooltip>
          )}
        >
          <Icon src={QuestionMark} size="xs" />
        </OverlayTrigger>
      </div>
    );
  }
  return <code>{row.values.minWidth ? `${row.values.minWidth}px` : '-'}</code>;
}
function MaxWidthCell({ row }) {
  return <code>{row.values.maxWidth ? `${row.values.maxWidth}px` : '-'}</code>;
}

function Responsive({ pageContext }) {
  const { settings } = useContext(SettingsContext);
  const { githubEditPath, componentCategories, componentName } = pageContext;
  const breakpointsData = Object.keys(breakpoints).map(breakpoint => {
    const { minWidth, maxWidth } = breakpoints[breakpoint];
    const breakpointData = getBreakpointDescription(breakpoint);
    breakpointData.minWidth = minWidth;
    breakpointData.maxWidth = maxWidth;
    return breakpointData;
  });

  return (
    <Layout
      isAutoToc
      githubEditPath={githubEditPath}
      componentCategories={componentCategories}
      componentName={componentName}
    >
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title="Responsive" />
      <Container size={settings.containerWidth} className="py-5">
        <h1>Responsive</h1>
        <h2>Available breakpoints</h2>
        <p>
          Define the minimum and maximum dimensions at which your layout will change,
          adapting to different screen sizes, for use in media queries.
        </p>
        <DataTable
          className="pgn-doc__spacing-table"
          data={breakpointsData}
          columns={[
            { Header: 'Breakpoint', accessor: 'name' },
            { Header: 'Class infix', accessor: 'identifier', Cell: IdentifierCell },
            { Header: 'Min width', accessor: 'minWidth', Cell: MinWidthCell },
            { Header: 'Max Width', accessor: 'maxWidth', Cell: MaxWidthCell },
          ]}
          itemCount={0}
        >
          <DataTable.Table />
        </DataTable>
        <h2 className="mt-3">Basic usage</h2>
        <p>
          To access or change the breakpoints in the scss use <code>$grid-breakpoints</code> variable.
        </p>
        <p>
          Example when the screen is narrower than <code>md</code> breakpoint.
        </p>
        <CodeBlock className="language-scss">
          {'@include media-breakpoint-down(map-get($grid-breakpoints, \'md\')) { // styles here }'}
        </CodeBlock>
        <p>
          Example when the screen is wider than <code>lg</code> breakpoint.
        </p>
        <CodeBlock className="language-scss">
          {'@include media-breakpoint-up(map-get($grid-breakpoints, \'lg\')) { // styles here }'}
        </CodeBlock>
      </Container>
    </Layout>
  );
}

Responsive.propTypes = {
  pageContext: PropTypes.shape({
    githubEditPath: PropTypes.string,
    componentName: PropTypes.string,
    componentCategories: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const cellPropTypes = {
  row: PropTypes.shape({
    values: PropTypes.shape({
      identifier: PropTypes.string,
      minWidth: PropTypes.number,
      maxWidth: PropTypes.number,
    }),
  }),
};

const cellDefaultProps = {
  row: {},
};

IdentifierCell.propTypes = cellPropTypes;
MinWidthCell.propTypes = cellPropTypes;
MaxWidthCell.propTypes = cellPropTypes;

IdentifierCell.defaultProps = cellDefaultProps;
MinWidthCell.defaultProps = cellDefaultProps;
MaxWidthCell.defaultProps = cellDefaultProps;

export default Responsive;
