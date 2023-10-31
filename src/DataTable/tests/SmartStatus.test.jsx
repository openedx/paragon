import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import SmartStatus from '../SmartStatus';
import DataTableContext from '../DataTableContext';
import FilterStatus from '../FilterStatus';
import RowStatus from '../RowStatus';
import SelectionStatus from '../selection/SelectionStatus';

const filters = [{ id: 'name' }, { id: 'age' }];
const headers = [{ id: 'name', Header: 'name' }, { id: 'age', Header: 'age' }];
const filterNames = ['name', 'age'];
const itemCount = 101;
const instance = {
  state: {},
  selectedFlatRows: [],
  page: Array(3),
  // FilterStatus uses this as a proxy for filterability
  setAllFilters: () => {},
  toggleAllRowsSelected: () => {},
  itemCount,
  SelectionStatusComponent: SelectionStatus,
  FilterStatusComponent: FilterStatus,
  RowStatusComponent: RowStatus,
  headers,
};

// eslint-disable-next-line react/prop-types
function SmartStatusWrapper({ value, props }) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <DataTableContext.Provider value={value}>
        <SmartStatus {...props} />
      </DataTableContext.Provider>
    </IntlProvider>
  );
}

describe('<SmartStatus />', () => {
  it('Shows the selection status if rows are selected', () => {
    const contextValue = {
      ...instance,
      state: {
        selectedRowIds: {
          0: true,
          1: true,
        },
      },
    };
    const { getByTestId } = render(
      <SmartStatusWrapper value={contextValue} />,
    );
    expect(getByTestId('selection-status')).toBeInTheDocument();
  });
  it('Shows the filter state with selection turned off', () => {
    const { getByText } = render(<SmartStatusWrapper value={{ ...instance, state: { filters } }} />);
    expect(getByText(`Filtered by ${filterNames.join(', ')}`)).toBeInTheDocument();
  });
  it('Shows the filter state when there are no selected rows', () => {
    const { getByText } = render(
      <SmartStatusWrapper value={{ ...instance, state: { filters }, selectedFlatRows: [] }} />,
    );
    expect(getByText(`Filtered by ${filterNames.join(', ')}`)).toBeInTheDocument();
  });
  it('Shows the number of items on the page if there are no selected rows and no filters', () => {
    const { getByText } = render(
      <SmartStatusWrapper value={instance} />,
    );
    expect(getByText(`Showing ${instance.page.length} of ${itemCount}.`)).toBeInTheDocument();
  });
  it('Shows the number of items on the page if selection is off and there are no filters', () => {
    const { getByText } = render(
      <SmartStatusWrapper value={instance} />,
    );
    expect(getByText(`Showing ${instance.page.length} of ${itemCount}.`)).toBeInTheDocument();
  });
  it('shows an alternate selection status', () => {
    const altStatusText = 'horses R cool';
    function AltStatus() {
      return <div data-testid="alternate-status">{altStatusText}</div>;
    }
    const contextValue = {
      ...instance,
      SelectionStatusComponent: AltStatus,
      state: {
        selectedRowIds: {
          0: true,
          1: true,
        },
      },
    };
    const { getByTestId } = render(<SmartStatusWrapper value={contextValue} />);
    expect(getByTestId('alternate-status')).toBeInTheDocument();
  });
  it('shows an alternate row status', () => {
    const altStatusText = 'horses R cool';
    function AltStatus() {
      return <div data-testid="alternate-status">{altStatusText}</div>;
    }
    const { getByTestId } = render(<SmartStatusWrapper
      value={{ ...instance, RowStatusComponent: AltStatus }}
    />);
    expect(getByTestId('alternate-status')).toBeInTheDocument();
  });
  it('shows an alternate filter status', () => {
    const altStatusText = 'horses R cool';
    function AltStatus() {
      return <div data-testid="alternate-status">{altStatusText}</div>;
    }
    const { getByTestId } = render(<SmartStatusWrapper
      value={{ ...instance, FilterStatusComponent: AltStatus, state: { filters } }}
    />);
    expect(getByTestId('alternate-status')).toBeInTheDocument();
  });
});
