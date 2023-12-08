import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import userEvent from '@testing-library/user-event';
import DataTableContext from '../DataTableContext';
import DataViewToggle, { DATA_VIEW_TOGGLE_VALUES } from '../DataViewToggle';

const instance = {
  dataViewToggleOptions: {
    isDataViewToggleEnabled: false,
    onDataViewToggle: jest.fn(),
    defaultActiveStateValue: 'a_val',
  },
};

describe('data view toggle behavior', () => {
  test('no rendering when isDataViewToggleEnabled is false', () => {
    render(
      <DataTableContext.Provider value={instance}>
        <DataViewToggle />
      </DataTableContext.Provider>,
    );
    expect(screen.queryByRole('group')).not.toBeInTheDocument();
  });

  test('The card button is marked active when defaultActiveStateValue is missing', () => {
    const noActiveValue = {
      dataViewToggleOptions: {
        isDataViewToggleEnabled: true,
        onDataViewToggle: jest.fn(),
      },
    };
    render(
      <DataTableContext.Provider value={noActiveValue}>
        <DataViewToggle />
      </DataTableContext.Provider>,
    );
    expect(screen.queryByRole('group')).toBeInTheDocument();
    expect(screen.getByLabelText(DATA_VIEW_TOGGLE_VALUES.card.alt)).toHaveClass('btn-icon-primary-active');

    expect(screen.getByLabelText(DATA_VIEW_TOGGLE_VALUES.list.alt)).not.toHaveClass('btn-icon-primary-active');
    expect(screen.getByLabelText(DATA_VIEW_TOGGLE_VALUES.list.alt)).toHaveClass('btn-icon-primary');
  });

  test('The list button is marked active when defaultActiveStateValue is list', () => {
    const listIsDefaultActive = {
      dataViewToggleOptions: {
        isDataViewToggleEnabled: true,
        onDataViewToggle: jest.fn(),
        defaultActiveStateValue: DATA_VIEW_TOGGLE_VALUES.list.value,
      },
    };
    render(
      <DataTableContext.Provider value={listIsDefaultActive}>
        <DataViewToggle />
      </DataTableContext.Provider>,
    );
    expect(screen.queryByRole('group')).toBeInTheDocument();
    expect(screen.getByLabelText(DATA_VIEW_TOGGLE_VALUES.list.alt)).toHaveClass('btn-icon-primary-active');

    expect(screen.getByLabelText(DATA_VIEW_TOGGLE_VALUES.card.alt)).not.toHaveClass('btn-icon-primary-active');
    expect(screen.getByLabelText(DATA_VIEW_TOGGLE_VALUES.card.alt)).toHaveClass('btn-icon-primary');
  });

  test('no rendering when isDataViewToggleEnabled is absent/malformed', () => {
    const instanceCorrupt = {
      dataViewToggleOptions: {
        defaultActiveStateValue: 'a_val',
      },
    };
    render(
      <DataTableContext.Provider value={instanceCorrupt}>
        <DataViewToggle />
      </DataTableContext.Provider>,
    );
    expect(screen.queryByRole('group')).not.toBeInTheDocument();
  });

  test('onDataViewToggle is invoked when clicking on buttons', async () => {
    const onDataViewToggle = jest.fn();
    render(
      <DataTableContext.Provider
        value={{
          ...instance,
          dataViewToggleOptions: {
            ...instance.dataViewToggleOptions,
            isDataViewToggleEnabled: true,
            onDataViewToggle,
          },
        }}
      >
        <DataViewToggle />
      </DataTableContext.Provider>,
    );
    expect(screen.queryByRole('group')).toBeInTheDocument();
    const cardButton = screen.getByLabelText(DATA_VIEW_TOGGLE_VALUES.card.alt);
    await act(async () => {
      await userEvent.click(cardButton);
    });
    expect(onDataViewToggle).toHaveBeenCalledWith(DATA_VIEW_TOGGLE_VALUES.card.value);

    const listButton = screen.getByLabelText(DATA_VIEW_TOGGLE_VALUES.list.alt);
    await act(async () => {
      await userEvent.click(listButton);
    });
    expect(onDataViewToggle).toHaveBeenCalledWith(DATA_VIEW_TOGGLE_VALUES.list.value);
  });
});
