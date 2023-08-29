import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IntlProvider } from 'react-intl';

import ControlledSelectionStatus from '../ControlledSelectionStatus';
import { clearSelectionAction, setSelectAllRowsAllPagesAction, setSelectedRowsAction } from '../data/actions';
import DataTableContext from '../../DataTableContext';
import {
  SELECT_ALL_TEST_ID,
  CLEAR_SELECTION_TEST_ID,
  CLEAR_SELECTION_TEXT,
} from '../data/constants';

const instance = {
  itemCount: 18,
  controlledTableSelections: [
    {
      selectedRows: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      isEntireTableSelected: false,
    },
    jest.fn(),
  ],
  page: [{ id: 1 }, { id: 2 }, { id: 5 }],
};

// eslint-disable-next-line react/prop-types
function ControlledSelectionStatusWrapper({ value, props = {}, ...rest }) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <DataTableContext.Provider value={value}>
        <ControlledSelectionStatus {...props} {...rest} />
      </DataTableContext.Provider>
    </IntlProvider>
  );
}

describe('<ControlledSelectionStatus />', () => {
  it('accepts a class name', () => {
    const customClassName = 'classy';
    render(
      <ControlledSelectionStatusWrapper
        value={instance}
        props={{ className: customClassName }}
        data-testid="selection-status-component"
      />,
    );
    const component = screen.getByTestId('selection-status-component');
    expect(component).toHaveClass(customClassName);
  });

  describe('entire table selected', () => {
    it('shows that entire table is selected', () => {
      const selectedRows = Array(instance.itemCount).map((item, index) => ({ id: index + 1 }));
      render(
        <ControlledSelectionStatusWrapper
          value={{
            ...instance,
            controlledTableSelections: [
              {
                selectedRows,
                isEntireTableSelected: true,
              },
              jest.fn(),
            ],
          }}
        />,
      );
      expect(screen.getByText(`All ${instance.itemCount} selected`)).toBeInTheDocument();
    });

    it('does not show select all button if entire table is selected', () => {
      const selectedRows = Array(instance.itemCount).map((item, index) => ({ id: index + 1 }));
      render(
        <ControlledSelectionStatusWrapper
          value={{
            ...instance,
            controlledTableSelections: [
              {
                selectedRows,
                isEntireTableSelected: true,
              },
              jest.fn(),
            ],
          }}
        />,
      );
      const selectAllButton = screen.queryByTestId(SELECT_ALL_TEST_ID);
      expect(selectAllButton).not.toBeInTheDocument();
    });

    it('selects any unselected page rows', () => {
      const selectedRows = Array(instance.itemCount).map((item, index) => ({ id: index + 1 }));
      const dispatchSpy = jest.fn();
      render(
        <ControlledSelectionStatusWrapper
          value={{
            ...instance,
            controlledTableSelections: [
              {
                selectedRows,
                isEntireTableSelected: true,
              },
              dispatchSpy,
            ],
          }}
        />,
      );
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
      const action = setSelectedRowsAction(instance.page, instance.itemCount);
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('individual rows selected', () => {
    it('shows the number of rows selected', () => {
      render(<ControlledSelectionStatusWrapper value={instance} />);
      const [selections] = instance.controlledTableSelections;
      expect(screen.getByText(`${selections.selectedRows.length.toString()} selected`)).toBeInTheDocument();
    });

    it('renders default selection text', () => {
      render(<ControlledSelectionStatusWrapper value={instance} />);
      expect(screen.getByText(CLEAR_SELECTION_TEXT)).toBeInTheDocument();
    });

    it('can accept clear selection text as a prop', () => {
      const customText = 'CLEAR ME';
      render(
        <ControlledSelectionStatusWrapper value={instance} props={{ clearSelectionText: customText }} />,
      );
      expect(screen.getByText(customText)).toBeInTheDocument();
      expect(screen.queryByText(CLEAR_SELECTION_TEXT)).not.toBeInTheDocument();
    });

    it('toggles select all on select all button click', () => {
      const dispatchSpy = jest.fn();
      render(
        <ControlledSelectionStatusWrapper
          value={{
            ...instance,
            controlledTableSelections: [
              instance.controlledTableSelections[0],
              dispatchSpy,
            ],
          }}
        />,
      );
      const selectAllButton = screen.getByTestId(SELECT_ALL_TEST_ID);
      fireEvent.click(selectAllButton);
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
      const action = setSelectAllRowsAllPagesAction();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });

    it('clears selection on clear selection button click', () => {
      const dispatchSpy = jest.fn();
      render(
        <ControlledSelectionStatusWrapper
          value={{
            ...instance,
            controlledTableSelections: [
              instance.controlledTableSelections[0],
              dispatchSpy,
            ],
          }}
        />,
      );
      const clearSelectionButton = screen.getByTestId(CLEAR_SELECTION_TEST_ID);
      fireEvent.click(clearSelectionButton);
      expect(dispatchSpy).toHaveBeenCalledTimes(1);
      const action = clearSelectionAction();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('no rows selected', () => {
    it('does not render the clear selection button', () => {
      render(
        <ControlledSelectionStatusWrapper
          value={{
            ...instance,
            controlledTableSelections: [
              {
                selectedRows: [],
                isEntireTableSelected: false,
              },
              jest.fn(),
            ],
          }}
        />,
      );
      const clearSelectionButton = screen.queryByTestId(CLEAR_SELECTION_TEST_ID);
      expect(clearSelectionButton).not.toBeInTheDocument();
    });
  });
});
