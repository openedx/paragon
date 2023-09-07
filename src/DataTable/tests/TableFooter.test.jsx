import React from 'react';
import { render, screen } from '@testing-library/react';
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
    render(<TableFooterWrapper />);
    expect(screen.getByTestId('row-status')).toBeInTheDocument();
    expect(screen.getByLabelText('table pagination')).toBeInTheDocument();
  });

  it('accepts a class name', () => {
    const fakeClass = 'fancy-class';
    render(<TableFooterWrapper props={{ className: fakeClass }} />);
    const footer = screen.getByTestId('table-footer');
    expect(footer).toHaveClass(fakeClass);
  });

  it('renders children', () => {
    const leftText = "I'm on the left";
    render(<TableFooterWrapper><div>{leftText}</div></TableFooterWrapper>);
    const childDiv = screen.getByText(leftText);
    expect(childDiv).toBeInTheDocument();
  });

  it('uses custom RowStatus component, if provided', () => {
    const dataTableContextValue = {
      ...footerInstance,
      RowStatusComponent: () => <p>Hello world</p>,
    };
    render(<TableFooterWrapper value={dataTableContextValue} />);
    const customRowStatus = screen.getByText('Hello world');
    expect(customRowStatus).toBeInTheDocument();
  });
});
