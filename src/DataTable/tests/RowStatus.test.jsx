import React from 'react';
import { render } from '@testing-library/react';
import { IntlProvider } from 'react-intl';

import RowStatus from '../RowStatus';
import DataTableContext from '../DataTableContext';

const instance = {
  itemCount: 30,
};

const statusProps = {
  className: 'rowClass',
};

// eslint-disable-next-line react/prop-types
function RowStatusWrapper({ value = instance, props = statusProps }) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <DataTableContext.Provider value={value}>
        <RowStatus {...props} />
      </DataTableContext.Provider>
    </IntlProvider>
  );
}

describe('<RowStatus />', () => {
  it('returns null if there is no pageSize', () => {
    const { container } = render(<RowStatusWrapper />);
    expect(container.firstChild).toBeNull();
  });
  it('displays the row status with pagination', () => {
    const pageSize = 10;
    const { getByText } = render(<RowStatusWrapper value={{ ...instance, page: Array(pageSize) }} />);
    const statusText = getByText(`Showing ${pageSize} of ${instance.itemCount}.`);
    expect(statusText).toBeInTheDocument();
  });
  it('displays the row status without pagination', () => {
    const pageSize = 10;
    const { getByText } = render(<RowStatusWrapper value={{ ...instance, rows: Array(pageSize) }} />);
    const statusText = getByText(`Showing ${pageSize} of ${instance.itemCount}.`);
    expect(statusText).toBeInTheDocument();
  });
  it('sets class names on the parent', () => {
    const { container } = render(<RowStatusWrapper value={{ ...instance, page: Array(15) }} />);
    const statusDiv = container.querySelector('div');
    expect(statusDiv).toHaveClass(statusProps.className);
  });
});
