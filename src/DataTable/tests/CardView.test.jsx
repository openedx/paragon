import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { selectColumn } from '../utils/getVisibleColumns';
import CardView, { DEFAULT_SKELETON_CARD_COUNT } from '../CardView';
import DataTableContext from '../DataTableContext';

const instance = {
  isSelectable: false,
  state: { selectedRowIds: {} },
  rows: [
    {
      id: '1',
      name: 'Name 1',
      isSelected: false,
      getToggleRowSelectedProps: () => ({ indeterminate: false, title: 'Toggle Row Selected' }),
    },
    {
      id: '2',
      name: 'Name 2',
      isSelected: true,
      getToggleRowSelectedProps: () => ({
        indeterminate: false,
        title: 'Toggle Row Selected',
        checked: true,
        onChange: () => {},
      }),
    },
  ],
  getTableProps: () => {},
  prepareRow: (row) => row,
  visibleColumns: [{
    Header: 'Name',
    accessor: 'name',
  }],
};

const loadingInstance = {
  ...instance,
  isLoading: true,
};

const selectableInstance = {
  ...instance,
  isSelectable: true,
  visibleColumns: [
    selectColumn,
    {
      Header: 'Name',
      accessor: 'name',
    },
  ],
};

// eslint-disable-next-line react/prop-types
function Card({ name }) {
  return <div>{name}</div>;
}

// eslint-disable-next-line react/prop-types
function CardViewWrapper({ value = instance, ...props }) {
  return (
    <DataTableContext.Provider value={value}>
      <CardView CardComponent={Card} {...props} />
    </DataTableContext.Provider>
  );
}

describe('<CardView />', () => {
  it('renders nothing if Table is empty', async () => {
    const { container } = render(<CardViewWrapper value={{ ...instance, getTableProps: null }} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders cards without selection component if DataTable is not selectable', async () => {
    render(<CardViewWrapper />);

    expect(screen.queryByText('Name 1')).toBeInTheDocument();
    expect(screen.queryByText('Name 2')).toBeInTheDocument();

    expect(screen.queryByTitle('Toggle Row Selected')).not.toBeInTheDocument();
  });

  it('renders cards with selection component if DataTable is selectable', async () => {
    render(<CardViewWrapper value={selectableInstance} />);

    expect(screen.queryByText('Name 1')).toBeInTheDocument();
    expect(screen.queryByText('Name 2')).toBeInTheDocument();

    const selectionComponents = screen.queryAllByTitle('Toggle Row Selected');
    expect(selectionComponents.length).toEqual(2);
    expect(selectionComponents[0]).not.toBeChecked();
    expect(selectionComponents[1]).toBeChecked();
  });

  it('renders card loading state', () => {
    render(<CardViewWrapper value={loadingInstance} />);
    expect(screen.queryAllByTestId('default-skeleton-card-component')).toHaveLength(DEFAULT_SKELETON_CARD_COUNT);
  });
});
