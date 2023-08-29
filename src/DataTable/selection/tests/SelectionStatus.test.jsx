import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import '@testing-library/jest-dom/extend-expect';

import SelectionStatus from '../SelectionStatus';
import DataTableContext from '../../DataTableContext';
import {
  SELECT_ALL_TEST_ID,
  CLEAR_SELECTION_TEST_ID,
  CLEAR_SELECTION_TEXT,
} from '../data/constants';

const instance = {
  page: [1, 2, 3, 4],
  toggleAllRowsSelected: () => {},
  itemCount: 101,
  filteredRows: [...new Array(27)],
  state: {
    selectedRowIds: {
      1: true,
      2: true,
      3: true,
      4: true,
    },
  },
};

// eslint-disable-next-line react/prop-types
function SelectionStatusWrapper({ value, props = {} }) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <DataTableContext.Provider value={value}>
        <SelectionStatus {...props} />
      </DataTableContext.Provider>
    </IntlProvider>
  );
}

describe('<SelectionStatus />', () => {
  it('Shows the number of rows selected', () => {
    render(<SelectionStatusWrapper value={instance} data-testid="selection-status" />);
    expect(screen.getByTestId('selection-status')).toHaveTextContent(instance.page.length.toString());
  });

  it('Shows that all rows are selected', () => {
    const selectedRowIds = {};
    [...new Array(101)].forEach((_, index) => {
      selectedRowIds[index] = true;
    });
    const value = {
      ...instance,
      state: {
        ...instance.state,
        selectedRowIds,
      },
    };
    render(
      <SelectionStatusWrapper value={value} />,
    );
    expect(screen.getByText('All 101 selected')).toBeInTheDocument();
    const selectAllButton = screen.queryByTestId(SELECT_ALL_TEST_ID);
    expect(selectAllButton).not.toBeInTheDocument();
  });

  it('toggles select all on select all button click', () => {
    const toggleAllRowsSpy = jest.fn();
    render(
      <SelectionStatusWrapper
        value={{ ...instance, toggleAllRowsSelected: toggleAllRowsSpy }}
      />,
    );
    const selectAllButton = screen.getByTestId(SELECT_ALL_TEST_ID);
    fireEvent.click(selectAllButton);
    expect(toggleAllRowsSpy).toHaveBeenCalledTimes(1);
    expect(toggleAllRowsSpy).toHaveBeenCalledWith(true);
  });

  it('updates select all button text after applying filters', () => {
    render(<SelectionStatusWrapper value={{ ...instance }} />);
    const selectAllButton = screen.getByTestId(SELECT_ALL_TEST_ID);
    expect(selectAllButton).toHaveTextContent('Select all 27');
  });

  it('updates select all text if filters value is empty', () => {
    render(<SelectionStatusWrapper value={{ ...instance, filteredRows: 0 }} />);
    const selectAllButton = screen.getByTestId(SELECT_ALL_TEST_ID);
    expect(selectAllButton).toHaveTextContent('Select all 101');
  });

  it('does not render the clear selection button if there are no selected rows', () => {
    const value = {
      ...instance,
      page: [],
      state: {
        ...instance.state,
        selectedRowIds: {},
      },
    };
    render(
      <SelectionStatusWrapper value={value} />,
    );
    expect(screen.queryByTestId(CLEAR_SELECTION_TEST_ID)).not.toBeInTheDocument();
  });

  it('toggles select all on clear all button click', () => {
    const toggleAllRowsSpy = jest.fn();
    render(
      <SelectionStatusWrapper value={{ ...instance, toggleAllRowsSelected: toggleAllRowsSpy }} />,
    );
    const clearSelectionButton = screen.getByTestId(CLEAR_SELECTION_TEST_ID);
    fireEvent.click(clearSelectionButton);
    expect(toggleAllRowsSpy).toHaveBeenCalledTimes(1);
    expect(toggleAllRowsSpy).toHaveBeenCalledWith(false);
  });

  it('renders default selection text', () => {
    render(<SelectionStatusWrapper value={instance} />);
    expect(screen.getByText(CLEAR_SELECTION_TEXT)).toBeInTheDocument();
  });

  it('can accept clear selection text as a prop', () => {
    const customText = 'CLEAR ME';
    render(<SelectionStatusWrapper value={instance} props={{ clearSelectionText: customText }} />);
    expect(screen.getByText(customText)).toBeInTheDocument();
    expect(screen.queryByText(CLEAR_SELECTION_TEXT)).not.toBeInTheDocument();
  });

  it('accepts a class name', () => {
    const customClassName = 'classy';
    render(<SelectionStatusWrapper value={instance} props={{ className: customClassName }} />);
    const component = screen.getByTestId('selection-status-component');
    expect(component).toHaveClass(customClassName);
  });
});
