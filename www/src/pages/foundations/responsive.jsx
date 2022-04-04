import React from 'react';
import PropTypes from 'prop-types';
import { DataTable, Container, breakpoints } from '~paragon-react'; // eslint-disable-line
import SEO from '../../components/SEO';
import Layout from '../../components/PageLayout';

const getBreakpointDescription = (breakpoint) => {
  switch (breakpoint) {
    case 'extraSmall':
      return { name: 'Extra small', identifier: 'xs' };
    case 'small':
      return { name: 'Small', identifier: 'sm' };
    case 'medium':
      return { name: 'Medium', identifier: 'md' };
    case 'large':
      return { name: 'Large', identifier: 'lg' };
    case 'extraLarge':
      return { name: 'Extra large', identifier: 'xl' };
    case 'extraExtraLarge':
      return { name: '2Extra large', identifier: 'xxl' };
    default:
      return {};
  }
};

const IdentifierCell = ({ row }) => <code>{row.values.identifier}</code>;
const MinWidthCell = ({ row }) => <code>{row.values.minWidth ? `${row.values.minWidth}px` : '-'}</code>;
const MaxWidthCell = ({ row }) => <code>{row.values.maxWidth ? `${row.values.maxWidth}px` : '-'}</code>;

const Responsive = () => {
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
        <h3>Break points</h3>
        <p>
          Define the minimum and maximum dimensions at which your layout will change,
          adapting to different screen sizes, for use in media queries.
        </p>
        <h3>CSS Utilities</h3>
        <DataTable
          className="pgn-doc__spacing-table"
          data={breakpointsData}
          columns={[
            { Header: 'Name', accessor: 'name' },
            { Header: 'Identifier', accessor: 'identifier', Cell: IdentifierCell },
            { Header: 'Min width', accessor: 'minWidth', Cell: MinWidthCell },
            { Header: 'Max Width', accessor: 'maxWidth', Cell: MaxWidthCell },
          ]}
        >
          <DataTable.Table />
        </DataTable>
      </Container>
    </Layout>
  );
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
