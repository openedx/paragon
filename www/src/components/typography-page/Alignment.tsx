import React from 'react';
// @ts-ignore
import { DataTable } from '~paragon-react';
import { ClassNameCell, StyleCell } from '../TableCells';

const alignmentClassesAndDescriptions = [
  { className: 'text-left', text: 'left text.' },
  { className: 'text-right', text: 'right text.' },
  { className: 'text-center', text: 'center text.' },
  {
    className: 'text-justify',
    text: 'The text-justify class specifies the justification method of text. '
        + 'This text-justify class spreads the words into the complete line with equal spaces.',
  },
  {
    className: 'text-wrap',
    text: 'Use text-wrap to cause text to wrap normally within an element. Newlines and spaces will be collapsed.',
  },
  {
    className: 'text-nowrap',
    text: 'Use text-nowrap to prevent text from wrapping within an element. Newlines and spaces will be collapsed. '
        + 'You can prevent line breaks and text wrapping for specific elements',
  },
];

export default function Alignment() {
  return (
    <>
      <h2 className="mb-4">Alignment</h2>
      <div className="mb-4">
        <DataTable
          itemCount={6}
          data={alignmentClassesAndDescriptions}
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
