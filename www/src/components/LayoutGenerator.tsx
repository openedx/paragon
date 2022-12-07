import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormGroup, FormControl, FormLabel } from '~paragon-react'; // eslint-disable-line
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
        <FormGroup className="form-inline m-2">
          <FormLabel isInline className="font-weight-normal" htmlFor={`column-${index}-width`}>
              Width
          </FormLabel>
          <FormControl
            type="number"
            id={`column-${index}-width`}
            size="sm"
            value={width}
            placeholder="Width (1 - 12)"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeWidth(index, e.target.value)}
            style={{ width: '3.5rem' }}
            min={0}
            step={1}
            max={12}
          />
        </FormGroup>
        <FormGroup className="form-inline m-2">
          <FormLabel isInline className="font-weight-normal" htmlFor={`column-${index}-offset`}>
              Offset
          </FormLabel>
          <FormControl
            id={`column-${index}-offset`}
            size="sm"
            type="number"
            value={offset}
            placeholder="Offset (1 - 11)"
            style={{ width: '3.5rem' }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeOffset(index, e.target.value)}
            min={0}
            step={1}
            max={11}
          />
        </FormGroup>
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
      return `  <div className="${className}">
    ${width || 'auto'}
  </div>
`;
    });

    const rowString = `<div className="row">
${columnsString.join('').slice(0, -1)}
</div>`;
    return rowString;
  };

  return (
    <>
      <p>
        Drag the slider to add or remove columns. Edit the width and offset
        values for each column and see the output below.
      </p>
      <FormGroup className="form-inline mb-4">
        <FormLabel isInline className="mr-3" htmlFor="num-cols-range">
          Number of Columns: {numColumns}
        </FormLabel>
        <FormControl
          id="num-cols-range"
          type="range"
          value={numColumns}
          min={1}
          step={1}
          max={12}
          style={{ width: '10rem' }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColumns(parseInt(e.target.value, 10))}
        />
      </FormGroup>
      <div className="row">{columns}</div>
      <CodeBlock className="language-jsx">{renderMarkupString()}</CodeBlock>
    </>
  );
}

export default LayoutGenerator;
