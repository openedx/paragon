import React from 'react';
import { mount } from 'enzyme';

import SmartStatus from '../SmartStatus';
import SelectionState from '../SelectionState';

const noFiltersProps = {
  isSelectable: true,
  numberOfSelectedRows: 4,
  toggleAllRowsSelected: () => {},
  pageSize: 20,
  itemCount: 101,
};

const props = {
  ...noFiltersProps,
  filterNames: ['name', 'age'],
  isFilterable: true,
};

describe('<SmartStatus />', () => {
  it('Shows the selection status if rows are selected', () => {
    const wrapper = mount(<SmartStatus {...props} />);
    expect(wrapper.find(SelectionState)).toHaveLength(1);
  });
  it('Shows the filter state with selection turned off', () => {
    const wrapper = mount(<SmartStatus {...props} isSelectable={false} />);
    expect(wrapper.text()).toContain(props.filterNames.join(', '));
  });
  it('Shows the filter state when there are no selected rows', () => {
    const wrapper = mount(<SmartStatus {...props} numberOfSelectedRows={0} />);
    expect(wrapper.text()).toContain(props.filterNames.join(', '));
  });
  it('Shows the number of items on the page if the there are no selected rows and no filters', () => {
    const wrapper = mount(<SmartStatus {...noFiltersProps} numberOfSelectedRows={0} />);
    expect(wrapper.text()).toContain(`Showing ${props.pageSize} of ${props.itemCount}`);
  });
  it('Shows the number of items on the page if selection is off and there are no filters', () => {
    const wrapper = mount(<SmartStatus {...noFiltersProps} isSelectable={false} />);
    expect(wrapper.text()).toContain(`Showing ${props.pageSize} of ${props.itemCount}`);
  });
});
