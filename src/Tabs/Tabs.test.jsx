import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor } from '@testing-library/react';
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
      <Tab title="Tab 1" eventKey="tab_1" notification={4} />
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
    it('renders notification property', () => {
      const { getAllByRole } = render(<TabsTestComponent />);

      const notification = getAllByRole('status');
      expect(notification.length).toBeGreaterThan(0);
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
      const { getByTestId } = render(<TabsTestComponent />);
      const dropdownMenu = getByTestId('tab-id');
      expect(dropdownMenu).toBeInTheDocument();
      expect(dropdownMenu.className).not.toContain('pgn__tab_invisible');
    });
    it('moreTabText is displayed', () => {
      const text = 'Mehr...';
      const { rerender, getByText } = render(<TabsTestComponent />);
      const toggleButton = getByText(MORE_TAB_TEXT);
      expect(toggleButton).toBeInTheDocument();
      fireEvent.click(toggleButton);
      rerender(<TabsTestComponent moreTabText={text} />);
      expect(toggleButton.textContent).toBe(text);
    });
    it('click on the dropdown item activates tab', () => {
      const { container, getByText, getAllByText } = render(<TabsTestComponent />);
      const toggleButton = getByText(MORE_TAB_TEXT);
      fireEvent.click(toggleButton);
      const dropdownItem = getAllByText('Tab 2');
      fireEvent.click(dropdownItem[0]);
      const tab = container.querySelector('[data-rb-event-key="tab_2"]');
      expect(tab.className).toContain('active');
    });
    it('select dropdown item after pressing Enter', async () => {
      const { getByText, getAllByText, getByRole } = render(<TabsTestComponent />);
      const toggleButton = getByText(MORE_TAB_TEXT);
      fireEvent.click(toggleButton);
      const dropdownItem = getAllByText('Tab 2');
      fireEvent.keyPress(dropdownItem[0], { key: 'Enter', code: 'Enter', charCode: 13 });
      await waitFor(() => {
        const tab = getByRole('tab', { name: 'Tab 2' });
        expect(tab.className).toContain('active');
      });
    });
    it('invalid child does not render', () => {
      const { getByRole } = render(
        <Tabs>
          {[false, undefined]}
        </Tabs>,
      );
      const navElement = getByRole('tablist');
      const childElements = navElement.children;
      expect(childElements.length).toEqual(1);
    });
  });
});
