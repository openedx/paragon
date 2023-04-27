import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import { ArrowDropDown, ArrowDropUp, ArrowDropUpDown } from '../../icons';

export function SortIndicator({ isSorted, isSortedDesc }) {
  if (!isSorted) {
    return <Icon style={{ opacity: 0.5 }} src={ArrowDropUpDown} />;
  }

  if (isSortedDesc) {
    return <Icon src={ArrowDropDown} />;
  }

  return <Icon src={ArrowDropUp} />;
}

SortIndicator.propTypes = {
  isSorted: PropTypes.bool.isRequired,
  isSortedDesc: PropTypes.bool.isRequired,
};

function TableHeaderCell({
  getHeaderProps, render, canSort, getSortByToggleProps, isSorted, isSortedDesc, headerClassName,
}) {
  const toggleProps = canSort && getSortByToggleProps ? getSortByToggleProps() : {};

  return (
    <th {...getHeaderProps(toggleProps)}>
      <span className={classNames('d-flex align-items-center', headerClassName)}>
        <span>{render('Header')}</span>
        {canSort && <SortIndicator isSorted={isSorted} isSortedDesc={isSortedDesc || false} />}
      </span>
    </th>
  );
}

TableHeaderCell.defaultProps = {
  headerClassName: null,
  isSorted: false,
  isSortedDesc: false,
  canSort: false,
  getSortByToggleProps: () => {},
};

TableHeaderCell.propTypes = {
  /** Returns props for the th element */
  getHeaderProps: PropTypes.func.isRequired,
  /** Indicates whether or not a column is sorted */
  isSorted: PropTypes.bool,
  /** Renders the header content. Passed the string 'Header' */
  render: PropTypes.func.isRequired,
  /** Indicates whether the column is sorted in descending order */
  isSortedDesc: PropTypes.bool,
  /** Gets props related to sorting that will be passed to th */
  getSortByToggleProps: PropTypes.func,
  /** Indicates whether a column is sortable */
  canSort: PropTypes.bool,
  /** Class(es) to be applied to header cells */
  headerClassName: PropTypes.string,
};

export default TableHeaderCell;
