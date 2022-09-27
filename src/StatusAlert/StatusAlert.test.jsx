import React from 'react';
import { mount } from 'enzyme';

import StatusAlert from './index';
import { Button } from '../index';

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
      wrapper = mount(<StatusAlert {...defaultProps} />);
      const statusAlertDialog = wrapper.find('.alert-dialog');

      expect(statusAlertDialog.text()).toEqual(dialog);
      expect(wrapper.find('button')).toHaveLength(1);
    });

    it('renders non-dismissible view', () => {
      wrapper = mount(<StatusAlert {...defaultProps} dismissible={false} />);
      const statusAlertDialog = wrapper.find('.alert-dialog');

      expect(statusAlertDialog.text()).toEqual(dialog);
      expect(wrapper.find('button')).toHaveLength(0);
    });

    it('renders custom aria-label view', () => {
      const customLabel = 'Dismiss this alert post-haste!';
      wrapper = mount(<StatusAlert {...defaultProps} closeButtonAriaLabel={customLabel} />);
      const button = wrapper.find('button').at(0);

      expect(button.prop('aria-label')).toEqual(customLabel);
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
      wrapper = mount(<StatusAlert {...defaultProps} />);

      statusAlertOpen(true, wrapper);
      wrapper.setProps({ dialog: 'Changed alert dialog' });
      statusAlertOpen(true, wrapper);
    });
  });

  describe('close functions properly', () => {
    beforeEach(() => {
      wrapper = mount(<StatusAlert {...defaultProps} />);
    });

    it('closes when x button pressed', () => {
      statusAlertOpen(true, wrapper);
      wrapper.find('button').at(0).simulate('click');
      statusAlertOpen(false, wrapper);
    });

    it('closes when Enter key pressed', () => {
      statusAlertOpen(true, wrapper);
      wrapper.find('button').at(0).simulate('keyDown', { key: 'Enter' });
      statusAlertOpen(false, wrapper);
    });

    it('closes when Escape key pressed', () => {
      statusAlertOpen(true, wrapper);
      wrapper.find('button').at(0).simulate('keyDown', { key: 'Escape' });
      statusAlertOpen(false, wrapper);
    });

    it('calls callback function on close', () => {
      const spy = jest.fn();

      wrapper = mount(<StatusAlert {...defaultProps} onClose={spy} />);

      expect(spy).toHaveBeenCalledTimes(0);

      // press X button
      wrapper.find('button').at(0).simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('invalid keystrokes do nothing', () => {
    beforeEach(() => {
      const app = document.createElement('div');
      document.body.appendChild(app);
      wrapper = mount(<StatusAlert {...defaultProps} />, { attachTo: app });
    });

    it('does nothing on invalid keystroke q', () => {
      const buttons = wrapper.find('button');

      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      statusAlertOpen(true, wrapper);
      buttons.at(0).simulate('keyDown', { key: 'q' });
      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      statusAlertOpen(true, wrapper);
    });

    it('does nothing on invalid keystroke + ctrl', () => {
      const buttons = wrapper.find('button');

      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      statusAlertOpen(true, wrapper);
      buttons.at(0).simulate('keyDown', { key: 'Tab', ctrlKey: true });
      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      statusAlertOpen(true, wrapper);
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
