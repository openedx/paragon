import React from 'react';
import PropTypes from 'prop-types';
import { Add, Remove } from '../../icons';

const ExpandRow = ({ row }) => (
  <span {...row.getToggleRowExpandedProps()}>
    {row.isExpanded ? <Remove /> : <Add />}
  </span>
);

ExpandRow.propTypes = {
  /** Row data that is received from `react-table` API. */
  row: PropTypes.object.isRequired, // eslint-disable-line
};

export default ExpandRow;
