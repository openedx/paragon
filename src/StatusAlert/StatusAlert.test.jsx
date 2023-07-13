import React from 'react';
import { mount } from 'enzyme';
import { render, screen, fireEvent } from '@testing-library/react';
import StatusAlert from '.';
import { Button } from '..';

const statusAlertOpen = (isOpen, wrapper) => {
  wrapper.update();
  expect(wrapper.find('.alert').hasClass('show')).toEqual(isOpen);
  expect(wrapper.find('StatusAlert').state('open')).toEqual(isOpen);
};
const dialog = 'Status Alert dialog';
const defaultProps = {
  dialog,
  onClose: () => {},
  open: true,
};

let wrapper;

describe('<StatusAlert />', () => {
  describe('correct rendering', () => {
    it('renders default view', () => {
      render(<StatusAlert {...defaultProps} />);
      const statusAlertDialog = screen.getByRole('alert');
      expect(statusAlertDialog.textContent).toContain(dialog);
      expect(screen.getAllByRole('button')).toHaveLength(1);
    });

    it('renders non-dismissible view', () => {
      render(<StatusAlert {...defaultProps} dismissible={false} />);
      const statusAlertDialog = screen.getByRole('alert');

      expect(statusAlertDialog.textContent).toContain(dialog);
      expect(screen.queryAllByRole('button')).toHaveLength(0);
    });

    it('renders custom aria-label view', () => {
      const customLabel = 'Dismiss this alert post-haste!';
      render(<StatusAlert {...defaultProps} closeButtonAriaLabel={customLabel} />);
      const button = screen.getByRole('button');

      expect(button.getAttribute('aria-label')).toBe(customLabel);
    });
  });

  describe('props received correctly', () => {
    it('component receives props', () => {
      wrapper = mount(<StatusAlert dialog={dialog} onClose={() => {}} />);

      statusAlertOpen(false, wrapper);
      wrapper.setProps({ open: true });
      statusAlertOpen(true, wrapper);
    });

    it('component receives props and ignores prop change', () => {
      render(<StatusAlert {...defaultProps} />);
      const statusAlertDialog = screen.getByRole('alert');

      // Initial rendering with default props
      expect(statusAlertDialog.textContent).toContain(dialog);

      // Simulate prop update
      render(<StatusAlert {...defaultProps} dialog="Changed alert dialog" />);
      expect(statusAlertDialog.textContent).toContain(dialog);
    });
  });

  describe('close functions properly', () => {
    beforeEach(() => {
      wrapper = mount(<StatusAlert {...defaultProps} />);
    });

    it('closes when x button pressed', () => {
      render(<StatusAlert {...defaultProps} />);
      const closeButton = screen.getByRole('button');
      fireEvent.click(closeButton);
      expect(screen.queryByRole('alert')).toBeNull();
    });

    it('closes when Enter key pressed', () => {
      render(<StatusAlert {...defaultProps} />);
      const closeButton = screen.getByRole('button');
      fireEvent.keyDown(closeButton, { key: 'Enter', code: 'Enter', charCode: 13 });
      expect(screen.queryByRole('alert')).toBeNull();
    });

    it('closes when Escape key pressed', () => {
      render(<StatusAlert {...defaultProps} />);
      const closeButton = screen.getByRole('button');

      fireEvent.keyDown(closeButton, { key: 'Enter', code: 'Enter', charCode: 13 });
      expect(screen.queryByRole('alert')).toBeNull();
    });

    it('calls callback function on close', () => {
      const spy = jest.fn();

      render(<StatusAlert {...defaultProps} onClose={spy} />);
      const closeButton = screen.getByRole('button');

      expect(spy).toHaveBeenCalledTimes(0);

      fireEvent.click(closeButton);
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('invalid keystrokes do nothing', () => {
    // beforeEach(() => {
    //   const app = document.createElement('div');
    //   document.body.appendChild(app);
    //   wrapper = mount(<StatusAlert {...defaultProps} />, { attachTo: app });
    // });
    beforeEach(() => {
      render(<StatusAlert {...defaultProps} />);
    });

    it('does nothing on invalid keystroke q', () => {
      const closeButton = screen.getByRole('button');
      expect(document.activeElement).toEqual(closeButton);

      fireEvent.keyDown(closeButton, { key: 'q', code: 'q', charCode: 113 });
      expect(document.activeElement).toEqual(closeButton);
    });

    it('does nothing on invalid keystroke + ctrl', () => {
      const closeButton = screen.getByRole('button');
      expect(document.activeElement).toEqual(closeButton);

      fireEvent.keyDown(closeButton, { key: 'Tab', ctrlKey: true });
      expect(document.activeElement).toEqual(closeButton);
    });
  });
  describe('focus functions properly', () => {
    it('focus function changes focus', () => {
      const app = document.createElement('div');
      document.body.appendChild(app);
      wrapper = mount(
        <div><Button.Deprecated label="test" /><StatusAlert {...defaultProps} /></div>,
        { attachTo: app },
      );
      const buttons = wrapper.find('button');

      // move focus away from default StatusAlert xButton
      buttons.at(0).simulate('click');
      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);

      const statusAlert = wrapper.find('StatusAlert').instance();
      statusAlert.focus();
      expect(buttons.at(1).html()).toEqual(document.activeElement.outerHTML);
    });
  });
});
