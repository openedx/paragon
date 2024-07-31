import React from 'react';
// @ts-ignore
import { DataTable } from '~paragon-react';

import { ClassNameCell, DesktopMeasuredCell, MobileMeasuredCell } from '../TableCells';

const displaySizes = [1, 2, 3, 4];

export default function Display() {
  return (
    <>
      <h2 className="mb-2">Display</h2>
      <div className="mb-4">
        <DataTable
          itemCount={4}
          data={displaySizes.map((size) => ({ text: `Display ${size}`, className: `display-${size}` }))}
          columns={[
            {
              Header: 'Desktop',
              Cell: DesktopMeasuredCell,
            },
            {
              Header: 'Mobile',
              Cell: MobileMeasuredCell,
            },
            {
              id: 'css-class',
              Header: 'CSS Class',
              accessor: 'className',
              Cell: ClassNameCell,
            },
          ]}
        >
          <DataTable.Table />
        </DataTable>
      </div>
    </>
  );
}
