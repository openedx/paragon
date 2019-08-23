import React from 'react';
import { Table } from '~paragon-react';

import { ComponentStatus } from './doc-elements';

export default ({ frontmatter }) => (
  <>
    {frontmatter && (
      <Table
        className="pgn-doc__status-table"
        data={[
          {
            name: (
              <div>
                <h6>
                  <ComponentStatus noLeftMargin status={frontmatter.status} />
                </h6>
                <pre>{frontmatter.notes}</pre>
              </div>
            ),
            designStatus: <ComponentStatus status={frontmatter.designStatus} />,
            devStatus: <ComponentStatus status={frontmatter.devStatus} />,
          },
        ]}
        columns={[
          {
            label: 'Status',
            key: 'name',
            width: 'col-3',
          },
          {
            label: 'Design',
            key: 'designStatus',
            width: 'col-3',
          },
          {
            label: 'Development',
            key: 'devStatus',
            width: 'col-3',
          },
        ]}
      />
    )}
  </>
);
