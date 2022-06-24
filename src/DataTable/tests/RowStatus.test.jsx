import React from 'react';
import { mount } from 'enzyme';
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
    const wrapper = mount(<RowStatusWrapper />);
    expect(wrapper.text()).toEqual('');
  });
  it('displays the row status with pagination', () => {
    const pageSize = 10;
    const wrapper = mount(<RowStatusWrapper value={{ ...instance, page: Array(pageSize) }} />);
    expect(wrapper.text()).toEqual(`Showing ${pageSize} of ${instance.itemCount}.`);
  });
  it('displays the row status without pagination', () => {
    const pageSize = 10;
    const wrapper = mount(<RowStatusWrapper value={{ ...instance, rows: Array(pageSize) }} />);
    expect(wrapper.text()).toEqual(`Showing ${pageSize} of ${instance.itemCount}.`);
  });
  it('sets class names on the parent', () => {
    const wrapper = mount(<RowStatusWrapper value={{ ...instance, page: Array(15) }} />);
    expect(wrapper.find('div').props().className).toEqual(statusProps.className);
  });
});
