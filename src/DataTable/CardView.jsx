import React from 'react';
import PropTypes from 'prop-types';
import { useRows } from './hooks';
import { CardGrid } from '..';

const CardView = ({
  columnSizes, CardComponent, className,
}) => {
  const {
    getTableProps, prepareRow, displayRows,
  } = useRows();

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
      className={className}
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
  className: '',
};

CardView.propTypes = {
  className: PropTypes.string,
  columnSizes: PropTypes.shape(),
  /** Your card component must be individualized to your table.
   * It will be called with props from the "row" of data it will display */
  CardComponent: PropTypes.func.isRequired,
};

export default CardView;
