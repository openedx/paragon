import React from 'react';
import PropTypes from 'prop-types';
import { Icon, IconButton } from '..';
import { ExpandLess, ExpandMore } from '../../icons';

const EXPAND_COLLAPSE_ICON_SIZE = 'inline';

const ExpandRow = ({ row }) => (
  <span {...row.getToggleRowExpandedProps()}>
    {row.isExpanded
      ? <IconButton src={ExpandLess} iconAs={Icon} alt="Collapse row" size={EXPAND_COLLAPSE_ICON_SIZE} />
      : <IconButton src={ExpandMore} iconAs={Icon} alt="Expand row" size={EXPAND_COLLAPSE_ICON_SIZE} />}
  </span>
);

ExpandRow.propTypes = {
  /** Row data that is received from `react-table` API. */
  row: PropTypes.shape({
    /** Specifies if row is in expanded state. */
    isExpanded: PropTypes.bool,
    /** Function that returns props for the wrapper component to handle expand behaviour. */
    getToggleRowExpandedProps: PropTypes.func.isRequired,
  }).isRequired,
};

export default ExpandRow;
