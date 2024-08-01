import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import DataTableContext from './DataTableContext';

function RowStatus({ className, statusText }) {
  const { page, rows, itemCount } = useContext(DataTableContext);
  const pageSize = page?.length || rows?.length;

  if (!pageSize) {
    return null;
  }
  return (
    <div className={className} data-testid="row-status">
      {statusText || (
        <FormattedMessage
          id="pgn.DataTable.RowStatus.statusText"
          defaultMessage="Showing {pageSize} of {itemCount}."
          description="A text describing how many rows is shown in the table"
          values={{ itemCount, pageSize }}
        />
      )}
    </div>
  );
}

RowStatus.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** A text describing how many rows is shown in the table. */
  statusText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

RowStatus.defaultProps = {
  className: undefined,
  statusText: undefined,
};

export default RowStatus;
