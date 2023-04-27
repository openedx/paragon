import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';
import Toast from './index';

/* eslint-disable-next-line react/prop-types */
function ToastWrapper({ children, ...props }) {
  return (
    <IntlProvider locale="en">
      <Toast {...props}>
        {children}
      </Toast>
    </IntlProvider>
  );
}

describe('<Toast />', () => {
  const onCloseHandler = () => {};
  const props = {
    onClose: onCloseHandler,
    show: true,
  };
  it('renders optional action as link', () => {
    const wrapper = mount((
      <ToastWrapper
        {...props}
        action={{
          label: 'Optional action',
          href: '#',
        }}
      >
        Success message.
      </ToastWrapper>));
    const toastLink = wrapper.find('a.btn');
    expect(toastLink).toHaveLength(1);
  });
  it('renders optional action as button', () => {
    const wrapper = mount((
      <ToastWrapper
        {...props}
        action={{
          label: 'Optional action',
          onClick: () => {},
        }}
      >
        Success message.
      </ToastWrapper>));
    const toastButton = wrapper.find('button.btn');
    expect(toastButton).toHaveLength(1);
  });
  it('autohide is set to false on onMouseOver and true on onMouseLeave', () => {
    const wrapper = mount((
      <ToastWrapper
        {...props}
      >
        Success message.
      </ToastWrapper>));
    wrapper.prop('onMouseOver');
    setTimeout(() => {
      const toast = wrapper.find(Toast);
      expect(toast.props().autohide).toEqual(true);
      expect(toast).toHaveLength(1);
    }, 6000);
    wrapper.prop('onMouseLeave');
    setTimeout(() => {
      const toast = wrapper.find('toast');
      expect(toast.props().autohide).toEqual(false);
      expect(toast).toHaveLength(1);
    }, 6000);
  });
  it('autohide is set to false onFocus and true onBlur', () => {
    const wrapper = mount((
      <ToastWrapper
        {...props}
      >
        Success message.
      </ToastWrapper>));
    wrapper.prop('onFocus');
    setTimeout(() => {
      const toast = wrapper.find(Toast);
      expect(toast.props().autohide).toEqual(true);
      expect(toast).toHaveLength(1);
    }, 6000);
    wrapper.prop('onBlur');
    setTimeout(() => {
      const toast = wrapper.find('toast');
      expect(toast.props().autohide).toEqual(false);
      expect(toast).toHaveLength(1);
    }, 6000);
  });
});
