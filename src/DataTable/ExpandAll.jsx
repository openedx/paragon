import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Button } from '..';

const ExpandAll = ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
  <span {...getToggleAllRowsExpandedProps()}>
    {isAllRowsExpanded ? (
      <Button variant="link" size="inline">
        <FormattedMessage
          id="pgn.DataTable.ExpandAll.collapseAllLabel"
          defaultMessage="Collapse all"
          description="Title of the filters components"
        />
      </Button>
    ) : (
      <Button variant="link" size="inline">
        <FormattedMessage
          id="pgn.DataTable.ExpandAll.expandAllLabel"
          defaultMessage="Expand all"
          description="Title of the filters components"
        />
      </Button>
    )}
  </span>
);

ExpandAll.propTypes = {
  /** A helper function that returns props necessary for expand / collapse all rows behaviour. */
  getToggleAllRowsExpandedProps: PropTypes.func.isRequired,
  /** Specifies whether all rows are expanded. */
  isAllRowsExpanded: PropTypes.bool.isRequired,
};

export default ExpandAll;
