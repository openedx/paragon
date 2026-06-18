import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import { ArrowDropDown, ArrowDropUp, ArrowDropUpDown } from '../../icons';

interface SortIndicatorProps {
  /** Indicates whether or not a column is sorted */
  isSorted: boolean;
  /** Indicates whether the column is sorted in descending order */
  isSortedDesc: boolean;
}

export function SortIndicator({ isSorted, isSortedDesc }: SortIndicatorProps) {
  if (!isSorted) {
    return <Icon style={{ opacity: 0.5 }} src={ArrowDropUpDown} data-testid="arrow-drop-up-down" />;
  }

  if (isSortedDesc) {
    return <Icon src={ArrowDropDown} data-testid="arrow-drop-down" />;
  }

  return <Icon src={ArrowDropUp} data-testid="arrow-drop-up" />;
}

interface TableHeaderCellProps {
  /** Returns props for the th element */
  getHeaderProps: (...args: any[]) => Record<string, any>;
  /** Indicates whether or not a column is sorted */
  isSorted?: boolean;
  /** Renders the header content. Passed the string 'Header' */
  render: (type: 'Header') => React.ReactNode;
  /** Indicates whether the column is sorted in descending order */
  isSortedDesc?: boolean;
  /** Gets props related to sorting that will be passed to the sort button */
  getSortByToggleProps?: (...args: any[]) => Record<string, any>;
  /** Indicates whether a column is sortable */
  canSort?: boolean;
  /** Class(es) to be applied to header cells */
  headerClassName?: string;
}

function TableHeaderCell({
  getHeaderProps,
  render,
  canSort = false,
  getSortByToggleProps = () => ({}),
  isSorted = false,
  isSortedDesc = false,
  headerClassName,
}: TableHeaderCellProps) {
  const headerProps = getHeaderProps();
  const toggleProps = canSort && getSortByToggleProps ? getSortByToggleProps() : {};
  let ariaSort: React.AriaAttributes['aria-sort'];
  if (isSorted) {
    ariaSort = isSortedDesc ? 'descending' : 'ascending';
  }
  const headerContentClassName = classNames('pgn__data-table-header-content', headerClassName);

  return (
    <th
      {...headerProps}
      scope="col"
      aria-sort={ariaSort}
      className={classNames(
        headerProps.className,
        { 'pgn__data-table-sortable-header': canSort },
      )}
    >
      {canSort ? (
        <button
          {...toggleProps}
          type="button"
          className={classNames(
            'pgn__data-table-sort-button',
            headerContentClassName,
            toggleProps.className,
          )}
        >
          <span>{render('Header')}</span>
          <SortIndicator isSorted={isSorted} isSortedDesc={isSortedDesc || false} />
        </button>
      ) : (
        <span className={headerContentClassName}>
          <span>{render('Header')}</span>
        </span>
      )}
    </th>
  );
}

export default TableHeaderCell;
