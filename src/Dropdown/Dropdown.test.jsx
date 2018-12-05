/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount, shallow } from 'enzyme';

import Dropdown, { triggerKeys } from './index';
import Icon from '../Icon';

const props = {
  title: 'Example',
  menuItems: [
    { label: 'Example 1', href: 'http://example1.com' },
    { label: 'Example 2', href: 'http://example2.com' },
    { label: 'Example 3', href: 'http://example3.com' },
  ],
};

const menuOpen = (isOpen, wrapper) => {
  expect(wrapper.childAt(0).hasClass('show')).toEqual(isOpen);
  expect(wrapper.find('Button').prop('aria-expanded')).toEqual(isOpen);
  expect(wrapper.find('[aria-hidden=false]').exists()).toEqual(isOpen);
};

describe('<Dropdown />', () => {
  describe('renders', () => {
    const wrapper = mount(<Dropdown {...props} />);
    const menu = wrapper.find('.dropdown-menu');
    const button = wrapper.find('Button');

    it('with menu and toggle', () => {
      expect(button.exists()).toEqual(true);
      expect(menu.prop('aria-label')).toEqual(props.title);
      expect(menu.exists()).toEqual(true);
      expect(menu.find('a')).toHaveLength(props.menuItems.length);
    });

    it('with menu closed', () => {
      menuOpen(false, wrapper);
    });

    it('does not get focus when updated', () => {
      const activeElementHtml = document.activeElement.outerHTML;
      wrapper.instance().forceUpdate();
      expect(activeElementHtml).toEqual(document.activeElement.outerHTML);
    });
  });

  describe('opens', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Dropdown {...props} />);
    });

    it('on toggle click', () => {
      wrapper.find('Button').simulate('click');
      menuOpen(true, wrapper);
    });

    triggerKeys.OPEN_MENU.forEach((key) => {
      it(`on ${key}`, () => {
        wrapper.find('Button').simulate('keyDown', { key });
        menuOpen(true, wrapper);
      });
    });
  });

  describe('closes', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Dropdown {...props} />);
      wrapper.find('Button').simulate('click');
    });

    it('on toggle click', () => {
      wrapper.find('Button').simulate('click');
      menuOpen(false, wrapper);
    });

    it('on document click', () => {
      document.querySelector('body').click();
      wrapper.update();
      menuOpen(false, wrapper);
    });

    triggerKeys.CLOSE_MENU.forEach((key) => {
      it(`on button ${key}`, () => {
        wrapper.find('Button').simulate('keyDown', { key });
        menuOpen(false, wrapper);
      });

      it(`on menu item ${key}`, () => {
        wrapper.find('a').at(0).simulate('keyDown', { key });
        menuOpen(false, wrapper);
      });
    });

    triggerKeys.SELECT_MENU_ITEM.forEach((key) => {
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
    wrapper.find('Button').simulate('click');
    document.querySelector('.dropdown-menu').click();
    menuOpen(true, wrapper);
  });

  describe('focuses', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<Dropdown {...props} />);
      wrapper.find('Button').simulate('click');
    });

    it('first menu item on open', () => {
      expect(wrapper.find('a').at(0).html()).toEqual(document.activeElement.outerHTML);
    });

    describe('forward in list', () => {
      triggerKeys.NAVIGATE_DOWN.forEach((key) => {
        it(`on ${key}`, () => {
          wrapper.find('a').at(0).simulate('keyDown', { key });
          expect(wrapper.find('a').at(1).html()).toEqual(document.activeElement.outerHTML);
        });
      });
    });

    describe('backward in list', () => {
      triggerKeys.NAVIGATE_UP.forEach((key) => {
        it(`on ${key}`, () => {
          wrapper.find('a').at(0).simulate('keyDown', { key: triggerKeys.NAVIGATE_DOWN[0] });
          wrapper.find('a').at(1).simulate('keyDown', { key });
          expect(wrapper.find('a').at(0).html()).toEqual(document.activeElement.outerHTML);
        });
      });
    });

    describe('invalid key in open menu', () => {
      it('test', () => {
        menuOpen(true, wrapper);
        expect(wrapper.find('a').at(0).html()).toEqual(document.activeElement.outerHTML);
        wrapper.find('a').at(0).simulate('keyDown', { key: 'q' });
        menuOpen(true, wrapper);
        expect(wrapper.find('a').at(0).html()).toEqual(document.activeElement.outerHTML);
      });
    });

    it('first menu item after looping through', () => {
      wrapper.find('a').at(0).simulate('keyDown', { key: triggerKeys.NAVIGATE_DOWN[0] });
      wrapper.find('a').at(1).simulate('keyDown', { key: triggerKeys.NAVIGATE_DOWN[0] });
      wrapper.find('a').at(2).simulate('keyDown', { key: triggerKeys.NAVIGATE_DOWN[0] });
      expect(wrapper.find('a').at(0).html()).toEqual(document.activeElement.outerHTML);
    });

    describe('toggle', () => {
      it('toggle on close', () => {
        wrapper.find('a').at(0).simulate('keyDown', { key: triggerKeys.CLOSE_MENU[0] });
        wrapper.instance().forceUpdate();
        expect(wrapper.find('Button').html()).toEqual(document.activeElement.outerHTML);
      });

      it('does not toggle with invalid key', () => {
        wrapper = mount(<Dropdown {...props} />);
        // resetting focus
        wrapper.find('Button').getDOMNode().focus();

        menuOpen(false, wrapper);
        // open and close button to get focus on button
        wrapper.find('Button').prop('onClick');
        wrapper.instance().forceUpdate();

        wrapper.find('Button').prop('onClick');
        wrapper.instance().forceUpdate();

        expect(wrapper.find('Button').html()).toEqual(document.activeElement.outerHTML);

        wrapper.find('Button').simulate('keyDown', { key: 'q' });
        menuOpen(false, wrapper);
        expect(wrapper.find('Button').html()).toEqual(document.activeElement.outerHTML);
      });
    });
  });

  it('accepts menuItems prop with array of elements', () => {
    const wrapper = mount((
      <Dropdown
        {...props}
        menuItems={[
          <a href="http://www.google.com">Google</a>,
          <a href="http://www.duckduckgo.com">DuckDuckGo</a>,
          <a href="http://www.yahoo.com">Yahoo</a>,
        ]}
      />
    ));

    menuOpen(false, wrapper);
    wrapper.find('Button').simulate('click');
    menuOpen(true, wrapper);
    expect(wrapper.find('a')).toHaveLength(3);
  });

  describe('iconElement', () => {
    it('renders the <img> as icon element', () => {
      const url = 'https://raw.githubusercontent.com/edx/edx-platform/master/lms/static/images/profiles/default_50.png';
      const altText = 'Avatar icon for profile';
      const withIconUrlProps = {
        ...props,
        iconElement: <img src={url} alt={altText} />,
      };
      const wrapper = shallow(<Dropdown {...withIconUrlProps} />);
      const avatarIcon = wrapper.find('.icon-container');

      expect(avatarIcon.exists()).toEqual(true);
      expect(avatarIcon.find('img').prop('src')).toEqual(url);
      expect(avatarIcon.find('img').prop('alt')).toEqual(altText);
    });

    it('renders the <Icon> as icon element', () => {
      const withIconUrlProps = {
        ...props,
        iconElement: <Icon className={['fa', 'fa-2x', 'fa-user']} />,
      };
      const wrapper = shallow(<Dropdown {...withIconUrlProps} />);
      const avatarIcon = wrapper.find('.icon-container');

      expect(avatarIcon.exists()).toEqual(true);
    });
  });
});
