import React from 'react';
import PropTypes from 'prop-types';
import { useRows } from './hooks';
import { CardGrid } from '..';

const CardView = ({
  tableName, columnSizes, CardComponent,
}) => {
  if (!tableName) {
    return null;
  }

  const {
    getTableProps, prepareRow, displayRows,
  } = useRows(tableName);

  const renderCards = () => displayRows.map((row) => {
    prepareRow(row);
    return (
      <CardComponent {...row} key={row.id} />
    );
  });

  if (!getTableProps) {
    return null;
  }

  return (
    <CardGrid
      columnSizes={columnSizes}
    >
      {renderCards()}
    </CardGrid>
  );
};

CardView.defaultProps = {
  columnSizes: {
    xs: 12,
    lg: 6,
    xl: 4,
  },
};

CardView.propTypes = {
  tableName: PropTypes.string.isRequired,
  columnSizes: PropTypes.shape(),
  /** Your card component must be individualized to your table. It will be called with the row as props. */
  CardComponent: PropTypes.func.isRequired,
};

export default CardView;
