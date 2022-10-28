import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DataTableContext from './DataTableContext';
import { useRows } from './hooks';
import { CardGrid } from '..';

function CardItem({
  row,
  prepareRow,
  isSelectable,
  SelectionComponent,
  CardComponent,
  selectionPlacement,
}) {
  prepareRow(row);
  const { isSelected } = row;

  if (isSelectable && SelectionComponent) {
    return (
      <div className={classNames(
        'pgn__data-table__selectable-card',
        {
          'is-selected': isSelected,
          'selection-right': selectionPlacement === 'right',
          'selection-left': selectionPlacement !== 'right',
        },
      )}
      >
        <CardComponent {...row} />
        <SelectionComponent row={row} />
      </div>
    );
  }

  return <CardComponent {...row} />;
}

function CardView({
  columnSizes, CardComponent, className, selectionPlacement,
}) {
  const {
    getTableProps, prepareRow, displayRows,
  } = useRows();
  const { isSelectable, visibleColumns } = useContext(DataTableContext);
  // use the same component for card selection that is used for row selection
  // otherwise view switching might break if row selection uses component that supports backend filtering / sorting
  const selectionComponent = isSelectable ? visibleColumns.find((col) => col.id === 'selection')?.Cell : undefined;

  if (!getTableProps) {
    return null;
  }

  return (
    <CardGrid
      className={classNames('pgn__data-table-card-view', className)}
      columnSizes={columnSizes}
    >
      {displayRows.map((row) => (
        <CardItem
          key={row.id}
          CardComponent={CardComponent}
          SelectionComponent={selectionComponent}
          isSelectable={isSelectable}
          row={row}
          prepareRow={prepareRow}
          selectionPlacement={selectionPlacement}
        />
      ))}
    </CardGrid>
  );
}

CardItem.defaultProps = {
  SelectionComponent: undefined,
};

CardItem.propTypes = {
  row: PropTypes.shape({
    getToggleRowSelectedProps: PropTypes.func,
    isSelected: PropTypes.bool,
  }).isRequired,
  prepareRow: PropTypes.func.isRequired,
  isSelectable: PropTypes.bool.isRequired,
  CardComponent: PropTypes.func.isRequired,
  SelectionComponent: PropTypes.func,
  selectionPlacement: PropTypes.oneOf(['right', 'left']).isRequired,
};

CardView.defaultProps = {
  columnSizes: {
    xs: 12,
    lg: 6,
    xl: 4,
  },
  className: '',
  selectionPlacement: 'right',
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
  /** If the Cards are selectable this prop determines from which side of the Card to show selection component. */
  selectionPlacement: PropTypes.oneOf(['left', 'right']),
};

export default CardView;
