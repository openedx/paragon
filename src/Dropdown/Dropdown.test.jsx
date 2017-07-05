/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount } from 'enzyme';

import Dropdown, { triggerKeys } from './index';

const props = {
  title: 'Example',
  menuItems: [
    { label: 'Example 1', href: 'http://example1.com' },
    { label: 'Example 2', href: 'http://example2.com' },
  ],
};

const menuOpen = (isOpen, wrapper) => {
  expect(wrapper.hasClass('show')).toEqual(isOpen);
  expect(wrapper.find('[type="button"]').prop('aria-expanded')).toEqual(isOpen);
  expect(wrapper.find('[aria-hidden=false]').exists()).toEqual(isOpen);
};

describe('<Dropdown />', () => {
  describe('renders', () => {
    const wrapper = shallow(
      <Dropdown
        {...props}
      />,
    );
    const menu = wrapper.find('ul');
    const button = wrapper.find('[type="button"]');

    it('with menu and toggle', () => {
      expect(button.exists()).toEqual(true);
      expect(menu.prop('aria-label')).toEqual(props.title);
      expect(menu.exists()).toEqual(true);
      expect(menu.find('li')).toHaveLength(2);
    });

    it('with menu closed', () => {
      menuOpen(false, wrapper);
    });
  });

  describe('opens', () => {
    it('on click', () => {
      const wrapper = mount(
        <Dropdown
          {...props}
        />,
      );
      wrapper.find('[type="button"]').simulate('click');
      menuOpen(true, wrapper);
    });

    triggerKeys.OPEN_MENU.forEach((key) => {
      it(`on ${key}`, () => {
        const wrapper = mount(
          <Dropdown
            {...props}
          />,
        );
        wrapper.find('[type="button"]').simulate('keyDown', { key });
        menuOpen(true, wrapper);
      });
    });
  });

  describe('closes', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Dropdown
          {...props}
        />,
      );
      wrapper.find('[type="button"]').simulate('click');
    });

    it('on click', () => {
      wrapper.find('[type="button"]').simulate('click');
      menuOpen(false, wrapper);
    });

    triggerKeys.CLOSE_MENU.forEach((key) => {
      it(`on ${key}`, () => {
        wrapper.find('[type="button"]').simulate('keyDown', { key });
        menuOpen(false, wrapper);
      });
    });
  });
});
