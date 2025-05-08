import React from 'react';
// @ts-ignore
import { DataTable } from '~paragon-react';
import { ClassNameCell, StyleCell } from '../TableCells';

const decorationAndEmphasisClassesAndDescriptions = [
  { className: 'text-lowercase', text: 'Lowercase text.' },
  { className: 'text-uppercase', text: 'uppercase text.' },
  { className: 'text-capitalize', text: 'capitalize text.' },
  { className: 'text-decoration-none', text: 'No decorations.' },
  { className: 'font-italic', text: 'Italic text.' },
  { className: 'font-weight-bold', text: 'Bold text.' },
  { className: 'font-weight-normal', text: 'Regular text.' },
];

export default function DecorationAndEmphasis() {
  return (
    <>
      <h2 className="mb-2">Decoration and Emphasis</h2>
      <div className="mb-4">
        <DataTable
          itemCount={7}
          data={decorationAndEmphasisClassesAndDescriptions}
          columns={[
            {
              Header: 'Style',
              Cell: StyleCell,
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
