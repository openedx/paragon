import React from 'react';
// import { mount } from 'enzyme';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import renderer from 'react-test-renderer';

import Tabs, { MORE_TAB_TEXT } from './index';
import Tab from './Tab';

jest.mock('../hooks/useIndexOfLastVisibleChild', () => ({
  __esModule: true,
  default: () => 0,
}));

let getAttributeValue = 'true';

const disconnect = jest.fn();
const observeMutation = jest.fn((callback) => callback([{
  target: {
    getAttribute: () => getAttributeValue,
  },
}]));
const observeResize = jest.fn();
const unobserve = jest.fn();

window.MutationObserver = jest.fn((callback) => ({
  disconnect,
  observe: () => observeMutation(callback),
  unobserve,
}));

window.ResizeObserver = jest.fn(() => ({
  disconnect,
  observe: observeResize,
  unobserve,
}));

function TabsTestComponent(props) {
  return (
    <Tabs {...props} defaultActiveKey="tab_1">
      <Tab title="Tab 1" notification={4} eventKey="tab_1" />
      <Tab title="Tab 2" eventKey="tab_2" />
      <Tab title="Tab 3" eventKey="tab_3" />
    </Tabs>
  );
}

describe('<Tabs />', () => {
  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = '';
    observeMutation.mockClear();
  });

  describe('correct rendering', () => {
    it('renders successfully', () => {
      const tree = renderer.create(<TabsTestComponent />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('renders notification property', async () => {
      render(<TabsTestComponent />);

      await waitFor(() => {
        const notification = screen.getAllByRole('status');
        expect(notification.length).toBeGreaterThan(0);
      });
    });
    it('MutationObserver is initialized', () => {
      render(<TabsTestComponent />);
      expect(observeMutation).toHaveBeenCalledTimes(1);

      observeMutation.mockClear();
      getAttributeValue = 'false';
      render(<TabsTestComponent />);
      expect(observeMutation).toHaveBeenCalledTimes(1);
    });
    it('dropdown menu is displayed', () => {
      render(<TabsTestComponent />);
      const dropdownMenu = screen.getByText('More...');
      screen.debug(dropdownMenu);
      // expect(dropdownMenu).toBeTruthy();
      // expect(dropdownMenu.className).not.toContain('pgn__tab_invisible');
    });
    it('moreTabText is displayed', () => {
      const text = 'Mehr...';
      const { rerender } = render(<TabsTestComponent />);
      const toggleButton = screen.getByText('More...');
      expect(toggleButton.textContent).toBe(MORE_TAB_TEXT);
      fireEvent.click(toggleButton);
      rerender(<TabsTestComponent moreTabText={text} />);
      expect(toggleButton.textContent).toBe(text);
    });
    it('click on the dropdown item activates tab', async () => {
      render(<TabsTestComponent />);
      const toggleButton = screen.getByText('More...');
      fireEvent.click(toggleButton);
      const dropdownItem = screen.getAllByText('Tab 2');
      fireEvent.click(dropdownItem[0]);
      await waitFor(() => {
        const tab = screen.getByRole('tab', { name: 'Tab 2' });
        expect(tab.className).toContain('active');
      });
    });
    it('select dropdown item after pressing Enter', async () => {
      render(<TabsTestComponent />);
      const toggleButton = screen.getByText('More...');
      fireEvent.click(toggleButton);
      const dropdownItem = screen.getAllByText('Tab 2');
      fireEvent.keyPress(dropdownItem[0], { key: 'Enter', code: 'Enter', charCode: 13 });
      await waitFor(() => {
        const tab = screen.getByRole('tab', { name: 'Tab 2' });
        expect(tab.className).toContain('active');
      });
    });
    it('invalid child does not render', () => {
      render(
        <Tabs>
          {[false, undefined]}
        </Tabs>,
      );
      const navElement = screen.getByRole('tablist');
      const childElements = navElement.children;
      expect(childElements.length).toEqual(1);
    });
  });
});
