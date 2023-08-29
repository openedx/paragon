import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IntlProvider } from 'react-intl';

import TableFooter from '../TableFooter';
import DataTableContext from '../DataTableContext';

const footerInstance = {
  previousPage: () => {},
  nextPage: () => {},
  canPreviousPage: true,
  canNextPage: true,
  state: { pageIndex: 1 },
  pageCount: 3,
  itemCount: 30,
  RowStatusComponent: undefined,
  page: [1],
};

// eslint-disable-next-line react/prop-types
function TableFooterWrapper({ value = footerInstance, props = {}, children }) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <DataTableContext.Provider value={value}>
        <TableFooter {...props}>{children}</TableFooter>
      </DataTableContext.Provider>
    </IntlProvider>
  );
}

describe('<TableFooter />', () => {
  it('Renders the default footer', () => {
    const { getByLabelText, getByTestId } = render(<TableFooterWrapper />);
    expect(getByTestId('row-status')).toBeInTheDocument();
    expect(getByLabelText('table pagination')).toBeInTheDocument();
  });

  it('accepts a class name', () => {
    const fakeClass = 'fancy-class';
    const { container } = render(<TableFooterWrapper props={{ className: fakeClass }} />);
    const footer = container.querySelector('.pgn__data-table-footer');
    expect(footer).toHaveClass(fakeClass);
  });

  it('renders children', () => {
    const leftText = "I'm on the left";
    const { getByText } = render(<TableFooterWrapper><div>{leftText}</div></TableFooterWrapper>);
    const childDiv = getByText(leftText);
    expect(childDiv).toBeInTheDocument();
  });

  it('uses custom RowStatus component, if provided', () => {
    const dataTableContextValue = {
      ...footerInstance,
      RowStatusComponent: () => <p>Hello world</p>,
    };
    const { getByText } = render(<TableFooterWrapper value={dataTableContextValue} />);
    const customRowStatus = getByText('Hello world');
    expect(customRowStatus).toBeInTheDocument();
  });
});
