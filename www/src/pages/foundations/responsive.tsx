import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { QuestionMark } from '~paragon-icons';
import {
  DataTable, breakpoints, OverlayTrigger, Tooltip, Icon, Container,
} from '~paragon-react';
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

const customBreakpoints = [
  { name: '--pgn-size-breakpoint-min-width-xs', property: 'min-width', value: '0px' },
  { name: '--pgn-size-breakpoint-max-width-xs', property: 'max-width', value: '576px' },
  { name: '--pgn-size-breakpoint-min-width-sm', property: 'min-width', value: '576px' },
  { name: '--pgn-size-breakpoint-max-width-sm', property: 'max-width', value: '768px' },
  { name: '--pgn-size-breakpoint-min-width-md', property: 'min-width', value: '768px' },
  { name: '--pgn-size-breakpoint-max-width-md', property: 'max-width', value: '992px' },
  { name: '--pgn-size-breakpoint-min-width-lg', property: 'min-width', value: '992px' },
  { name: '--pgn-size-breakpoint-max-width-lg', property: 'max-width', value: '1200px' },
  { name: '--pgn-size-breakpoint-min-width-xl', property: 'min-width', value: '1200px' },
  { name: '--pgn-size-breakpoint-max-width-xl', property: 'max-width', value: '1400px' },
  { name: '--pgn-size-breakpoint-min-width-xxl', property: 'min-width', value: '1400px' },
];

const getBreakpointDescription = (breakpoint) => BREAKPOINT_DESCRIPTIONS[breakpoint] || {};

function IdentifierCell({ row }) {
  return <code>{row.values.identifier}</code>;
}

function PropertyCell({ row }) {
  return <code>{row.values.property}</code>;
}

function ValueCell({ row }) {
  return <code>{row.values.value}</code>;
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
  const breakpointsData = Object.keys(breakpoints).map(breakpoint => {
    const { minWidth, maxWidth } = breakpoints[breakpoint];
    const breakpointData = getBreakpointDescription(breakpoint);
    breakpointData.minWidth = minWidth;
    breakpointData.maxWidth = maxWidth;
    return breakpointData;
  });

  return (
    <Layout isAutoToc githubEditPath={pageContext.githubEditPath}>
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
        <h2 className="mt-3">SCSS variables</h2>
        <h3 className="mt-3">Basic usage</h3>
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

        <h2 className="mt-3">CSS Custom Media Breakpoints</h2>
        <p>
          Media breakpoints in CSS are defined using the following variables.
        </p>
        <h3>Available Breakpoints</h3>
        <DataTable
          className="pgn-doc__spacing-table"
          data={customBreakpoints}
          columns={[
            { Header: 'Breakpoint', accessor: 'name' },
            { Header: 'Property', accessor: 'property', Cell: PropertyCell },
            { Header: 'Value', accessor: 'value', Cell: ValueCell },
          ]}
          itemCount={0}
        >
          <DataTable.Table />
        </DataTable>

        <h3 className="mt-3">Basic Usage</h3>
        <p>
          The structure of a breakpoint variable is:
        </p>
        <CodeBlock className="language-scss">
          {'--pgn-size-breakpoint-{width_type}-{class_infix}'}
        </CodeBlock>
        <p>
          Explanation of the variable components:
          <ul>
            <li><code>{'{width_type}'}</code> specifies the width type, either <strong>min</strong> for a minimum width
              (inclusive) or <strong>max</strong> for a maximum width (inclusive).
            </li>
            <li><code>{'{class_infix}'}</code> refers to the breakpoint name, such as <code>sm</code>, <code>md</code>,
              or <code>lg</code>.
            </li>
          </ul>
        </p>

        <p>
          Example for applying styles when the screen width is narrower than the <code>md</code> breakpoint:
        </p>
        <CodeBlock className="language-scss">
          {'@media (--pgn-size-breakpoint-max-width-md) { // styles here }'}
        </CodeBlock>

        <p>
          For applying styles when the screen width is wider than the <code>md</code> breakpoint:
        </p>
        <CodeBlock className="language-scss">
          {'@media (--pgn-size-breakpoint-min-width-md) { // styles here }'}
        </CodeBlock>
      </Container>
    </Layout>
  );
}

Responsive.propTypes = {
  pageContext: PropTypes.shape({
    githubEditPath: PropTypes.string,
  }).isRequired,
};

const cellPropTypes = {
  row: PropTypes.shape({
    values: PropTypes.shape({
      identifier: PropTypes.string,
      minWidth: PropTypes.number,
      maxWidth: PropTypes.number,
      property: PropTypes.string,
      value: PropTypes.string,
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

PropertyCell.propTypes = cellPropTypes;
ValueCell.propTypes = cellPropTypes;

PropertyCell.defaultProps = cellDefaultProps;
ValueCell.defaultProps = cellDefaultProps;

export default Responsive;
