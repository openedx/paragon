import React from 'react';
import {render, waitFor} from '@testing-library/react';
import renderer, {act} from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

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
  expect(wrapper.container.querySelector('.dropdown').classList.contains('show')).toBe(isOpen);
  expect(wrapper.getByRole('button', { name: 'Search Engines' })).toHaveAttribute('aria-expanded', isOpen ? 'true' : 'false');
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
    let wrapper;

    beforeEach(() => {
      wrapper = render(<Dropdown>{menuContent}</Dropdown>);
    });

    it('opens on trigger click', async () => {
      await userEvent.click(wrapper.getByRole('button', { name: 'Search Engines' }));
      menuOpen(true, wrapper);
    });

    it('should focus on the first item after opening', async () => {
      await userEvent.click(wrapper.getByRole('button', { name: 'Search Engines' }));
      expect(wrapper.getByText('Google')).toHaveFocus();
    });

    it('does not close on click inside the menu', async () => {
      await userEvent.click(wrapper.getByRole('button', { name: 'Search Engines' }));
      await userEvent.click(wrapper.getByText('Google')); // Do nothing
      menuOpen(true, wrapper);
    });

    it('closes on trigger click', async () => {
      await userEvent.click(wrapper.getByRole('button', { name: 'Search Engines' }));
      await userEvent.click(wrapper.getByRole('button', { name: 'Search Engines' })); // Close
      menuOpen(false, wrapper);
    });

    it('should focus on the trigger button after closing', async () => {
      await userEvent.click(wrapper.getByRole('button', { name: 'Search Engines' }));
      await userEvent.click(wrapper.getByRole('button', { name: 'Search Engines' })); // Close
      expect(wrapper.getByRole('button', { name: 'Search Engines' })).toHaveFocus();
    });

    it('closes on document click when open', async () => {
      await userEvent.click(wrapper.getByRole('button', { name: 'Search Engines' }));
      menuOpen(true, wrapper);
      await act(() => {
        document.dispatchEvent(new MouseEvent('click'));
      });
      await menuOpen(false, wrapper);
    });
  });

  describe('Keyboard Interactions', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = render(<Dropdown>{menuContent}</Dropdown>);
    });

    it('opens on Enter keyDown', async () => {
      wrapper.getByRole('button', { name: 'Search Engines' }).focus();
      await userEvent.keyboard('{Enter}');
      menuOpen(true, wrapper);
    });

    it('opens on Space keyDown', async () => {
      wrapper.getByRole('button', { name: 'Search Engines' }).focus();
      await userEvent.keyboard('{space}');
      menuOpen(true, wrapper);
    });

    it('should focus on the first item after opening', async () => {
      wrapper.getByRole('button', { name: 'Search Engines' }).focus();
      await userEvent.keyboard('{Enter}');
      expect(wrapper.getByText('Google')).toHaveFocus();
    });

    it('should focus the next item after ArrowDown keyDown', async () => {
      wrapper.getByRole('button', { name: 'Search Engines' }).focus();
      await userEvent.keyboard('{Enter}');
      await userEvent.keyboard('{arrowdown}');
      expect(wrapper.getByText('DuckDuckGo')).toHaveFocus();
    });

    it('should focus the next item after Tab keyDown', async () => {
      wrapper.getByRole('button', { name: 'Search Engines' }).focus();
      await userEvent.keyboard('{Enter}');
      await userEvent.tab();
      expect(wrapper.getByText('DuckDuckGo')).toHaveFocus();
    });

    it('should loop focus to the first item after Tab keyDown on last item', async () => {
      wrapper.getByRole('button', { name: 'Search Engines' }).focus();
      await userEvent.keyboard('{Enter}');
      wrapper.getByRole('link', { name: 'Yahoo' }).focus();
      await userEvent.tab();
      expect(wrapper.getByText('Google')).toHaveFocus();
    });

    it('should loop focus to the last item after ArrowUp keyDown on first item', async () => {
      wrapper.getByRole('button', { name: 'Search Engines' }).focus();
      await userEvent.keyboard('{Enter}');
      wrapper.getByRole('link', { name: 'Google' }).focus();
      await userEvent.keyboard('{arrowup}');
      expect(wrapper.getByText('Yahoo')).toHaveFocus();
    });

    it('should focus the previous item after Shift + Tab keyDown', async () => {
      wrapper.getByRole('button', { name: 'Search Engines' }).focus();
      await userEvent.keyboard('{Enter}');
      wrapper.getByRole('link', { name: 'Yahoo' }).focus();
      await userEvent.keyboard('{Shift>}{Tab}');
      expect(wrapper.getByText('DuckDuckGo')).toHaveFocus();
    });

    it('should close the menu on Escape keyDown', async () => {
      wrapper.getByRole('button', { name: 'Search Engines' }).focus();
      await userEvent.keyboard('{Enter}');
      await userEvent.keyboard('{escape}');
      menuOpen(false, wrapper);
    });

    it('should focus on the trigger button after closing', async () => {
      wrapper.getByRole('button', { name: 'Search Engines' }).focus();
      await userEvent.keyboard('{Enter}');
      await userEvent.keyboard('{escape}');
      expect(wrapper.getByRole('button', { name: 'Search Engines' })).toHaveFocus();
    });
  });

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
