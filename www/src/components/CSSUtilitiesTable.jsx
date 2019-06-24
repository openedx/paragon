import React from 'react';
import { Table } from '~paragon-react';

function CSSUtilitiesTable(props) {
  return (
    <Table
      className="pgn-doc__status-table"
      data={props.selectors.map(({ selector, declarations }) => ({
        selector: <code>.{selector}</code>,
        example: props.showExample ? (
          <p
            style={{
              margin: '-.25em 0',
              display: 'inline-block',
              padding: '.25em .5em',
              border: 'solid 1px transparent',
            }}
            className={selector}>
            Aa Bb Cc
          </p>
        ) : null,
        declarations: (
          <div>
            {declarations.map(declaration => (
              <code key={declaration} className="mb-0 text-muted">{declaration}</code>
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

export default CSSUtilitiesTable;
