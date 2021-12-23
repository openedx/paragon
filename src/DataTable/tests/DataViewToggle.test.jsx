import React from 'react';

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import userEvent from '@testing-library/user-event';
import DataTableContext from '../DataTableContext';
import DataViewToggle from '../DataViewToggle';

const instance = {
  dataViewToggleOptions: {
    isDataViewToggleEnabled: false,
    onDataViewToggle: jest.fn(),
    defaultActiveStateValue: 'a_val',
  },
};

describe('data view toggle default state', () => {
  it('no rendering when isDataViewToggleEnabled is false', () => {
    render(
      <DataTableContext.Provider value={instance}>
        <DataViewToggle />
      </DataTableContext.Provider>,
    );
    expect(screen.queryByRole('group')).not.toBeInTheDocument();
  });
  it('no rendering when isDataViewToggleEnabled is absent/malformed', () => {
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
  it('onDataViewToggle is invoked when clicking on buttons', () => {
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
    const cardButton = screen.getByLabelText('Card');
    userEvent.click(cardButton);
    expect(onDataViewToggle).toHaveBeenCalledWith('card');

    const listButton = screen.getByLabelText('List');
    userEvent.click(listButton);
    expect(onDataViewToggle).toHaveBeenCalledWith('list');
  });
});
