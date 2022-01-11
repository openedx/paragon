import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';

const ExpandAll = ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
  <span {...getToggleAllRowsExpandedProps()}>
    {isAllRowsExpanded
      ? <Button variant="link" size="inline">Collapse all</Button>
      : <Button variant="link" size="inline">Expand all</Button>}
  </span>
);

ExpandAll.propTypes = {
  /** A helper function that returns props necessary for expand / collapse all rows behaviour. */
  getToggleAllRowsExpandedProps: PropTypes.func.isRequired,
  /** Specifies whether all rows are expanded. */
  isAllRowsExpanded: PropTypes.bool.isRequired,
};

export default ExpandAll;
