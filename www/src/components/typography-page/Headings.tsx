import React from 'react';
// @ts-ignore
import { DataTable } from '~paragon-react';

import { MobileMeasuredCell, ClassNameCell, DesktopMeasuredCell } from '../TableCells';

const headingSizes = [1, 2, 3, 4, 5, 6];

export default function Headings() {
  return (
    <>
      <h2 className="mb-2">Headings</h2>
      <div className="mb-4">
        <DataTable
          itemCount={6}
          data={headingSizes.map((size) => ({ text: `Heading ${size}`, className: `h${size}` }))}
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
