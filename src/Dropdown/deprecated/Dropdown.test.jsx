import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { waitFor } from '@testing-library/react';

import Dropdown from './index';
import Icon from '../../Icon';

const menuContent = (
  <>
    <Dropdown.Button>
      Search Engines
    </Dropdown.Button>
    <Dropdown.Menu>
      <Dropdown.Item href="https://google.com">Google</Dropdown.Item>
      <Dropdown.Item href="https://duckduckgo.com">DuckDuckGo</Dropdown.Item>
      <Dropdown.Item href="https://yahoo.com">Yahoo</Dropdown.Item>
    </Dropdown.Menu>
  </>
);

const menuOpen = (isOpen, wrapper) => {
  expect(wrapper.find('.dropdown').hasClass('show')).toEqual(isOpen);
  expect(wrapper.find('button').prop('aria-expanded')).toEqual(isOpen);
  expect(wrapper.find('[aria-hidden=false]').exists()).toEqual(isOpen);
};

describe('<Dropdown />', () => {
  describe('Rendering', () => {
    it('renders the happy path', () => {
      const tree = renderer.create((
        <Dropdown>
          {menuContent}
        </Dropdown>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders when there is html content in the trigger button', () => {
      const tree = renderer.create((
        <Dropdown>
          {menuContent}
        </Dropdown>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with custom menu content', () => {
      const tree = renderer.create((
        <Dropdown>
          Custom Content
        </Dropdown>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Mouse Interactions', () => {
    const app = document.createElement('div');
    document.body.appendChild(app);

    const wrapper = mount(<Dropdown>{menuContent}</Dropdown>, { attachTo: app });
    const menuTrigger = wrapper.find('button');
    const menuContainer = wrapper.find('.dropdown-menu');
    const menuItems = wrapper.find('.dropdown-menu a');

    it('opens on trigger click', () => {
      menuTrigger.simulate('click'); // Open
      menuOpen(true, wrapper);
    });

    it('should focus on the first item after opening', () => {
      expect(menuItems.first().is(':focus')).toBe(true);
    });

    it('does not close on click inside the menu', () => {
      menuContainer.simulate('click'); // Do nothing
      menuOpen(true, wrapper);
    });

    it('closes on trigger click', () => {
      menuTrigger.simulate('click'); // Close
      menuOpen(false, wrapper);
    });

    it('should focus on the trigger button after closing', () => {
      expect(menuTrigger.is(':focus')).toBe(true);
    });

    it('closes on document click when open', async () => {
      menuTrigger.simulate('click'); // Open
      menuOpen(true, wrapper);
      document.dispatchEvent(new MouseEvent('click'));
      await waitFor(() => {
        wrapper.update(); // Let react re-render
        menuOpen(false, wrapper);
      });
    });
  });

  describe('Keyboard Interactions', () => {
    // Note: menuContent has three items
    const app = document.createElement('div');
    document.body.appendChild(app);

    const wrapper = mount(<Dropdown>{menuContent}</Dropdown>, { attachTo: app });
    const menuTrigger = wrapper.find('button');
    const menuContainer = wrapper.find('.dropdown-menu');
    const menuItems = wrapper.find('.dropdown-menu a');

    it('opens on click', () => {
      menuTrigger.simulate('click'); // Open
      menuOpen(true, wrapper);
    });

    it('should focus on the first item after opening', () => {
      expect(menuItems.first().is(':focus')).toBe(true);
    });

    it('should focus the next item after ArrowDown keyDown', () => {
      menuContainer.simulate('keyDown', { key: 'ArrowDown' });
      expect(menuItems.at(1).is(':focus')).toBe(true);
    });

    it('should focus the next item after Tab keyDown', () => {
      menuContainer.simulate('keyDown', { key: 'Tab' });
      expect(menuItems.at(2).is(':focus')).toBe(true);
    });

    it('should loop focus to the first item after Tab keyDown on last item', () => {
      menuContainer.simulate('keyDown', { key: 'Tab' });
      expect(menuItems.at(0).is(':focus')).toBe(true);
    });

    it('should loop focus to the last item after ArrowUp keyDown on first item', () => {
      menuContainer.simulate('keyDown', { key: 'ArrowUp' });
      expect(menuItems.at(2).is(':focus')).toBe(true);
    });

    it('should focus the previous item after Shift + Tab keyDown', () => {
      menuContainer.simulate('keyDown', { key: 'Tab', shiftKey: true });
      expect(menuItems.at(1).is(':focus')).toBe(true);
    });

    it('should close the menu on Escape keyDown', () => {
      menuContainer.simulate('keyDown', { key: 'Escape' });
      menuOpen(false, wrapper);
    });

    it('should focus on the trigger button after closing', () => {
      expect(menuTrigger.is(':focus')).toBe(true);
    });
  });

  describe('Backwards compatibility', () => {
    it('renders the basic usage', () => {
      const tree = renderer.create((
        <Dropdown
          title="Search Engines"
          menuItems={[
            {
              label: 'Google',
              href: 'https://google.com',
            },
            {
              label: 'DuckDuckGo',
              href: 'https://duckduckgo.com',
            },
            {
              label: 'Yahoo',
              href: 'https://yahoo.com',
            },
          ]}
        />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders menu items as elements', () => {
      const tree = renderer.create((
        <Dropdown
          title="Search Engines"
          menuItems={[
            <a href="http://www.google.com">Google</a>,
            <a href="http://www.duckduckgo.com">DuckDuckGo</a>,
            <a href="http://www.yahoo.com">Yahoo</a>,
          ]}
        />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with icon element', () => {
      const tree = renderer.create((
        <Dropdown
          title="Search Engines"
          iconElement={<Icon className="fa fa-user px-3" />}
          menuItems={[
            {
              label: 'Google',
              href: 'https://google.com',
            },
            {
              label: 'DuckDuckGo',
              href: 'https://duckduckgo.com',
            },
            {
              label: 'Yahoo',
              href: 'https://yahoo.com',
            },
          ]}
        />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
