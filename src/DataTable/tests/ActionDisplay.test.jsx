import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ActionDisplay from '../ActionDisplay';
import DataTableContext from '../DataTableContext';

const instance = {
  selectedFlatRows: null,
  bulkActions: [],
  tableActions: [],
  controlledTableSelections: [
    {
      selectedRows: [],
      isEntireTableSelected: false,
    },
    jest.fn(),
  ],
};

// eslint-disable-next-line react/prop-types
function FirstAction({ as: Component }) {
  return (
    <Component className="class1">
      First Action
    </Component>
  );
}

// eslint-disable-next-line react/prop-types
function SecondAction({ as: Component }) {
  return (
    <Component className="class2">
      Second Action
    </Component>
  );
}

// eslint-disable-next-line react/prop-types
function ActionDisplayWrapper({ value = instance, props = {}, ...rest }) {
  return <DataTableContext.Provider value={value}><ActionDisplay {...props} {...rest} /></DataTableContext.Provider>;
}

describe('<ActionDisplay />', () => {
  it('renders null if there are no actions', () => {
    render(<ActionDisplayWrapper />);
    expect(screen.queryByTestId('action-display')).not.toBeInTheDocument();
  });

  it('renders null if there are no rows', () => {
    render(
      <ActionDisplayWrapper
        value={{
          ...instance, rows: null, tableActions: [<FirstAction />], bulkActions: [<SecondAction />],
        }}
      />,
    );
    expect(screen.queryByTestId('action-display')).not.toBeInTheDocument();
  });

  it('displays bulk actions when rows are selected', () => {
    render(
      <ActionDisplayWrapper
        value={{ ...instance, bulkActions: [<FirstAction />, <SecondAction />], selectedFlatRows: [{}, {}] }}
        data-testid=""
      />,
    );
    expect(screen.queryByTestId('bulk-actions')).toBeInTheDocument();
  });

  it('does not display bulk actions when no rows are selected (no table actions)', () => {
    render(
      <ActionDisplayWrapper
        value={{ ...instance, bulkActions: [<FirstAction />, <SecondAction />], selectedFlatRows: [] }}
      />,
    );
    expect(screen.queryByTestId('action-display')).not.toBeInTheDocument();
  });

  it('displays tableActions', () => {
    render(
      <ActionDisplayWrapper
        value={{ ...instance, tableActions: [<FirstAction />, <SecondAction />], selectedFlatRows: [] }}
      />,
    );
    expect(screen.queryByTestId('table-actions')).toBeInTheDocument();
  });

  it('displays table actions when both bulk actions and table actions are present - no selected rows', () => {
    render(
      <ActionDisplayWrapper
        value={{
          ...instance,
          bulkActions: [<FirstAction />],
          tableActions: [<SecondAction />],
          selectedFlatRows: [],
        }}
      />,
    );
    expect(screen.queryByTestId('table-actions')).toBeInTheDocument();
  });

  it('displays table actions with rows selected and no bulk actions', () => {
    // This is an edge case
    render(
      <ActionDisplayWrapper
        value={{ ...instance, tableActions: [<FirstAction />, <SecondAction />], selectedFlatRows: [{}, {}] }}
      />,
    );
    expect(screen.queryByTestId('table-actions')).toBeInTheDocument();
  });

  it('displays bulk actions instead of table actions when rows are selected', () => {
    render(
      <ActionDisplayWrapper
        value={{
          ...instance,
          bulkActions: [<FirstAction />],
          tableActions: [<SecondAction />],
          selectedFlatRows: [{}, {}],
        }}
      />,
    );
    expect(screen.queryByTestId('bulk-actions')).toBeInTheDocument();
  });
});
