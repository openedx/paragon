import React from 'react';
// @ts-ignore
import { DataTable, Alert } from '~paragon-react';
import { Info } from '~paragon-icons';
import { TextCell } from '../TableCells';

const linksClassesAndDescriptions = [
  {
    example: <span>An <a className="inline-link" href="/foundations/typography/">inline link</a> in a sentence.</span>,
    description: <span>For links inside a <code>p</code> or with the <code>.inline-link</code> class name.</span>,
  },
  {
    example: <a className="muted-link" href="/#">Muted, Standalone Link</a>,
    description: <span><code>.muted-link</code> not in a <code>p</code> tag.</span>,
  },
  {
    example: (
      <span>
        An <a className="muted-link inline-link" href="/foundations/typography/">muted, inline link</a> in a sentence.
      </span>
    ),
    description: (
      <span>
        For <code>.muted-link</code> links inside a <code>p</code> or with the <code>.inline-link</code> class name.
      </span>
    ),
  },
];

export default function Links() {
  return (
    <>
      <h2 className="mb-2">Links</h2>
      <Alert variant="info" icon={Info}>
        <a href="/#">Standalone Link</a> - the default style for <code>a</code> tag that appear outside of <code>p</code> tag.
      </Alert>
      <div className="mb-4">
        <DataTable
          itemCount={4}
          data={linksClassesAndDescriptions}
          columns={[
            { Header: 'Example', accessor: 'example', Cell: TextCell },
            { Header: 'Description', accessor: 'description', Cell: TextCell },
          ]}
        >
          <DataTable.Table />
        </DataTable>
      </div>
    </>
  );
}
