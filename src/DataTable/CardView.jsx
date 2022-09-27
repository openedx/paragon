import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRows } from './hooks';
import { CardGrid } from '..';

function CardView({
  columnSizes, CardComponent, className,
}) {
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
      className={classNames('pgn__data-table-card-view', className)}
      columnSizes={columnSizes}
    >
      {renderCards()}
    </CardGrid>
  );
}

CardView.defaultProps = {
  columnSizes: {
    xs: 12,
    lg: 6,
    xl: 4,
  },
  className: '',
};

CardView.propTypes = {
  /** The class name for the CardGrid component */
  className: PropTypes.string,
  /**
   * An object containing the desired column size at each breakpoint, following a similar
   * props API as ``react-bootstrap/Col``
   */
  columnSizes: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  /** Your card component must be individualized to your table.
   * It will be called with props from the "row" of data it will display */
  CardComponent: PropTypes.func.isRequired,
};

export default CardView;
