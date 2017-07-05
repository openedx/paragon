/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow, mount } from 'enzyme';

import Dropdown, { triggerKeys } from './index';

const props = {
  title: 'Example',
  menuItems: [
    { label: 'Example 1', href: 'http://example1.com' },
    { label: 'Example 2', href: 'http://example2.com' },
    { label: 'Example 3', href: 'http://example3.com' },
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
      expect(menu.find('li')).toHaveLength(props.menuItems.length);
    });

    it('with menu closed', () => {
      menuOpen(false, wrapper);
    });
  });

  describe('opens', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Dropdown
          {...props}
        />,
      );
    });

    it('on toggle click', () => {
      wrapper.find('[type="button"]').simulate('click');
      menuOpen(true, wrapper);
    });

    triggerKeys.OPEN_MENU.forEach((key) => {
      it(`on ${key}`, () => {
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

    it('on toggle click', () => {
      wrapper.find('[type="button"]').simulate('click');
      menuOpen(false, wrapper);
    });

    it('on document click', () => {
      document.querySelector('body').click();
      menuOpen(false, wrapper);
    });

    triggerKeys.CLOSE_MENU.forEach((key) => {
      it(`on button ${key}`, () => {
        wrapper.find('[type="button"]').simulate('keyDown', { key });
        menuOpen(false, wrapper);
      });

      it(`on menu item ${key}`, () => {
        wrapper.find('a').at(0).simulate('keyDown', { key });
        menuOpen(false, wrapper);
      });
    });
  });

  it('does not close when document click is inside the menu', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const wrapper = mount(
      <Dropdown
        {...props}
      />,
      { attachTo: div },
    );
    wrapper.find('[type="button"]').simulate('click');
    document.querySelector('ul').click();
    menuOpen(true, wrapper);
  });

  describe('focuses', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
        <Dropdown
          {...props}
        />,
      );
      wrapper.find('[type="button"]').simulate('click');
    });

    it('first menu item on open', () => {
      expect(wrapper.find('a').at(0).matchesElement(document.activeElement)).toEqual(true);
    });

    describe('forward in list', () => {
      triggerKeys.NAVIGATE_DOWN.forEach((key) => {
        it(`on ${key}`, () => {
          wrapper.find('a').at(0).simulate('keyDown', { key });
          expect(wrapper.find('a').at(1).matchesElement(document.activeElement)).toEqual(true);
        });
      });
    });

    describe('backward in list', () => {
      triggerKeys.NAVIGATE_UP.forEach((key) => {
        it(`on ${key}`, () => {
          wrapper.find('a').at(0).simulate('keyDown', { key: triggerKeys.NAVIGATE_DOWN[0] });
          wrapper.find('a').at(1).simulate('keyDown', { key });
          expect(wrapper.find('a').at(0).matchesElement(document.activeElement)).toEqual(true);
        });
      });
    });

    it('first menu item after looping through', () => {
      wrapper.find('a').at(0).simulate('keyDown', { key: triggerKeys.NAVIGATE_DOWN[0] });
      wrapper.find('a').at(1).simulate('keyDown', { key: triggerKeys.NAVIGATE_DOWN[0] });
      wrapper.find('a').at(2).simulate('keyDown', { key: triggerKeys.NAVIGATE_DOWN[0] });
      expect(wrapper.find('a').at(0).matchesElement(document.activeElement)).toEqual(true);
    });

    it('toggle on close', () => {
      wrapper.find('a').at(0).simulate('keyDown', { key: triggerKeys.CLOSE_MENU[0] });
      expect(wrapper.find('[type="button"]').matchesElement(document.activeElement)).toEqual(true);
    });
  });
});
