import React from 'react';
import { mount, shallow } from 'enzyme';

import { StatusAlert } from '.';
import { Button } from '..';

const dialog = 'Status Alert dialog';
const theme = {
  component: {
    border: {
      radius: 12,
    },
  },
  text: {
    fontWeight: { normal: 21 },
    fontSize: { base: '12px' },
  },
  colors: { primary500: '#abc' },
  getThemeColor: jest.fn(),
};
const defaultProps = {
  dialog,
  onClose: () => {},
  open: true,
  theme,
};

let wrapper;
let event;

describe('<StatusAlert />', () => {
  describe('correct rendering', () => {
    it('renders default view', () => {
      wrapper = mount(<StatusAlert {...defaultProps} />);
      const statusAlertDialog = wrapper.find('.alert-dialog');

      expect(statusAlertDialog.text()).toEqual(dialog);
      expect(wrapper.find('withDeprecatedProps(Button)')).toHaveLength(1);
    });

    it('renders non-dismissible view', () => {
      wrapper = mount(<StatusAlert {...defaultProps} dismissible={false} />);
      const statusAlertDialog = wrapper.find('.alert-dialog');

      expect(statusAlertDialog.text()).toEqual(dialog);
      expect(wrapper.find('withDeprecatedProps(Button)')).toHaveLength(0);
    });

    it('renders custom aria-label view', () => {
      const customLabel = 'Dismiss this alert post-haste!';
      wrapper = mount(<StatusAlert {...defaultProps} closeButtonAriaLabel={customLabel} />);
      const button = wrapper.find('withDeprecatedProps(Button)').at(0);
      expect(button.prop('aria-label')).toEqual(customLabel);
    });
  });

  const assertStatusAlertOpen = (isOpen) => {
    expect(wrapper.find('.alert').hasClass('show')).toEqual(isOpen);
  };
  describe('props received correctly', () => {
    it('component receives props', () => {
      wrapper = shallow(
        <StatusAlert theme={theme} dialog={dialog} onClose={() => {}} />,
      );
      assertStatusAlertOpen(false);
      wrapper.setProps({ open: true });
      assertStatusAlertOpen(true);
    });

    it('component receives props and ignores prop change', () => {
      wrapper = shallow(<StatusAlert {...defaultProps} />);

      assertStatusAlertOpen(true);
      wrapper.setProps({ dialog: 'Changed alert dialog' });
      assertStatusAlertOpen(true);
    });
  });

  describe('close functions properly', () => {
    beforeEach(() => {
      wrapper = shallow(<StatusAlert {...defaultProps} />);
      event = { preventDefault: jest.fn() };
    });

    it('closes when x button pressed', () => {
      assertStatusAlertOpen(true);
      wrapper.find('withDeprecatedProps(Button)').at(0).simulate(
        'click',
        event,
      );
      assertStatusAlertOpen(false);
    });

    it('closes when Enter key pressed', () => {
      assertStatusAlertOpen(true);
      wrapper.find('withDeprecatedProps(Button)').at(0).simulate(
        'keyDown',
        { ...event, key: 'Enter' },
      );
      assertStatusAlertOpen(false);
    });

    it('closes when Escape key pressed', () => {
      assertStatusAlertOpen(true);
      wrapper.find('withDeprecatedProps(Button)').at(0).simulate(
        'keyDown',
        { ...event, key: 'Escape' },
      );
      assertStatusAlertOpen(false);
    });

    it('calls callback function on close', () => {
      const spy = jest.fn();

      wrapper = mount(<StatusAlert {...defaultProps} onClose={spy} />);

      expect(spy).toHaveBeenCalledTimes(0);

      // press X button
      wrapper.find('withDeprecatedProps(Button)').at(0).simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('invalid keystrokes do nothing', () => {
    beforeEach(() => {
      wrapper = shallow(<StatusAlert {...defaultProps} />);
    });

    it('does nothing on invalid keystroke q', () => {
      const buttons = wrapper.find('withDeprecatedProps(Button)');

      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      assertStatusAlertOpen(true);
      buttons.at(0).simulate('keyDown', { key: 'q' });
      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      assertStatusAlertOpen(true);
    });

    it('does nothing on invalid keystroke + ctrl', () => {
      const buttons = wrapper.find('withDeprecatedProps(Button)');

      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      assertStatusAlertOpen(true);
      buttons.at(0).simulate('keyDown', { key: 'Tab', ctrlKey: true });
      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);
      assertStatusAlertOpen(true);
    });
  });
  describe('focus functions properly', () => {
    it('focus function changes focus', () => {
      wrapper = mount(<div><Button.Deprecated label="test" /><StatusAlert {...defaultProps} /></div>);

      const buttons = wrapper.find('withDeprecatedProps(Button)');

      // move focus away from default StatusAlert xButton
      buttons.at(0).simulate('click');
      expect(buttons.at(0).html()).toEqual(document.activeElement.outerHTML);

      const statusAlert = wrapper.find('StatusAlert').instance();
      statusAlert.focus();
      expect(buttons.at(1).html()).toEqual(document.activeElement.outerHTML);
    });
  });
});
