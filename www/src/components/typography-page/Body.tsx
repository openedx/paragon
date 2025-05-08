import React from 'react';
import { DataTable } from '~paragon-react';

import { DesktopMeasuredCell, ClassNameCell, ClassNameRowType } from '../TableCells';

const bodyClassesAndDescriptions: ClassNameRowType[] = [
  { className: 'lead', text: 'Large Body' },
  { className: 'font-size-normal', text: 'Body', hasClass: false },
  { className: 'small', text: 'Small Body' },
  { className: 'x-small', text: 'Extra Small Body' },
  { className: 'micro', text: 'Micro Body' },
];

export default function Body() {
  return (
    <>
      <h2 className="mb-2">Body</h2>
      <div className="mb-4 pgn-doc__code-body-block">
        <DataTable
          itemCount={bodyClassesAndDescriptions.length}
          data={bodyClassesAndDescriptions}
          columns={[
            {
              Header: 'Desktop & Mobile',
              Cell: DesktopMeasuredCell,
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
