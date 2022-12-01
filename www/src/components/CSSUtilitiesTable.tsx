import React from 'react';
import PropTypes from 'prop-types';
import { DataTable } from '~paragon-react';

export interface ICSSUtilitiesTable {
  selectors: Array<{
    selector: string,
    declarations: Array<string>,
  }>,
}

function CSSUtilitiesTable({ selectors }: ICSSUtilitiesTable) {
  return (
    <DataTable
      data={selectors.map(({ selector, declarations }) => ({
        selector: <code style={{ fontSize: '14px' }}>.{selector}</code>,
        declarations: (
          <div>
            {declarations.map(declaration => (
              <code style={{ fontSize: '14px' }} key={declaration} className="mb-0 text-muted">
                {declaration}
              </code>
            ))}
          </div>
        ),
      }))}
      itemCount={selectors.length}
      columns={[
        {
          Header: 'Utility Class Name',
          accessor: 'selector',
        },
        {
          Header: 'Styles',
          accessor: 'declarations',
        },
      ]}
    >
      <DataTable.Table />
    </DataTable>
  );
}

CSSUtilitiesTable.propTypes = {
  selectors: PropTypes.arrayOf(
    PropTypes.shape({
      selector: PropTypes.string,
      declarations: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

CSSUtilitiesTable.defaultProps = {
  selectors: [],
};

export default CSSUtilitiesTable;
