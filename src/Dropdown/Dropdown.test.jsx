/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';

import Dropdown from './index';

const props = {
  title: 'Example',
  menuItems: [
    { label: 'Example 1', href: 'http://example1.com' },
    { label: 'Example 2', href: 'http://example2.com' },
  ],
};

describe('<Dropdown />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Dropdown
        {...props}
      />,
    );

    const menu = wrapper.find('ul');
    const button = wrapper.find('[type="button"]');

    expect(button.exists()).toEqual(true);
    expect(button.prop('aria-expanded')).toEqual(false);

    expect(menu.exists()).toEqual(true);
    expect(menu.find('li')).toHaveLength(2);
    expect(menu.prop('aria-label')).toEqual(props.title);
    expect(menu.prop('aria-hidden')).toEqual(true);
  });

  it('renders correctly', () => {
    const wrapper = shallow(
      <Dropdown
        {...props}
      />,
    );

    expect(wrapper.find('[type="button"]').exists()).toEqual(true);
    expect(wrapper.find('li')).toHaveLength(2);
    expect(wrapper.find('[aria-expanded=false]').exists()).toEqual(true);
  });

  it('opens on click', () => {
    const wrapper = shallow(
      <Dropdown
        {...props}
      />,
    );

    const button = wrapper.find('[type="button"]');

    button.simulate('click');
    expect(wrapper.find('[aria-hidden=false]').exists()).toEqual(true);
  });
});
