import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form } from '~paragon-react';
import CodeBlock from './CodeBlock';

export interface IColumn {
  index: number,
  width: number,
  onChangeWidth: Function,
  offset: number,
  onChangeOffset: Function,
}

function Column({
  index, width, onChangeWidth, offset, onChangeOffset,
}: IColumn) {
  return (
    <div
      className={classNames('col mb-4', {
        [`col-${width}`]: width > 0,
        [`offset-${offset}`]: offset > 0,
      })}
    >
      <div
        className="text-align-center p-1"
        style={{ background: '#eee', minHeight: '2rem' }}
      >
        <Form.Group className="form-inline m-2">
          <Form.Label>Width</Form.Label>
          <Form.Control
            className="mx-2"
            type="number"
            value={width}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeWidth(index, e.target.value)}
            min={0}
            step={1}
            max={12}
          />
        </Form.Group>
        <Form.Group className="form-inline m-2">
          <Form.Label>Offset</Form.Label>
          <Form.Control
            className="mx-2"
            type="number"
            value={offset}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeOffset(index, e.target.value)}
            min={0}
            step={1}
            max={11}
          />
        </Form.Group>
      </div>
    </div>
  );
}

Column.propTypes = {
  index: PropTypes.number.isRequired,
  width: PropTypes.number,
  onChangeWidth: PropTypes.func.isRequired,
  offset: PropTypes.number,
  onChangeOffset: PropTypes.func.isRequired,
};

Column.defaultProps = {
  width: 0,
  offset: 0,
};

export type StateKeyTypes = {
  [key: number]: number,
};

function LayoutGenerator() {
  const [numColumns, setColumns] = useState<number>(3);
  const [columnWidths, setColumnWidths] = useState<StateKeyTypes>({ 0: 3, 1: 6, 2: 3 });
  const [columnOffsets, setColumnOffsets] = useState<StateKeyTypes>({});

  const columns: Array<React.ReactNode> = [];

  for (let i = 0; i < numColumns; i++) {
    // eslint-disable-line no-plusplus
    columns.push(
      <Column
        key={i}
        index={i}
        width={columnWidths[i]}
        onChangeWidth={(_index: number, _width: number) => {
          setColumnWidths({ ...columnWidths, [_index]: _width });
        }}
        offset={columnOffsets[i]}
        onChangeOffset={(_index: number, _offset: number) => {
          setColumnOffsets({ ...columnOffsets, [_index]: _offset });
        }}
      />,
    );
  }

  const renderMarkupString = () => {
    const columnsString = [...Array(columns.length).keys()].map((i) => {
      const width = columnWidths[i];
      const offset = columnOffsets[i];

      const className = classNames('col', {
        [`col-${width}`]: width > 0,
        [`offset-${offset}`]: offset > 0,
      });
      return `
        <div className="${className}">
          ${width || 'auto'}
        </div>
      `;
    });

    const rowString = `
      <div className="row">
        ${columnsString.join('')}
      </div>
    `;
    return rowString;
  };

  return (
    <>
      <p>
        Drag the slider to add or remove columns. Edit the width and offset
        values for each column and see the output below.
      </p>
      <div className="form-inline">
        <Form.Group className="form-inline">
          <Form.Label>
            Number of Columns {numColumns}
          </Form.Label>
          <Form.Control
            className="mx-2"
            type="range"
            value={numColumns}
            size="sm"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColumns(parseInt(e.target.value, 10))}
            min={1}
            step={1}
            max={12}
          />
        </Form.Group>
      </div>
      <div className="row">{columns}</div>
      <CodeBlock className="language-jsx">{renderMarkupString()}</CodeBlock>
    </>
  );
}

export default LayoutGenerator;
