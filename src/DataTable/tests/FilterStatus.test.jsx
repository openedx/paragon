import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IntlProvider } from 'react-intl';

import FilterStatus from '../FilterStatus';
import DataTableContext from '../DataTableContext';

const filterNames = ['color', 'breed', 'discipline'];
const filters = filterNames.map((name) => ({ id: name }));
const instance = { state: { filters }, setAllFilters: () => {} };
const filterProps = {
  buttonClassName: 'buttonClass',
  variant: 'variant',
  size: 'lorge',
  onClick: () => {},
  clearFiltersText: 'CLEAR ME',
  className: 'filterClass',
  showFilteredFields: true,
};
const filterPropsNoFiltered = {
  ...filterProps,
  showFilteredFields: false,
  clearFiltersText: '',
};

// eslint-disable-next-line react/prop-types
function FilterStatusWrapper({ value, props }) {
  return (
    <IntlProvider locale="en" messages={{}}>
      <DataTableContext.Provider value={value}>
        <FilterStatus {...props} />
      </DataTableContext.Provider>
    </IntlProvider>
  );
}

describe('<FilterStatus />', () => {
  it('passes props to the button', () => {
    const { getByText } = render(<FilterStatusWrapper value={instance} props={filterProps} />);
    const button = getByText(filterProps.clearFiltersText);
    expect(button).toHaveClass(filterProps.buttonClassName);
  });
  it('clears the selection on click', () => {
    const clearSpy = jest.fn();
    const { getByText } = render(
      <FilterStatusWrapper value={{ ...instance, setAllFilters: clearSpy }} props={filterProps} />,
    );
    const button = getByText(filterProps.clearFiltersText);
    fireEvent.click(button);
    expect(clearSpy).toHaveBeenCalledTimes(1);
    expect(clearSpy).toHaveBeenCalledWith([]);
  });
  it('displays the current filter names', () => {
    const { getByText } = render(<FilterStatusWrapper value={instance} props={filterProps} />);
    expect(getByText(`Filtered by ${filterNames.join(', ')}`)).toBeInTheDocument();
  });
  it('sets class names on the parent', () => {
    const { container } = render(<FilterStatusWrapper value={instance} props={filterProps} />);
    const statusDiv = container.querySelector('div');
    expect(statusDiv).toHaveClass(filterProps.className);
  });
  it('returns null if setAllFilters is not present (table is not filterable)', () => {
    const { container } = render(<FilterStatusWrapper value={{}} props={filterProps} />);
    expect(container.firstChild).toBeNull();
  });
  it('hides filter text', () => {
    const { queryByText } = render(<FilterStatusWrapper value={instance} props={filterPropsNoFiltered} />);
    expect(queryByText(filterProps.clearFiltersText)).toBeNull();
  });
});
