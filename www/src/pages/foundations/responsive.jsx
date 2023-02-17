import React from 'react';
import PropTypes from 'prop-types';
import { DataTable, Container, breakpoints } from '~paragon-react';
import SEO from '../../components/SEO';
import Layout from '../../components/PageLayout';
import CodeBlock from '../../components/CodeBlock';

const BREAKPOINT_DESCRIPTIONS = {
  extraSmall: { name: 'Extra small', identifier: 'xs' },
  small: { name: 'Small', identifier: 'xs' },
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
  return <code>{row.values.minWidth ? `${row.values.minWidth}px` : '-'}</code>;
}
function MaxWidthCell({ row }) {
  return <code>{row.values.maxWidth ? `${row.values.maxWidth}px` : '-'}</code>;
}

function Responsive() {
  const breakpointsData = Object.keys(breakpoints).map(breakpoint => {
    const { minWidth, maxWidth } = breakpoints[breakpoint];
    const breakpointData = getBreakpointDescription(breakpoint);
    breakpointData.minWidth = minWidth;
    breakpointData.maxWidth = maxWidth;
    return breakpointData;
  });

  return (
    <Layout>
      <Container size="md" className="py-5">
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <SEO title="Responsive" />
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
