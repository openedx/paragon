import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { Table } from '~paragon-react';

export type CSSUtilitiesTablePropsTypes = {
  selectors: [{ selector: string, declarations: Array<string> }],
  showExample: Array<string>,
};

function CSSUtilitiesTable({ selectors, showExample }: CSSUtilitiesTablePropsTypes) {
  return (
    <Table
      className="pgn-doc__status-table"
      data={selectors.map(({ selector, declarations }) => ({
        selector: <code>.{selector}</code>,
        example: showExample ? (
          <p
            style={{
              margin: '-.25em 0',
              display: 'inline-block',
              padding: '.25em .5em',
              border: 'solid 1px transparent',
            }}
            className={selector}
          >
            Aa Bb Cc
          </p>
        ) : null,
        declarations: (
          <div>
            {declarations.map(declaration => (
              <code key={declaration} className="mb-0 text-muted">
                {declaration}
              </code>
            ))}
          </div>
        ),
      }))}
      columns={[
        {
          label: 'Utility Class Name',
          key: 'selector',
        },
        {
          label: 'Example',
          hideHeader: true,
          key: 'example',
        },
        {
          label: 'Declarations',
          key: 'declarations',
          hideHeader: true,
        },
      ]}
    />
  );
}

CSSUtilitiesTable.propTypes = {
  selectors: PropTypes.arrayOf(
    PropTypes.shape({
      selector: PropTypes.string,
      declarations: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
  showExample: PropTypes.bool,
};

CSSUtilitiesTable.defaultProps = {
  selectors: [],
  showExample: false,
};

export default CSSUtilitiesTable;
