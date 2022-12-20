import React from 'react';
import { shallow } from 'enzyme';
import { FocusOn } from 'react-focus-on';
import ModalLayer, { ModalBackdrop } from './ModalLayer';
import { ModalContextProvider } from './ModalContext';

/* eslint-disable react/prop-types */
jest.mock('./Portal', () => function PortalMock(props) {
  const { children, ...otherProps } = props;
  return (
    <paragon-portal {...otherProps}>
      {children}
    </paragon-portal>
  );
});

jest.mock('react-focus-on', () => ({
  FocusOn: (props) => {
    const { children, ...otherProps } = props;
    return (
      <focus-on {...otherProps}>{children}</focus-on>
    );
  },
}));

function Dialog() {
  return (
    <div role="dialog" aria-label="A dialog">
      A dialog.
    </div>
  );
}

describe('<ModalLayer />', () => {
  describe('when isOpen', () => {
    const isOpen = true;
    const closeFn = jest.fn();
    const wrapper = shallow((
      <ModalLayer isOpen={isOpen} onClose={closeFn}>
        <Dialog />
      </ModalLayer>
    ));

    it('renders the dialog and a modal context provider', () => {
      const dialog = wrapper.find(Dialog);
      expect(dialog.length).toBe(1);
    });

    it('renders a modal context provider', () => {
      const contextProvider = wrapper.find(ModalContextProvider);
      expect(contextProvider.props().isOpen).toBe(isOpen);
      expect(contextProvider.props().onClose).toBe(closeFn);
    });

    it('renders a focus-on component with appropriate props', () => {
      const focusOn = wrapper.find(FocusOn);
      const focusOnProps = focusOn.props();
      expect(focusOnProps.scrollLock).toBe(true);
      expect(focusOnProps.enabled).toBe(true);
      expect(focusOnProps.onEscapeKey).toBe(closeFn);
    });
  });

  test('when isOpen is false the dialog is not rendered', () => {
    const wrapper = shallow((
      <ModalLayer isOpen={false} onClose={jest.fn()}>
        <Dialog />
      </ModalLayer>
    ));
    const dialog = wrapper.find(Dialog);
    expect(dialog.length).toBe(0);
  });

  describe('Backdrop', () => {
    it('closes a non-blocking modal layer when clicked', () => {
      const closeFn = jest.fn();
      const wrapper = shallow((
        <ModalLayer isOpen onClose={closeFn} isBlocking={false}>
          <Dialog />
        </ModalLayer>
      ));

      const backdrop = wrapper.find(ModalBackdrop);
      backdrop.simulate('click');
      expect(closeFn).toHaveBeenCalled();
    });
    it('does not close a blocking modal layer when clicked', () => {
      const closeFn = jest.fn();
      const wrapper = shallow((
        <ModalLayer isOpen onClose={closeFn} isBlocking>
          <Dialog />
        </ModalLayer>
      ));

      const backdrop = wrapper.find(ModalBackdrop);
      backdrop.simulate('click');
      expect(closeFn).not.toHaveBeenCalled();
    });
  });
});
