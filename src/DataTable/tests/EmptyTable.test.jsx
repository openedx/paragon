import React from 'react';
import { render } from '@testing-library/react';

import EmptyTableContent from '../EmptyTable';
import DataTableContext from '../DataTableContext';

const props = {
  className: 'foo',
  content: 'Nothing here',
};

describe('<EmptyTableContent />', () => {
  it('displays the content', () => {
    const { getByText } = render(
      <DataTableContext.Provider value={{ rows: [] }}>
        <EmptyTableContent {...props} />
      </DataTableContext.Provider>,
    );

    expect(getByText(props.content)).toBeInTheDocument();
  });

  it('adds props to the div', () => {
    const { getByTestId } = render(
      <DataTableContext.Provider value={{ rows: [] }}>
        <EmptyTableContent {...props} data-testid="test-div" />
      </DataTableContext.Provider>,
    );

    const divElement = getByTestId('test-div');
    expect(divElement).toHaveClass(`pgn__data-table-empty ${props.className}`);
  });

  it('does not display if there are rows', () => {
    const { container } = render(
      <DataTableContext.Provider value={{ rows: Array(1) }}>
        <EmptyTableContent {...props} />
      </DataTableContext.Provider>,
    );

    expect(container.textContent).toBe('');
  });

  it('does not display if the table data is loading', () => {
    const { container } = render(
      <DataTableContext.Provider value={{ isLoading: true }}>
        <EmptyTableContent {...props} />
      </DataTableContext.Provider>,
    );

    expect(container.textContent).toBe('');
  });
});
