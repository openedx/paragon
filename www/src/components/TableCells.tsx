import React from 'react';
import MeasuredItem from './MeasuredItem';
import measuredTypeProps from './typography-page/measuredTypeProps';

export type CodeCellType = {
  value: string | number | undefined,
};

export type DataTableRowType = {
  row: {
    original: {
      name?: string,
      size?: string,
      className?: string,
      text?: string,
    }
  },
};

export function ClassNameCell({ value }: CodeCellType) {
  if (!value) {
    return null;
  }

  return (
    <code className="fs-16">
      .{value}
    </code>
  );
}

export function TextCell({ value }: CodeCellType) {
  return (
    <p className="m-0 fs-16">
      {value}
    </p>
  );
}

export function CodeCell({ value }: CodeCellType) {
  return (
    <code className="fs-16">
      {value}
    </code>
  );
}

export function DesktopMeasuredCell({ row } : DataTableRowType) {
  return (
    <MeasuredItem {...measuredTypeProps}>
      <p className={`m-0 ${row.original.className}`}>
        {row.original.text}
      </p>
    </MeasuredItem>
  );
}

export function MobileMeasuredCell({ row } : DataTableRowType) {
  return (
    <div className="mobile-type">
      <MeasuredItem {...measuredTypeProps}>
        <p className={`m-0 ${row.original.className}`}>
          {row.original.text}
        </p>
      </MeasuredItem>
    </div>
  );
}

export function StyleCell({ row } : DataTableRowType) {
  return (
    <p className={`fs-16 ${row.original.className}`}>
      {row.original.text}
    </p>
  );
}
