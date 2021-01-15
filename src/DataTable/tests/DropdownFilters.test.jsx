import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import DropdownFilters from '../DropdownFilters';
import { useWindowSize, DropdownButton } from '../..';

jest.mock('../../hooks/useWindowSize');

const props = {
  columns: [
    {
      Header: 'Bears',
      canFilter: true,
      render: () => <div>Bears filter</div>,
    },
    {
      Header: 'Occupation',
      canFilter: true,
      render: () => <div>Occupation filter</div>,
    },
    {
      Header: 'DOB',
      canFilter: false,
      render: () => <div>DOB filter</div>,
    },
  ],
};

describe('<DropdownFilters />', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  describe('non-mobile site', () => {
    it('renders a breakout filter', () => {
      useWindowSize.mockReturnValue({ width: 800 });
      const wrapper = mount(<DropdownFilters {...props} />);
      expect(wrapper.text()).toContain('Bears filter');
    });
    it('renders additional filters in a dropdown', () => {
      useWindowSize.mockReturnValue({ width: 800 });
      const wrapper = mount(<DropdownFilters {...props} />);
      // filter should be rendered in the dropdown, so should not be present before
      // clicking the button.
      expect(wrapper.text()).not.toContain('Occupation filter');
      const filtersButton = wrapper.find(DropdownButton);
      expect(filtersButton).toHaveLength(1);
      act(() => {
        filtersButton.find('button').simulate('click');
      });
      expect(wrapper.text()).toContain('Occupation filter');
    });
    it('should not render filters for non-filterable rows', () => {
      useWindowSize.mockReturnValue({ width: 800 });
      const wrapper = mount(<DropdownFilters {...props} />);
      expect(wrapper.text()).not.toContain('DOB filter');
      const filtersButton = wrapper.find('button');
      filtersButton.simulate('click');
      expect(wrapper.text()).not.toContain('DOB filter');
    });
    it('does not render a dropdown if there is only one filter', () => {
      useWindowSize.mockReturnValue({ width: 800 });
      const wrapper = mount(<DropdownFilters columns={[props.columns[1]]} />);
      expect(wrapper.text()).toContain('Occupation filter');
      expect(wrapper.find(DropdownButton)).toHaveLength(0);
    });
  });
  describe('on mobile', () => {
    it('does not render a breakout filter', () => {
      useWindowSize.mockReturnValue({ width: 500 });
      const wrapper = mount(<DropdownFilters {...props} />);
      expect(wrapper.text()).not.toContain('Bears filter');
    });
    it('renders all filters in the dropdown', () => {
      useWindowSize.mockReturnValue({ width: 500 });
      const wrapper = mount(<DropdownFilters {...props} />);
      const filtersButton = wrapper.find('button');
      filtersButton.simulate('click');
      expect(wrapper.text()).toContain('Bears filter');
      expect(wrapper.text()).toContain('Occupation filter');
    });
  });
});
