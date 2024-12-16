import React from 'react';
import MeasuredItem from './MeasuredItem';
import measuredTypeProps from './typography-page/measuredTypeProps';

export type CodeCellType = {
  value: string | number | undefined,
};

export type ClassNameRowType = {
  className: string | undefined,
  text: string,
  hasClass?: boolean,
};

export type ClassNameCellType = {
  row: {
    original: ClassNameRowType,
  },
} & CodeCellType;

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

export function ClassNameCell({ row, value }: ClassNameCellType) {
  if (row.original.hasClass === false) {
    return null;
  }

  if (!value) {
    return null;
  }

  return (
    <code className="font-size-normal">
      .{value}
    </code>
  );
}

export function TextCell({ value }: CodeCellType) {
  return (
    <p className="m-0 font-size-normal">
      {value}
    </p>
  );
}

export function CodeCell({ value }: CodeCellType) {
  return (
    <code className="font-size-normal">
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
    <p className={`font-size-normal ${row.original.className}`}>
      {row.original.text}
    </p>
  );
}
