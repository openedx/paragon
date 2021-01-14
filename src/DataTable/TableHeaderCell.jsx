import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '..';
import { ArrowDropDown, ArrowDropUp, ArrowDropUpDown } from '../../icons';

export const SortIndicator = ({ isSorted, isSortedDesc }) => {
  if (!isSorted) {
    return <Icon style={{ opacity: 0.5 }} src={ArrowDropUpDown} />;
  }

  if (isSortedDesc) {
    return <Icon src={ArrowDropUp} />;
  }

  return <Icon src={ArrowDropDown} />;
};

SortIndicator.propTypes = {
  isSorted: PropTypes.bool.isRequired,
  isSortedDesc: PropTypes.bool.isRequired,
};

const TableHeaderCell = ({
  getHeaderProps, render, canSort, getSortByToggleProps, isSorted, isSortedDesc,
}) => {
  const toggleProps = canSort && getSortByToggleProps ? getSortByToggleProps() : {};

  return (
    <th {...getHeaderProps(toggleProps)}>
      <span className="d-flex align-items-center">
        <span>{render('Header')}</span>
        {canSort && <SortIndicator isSorted={isSorted} isSortedDesc={isSortedDesc || false} />}
      </span>
    </th>
  );
};

TableHeaderCell.defaultProps = {
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
};

export default TableHeaderCell;
