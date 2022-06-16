import React from 'react';
import { shallow } from 'enzyme';
import { FocusOn } from 'react-focus-on';
import ModalPopup from './ModalPopup';
import { ModalContextProvider } from './ModalContext';
import Portal from './Portal';

/* eslint-disable react/prop-types */
jest.mock('./Portal', () => (props) => {
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

const Dialog = () => (
  <div role="dialog" aria-label="A dialog">
    A dialog.
  </div>
);

const mockPositionRef = { current: null };

describe('<ModalPopup />', () => {
  describe('when isOpen', () => {
    const isOpen = true;
    const closeFn = jest.fn();
    const wrapper = shallow((
      <ModalPopup
        positionRef={mockPositionRef}
        isOpen={isOpen}
        onClose={closeFn}
      >
        <Dialog />
      </ModalPopup>
    ));

    it('renders the dialog', () => {
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
      expect(focusOnProps.scrollLock).toBe(false);
      expect(focusOnProps.enabled).toBe(true);
      expect(focusOnProps.onEscapeKey).toBe(closeFn);
    });
  });

  it('when isOpen is false the dialog is not rendered', () => {
    const wrapper = shallow((
      <ModalPopup positionRef={mockPositionRef} isOpen={false} onClose={jest.fn()}>
        <Dialog />
      </ModalPopup>
    ));
    const dialog = wrapper.find(Dialog);
    expect(dialog.length).toBe(0);
  });

  describe('withPortal', () => {
    it('renders no portal by default', () => {
      const wrapper = shallow((
        <ModalPopup positionRef={mockPositionRef} isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>
      ));
      expect(wrapper.find(Portal).length).toBe(0);
    });
    it('renders with a portal if withPortal is true', () => {
      const wrapper = shallow((
        <ModalPopup withPortal positionRef={mockPositionRef} isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>
      ));
      expect(wrapper.find(Portal).length).toBe(1);
    });
  });
  it('myTest', () => {
    const isOpen = true;
    const closeFn = jest.fn();
    const wrapperPopup = shallow((
      <ModalPopup isOpen={isOpen} onClose={closeFn}>
        <Dialog />
      </ModalPopup>));
    expect(wrapperPopup.exists('.pgn__modal-popup__arrow')).toBe(false);
  });

  it('myTest 2', () => {
    const isOpen = true;
    const closeFn = jest.fn();
    const wrapperPopup = shallow((
      <ModalPopup hasArrow isOpen={isOpen} onClose={closeFn}>
        <Dialog />
      </ModalPopup>));
    expect(wrapperPopup.exists('.pgn__modal-popup__arrow')).toBe(true);
  });

  it('myTest 3', () => {
    const isOpen = true;
    const closeFn = jest.fn();
    const wrapperPopup = shallow((
      <ModalPopup hasArrow placement="right" isOpen={isOpen} onClose={closeFn}>
        <Dialog />
      </ModalPopup>));
    expect(wrapperPopup.exists('.pgn__modal-popup__arrow-right')).toBe(true);
  });

  it('myTest 4', () => {
    const isOpen = true;
    const closeFn = jest.fn();
    const wrapperPopup = shallow((
      <ModalPopup hasArrow placement="left" isOpen={isOpen} onClose={closeFn}>
        <Dialog />
      </ModalPopup>));
    expect(wrapperPopup.exists('.pgn__modal-popup__arrow-left')).toBe(true);
  });

  it('myTest 4', () => {
    const isOpen = true;
    const closeFn = jest.fn();
    const wrapperPopup = shallow((
      <ModalPopup hasArrow placement="left-start" isOpen={isOpen} onClose={closeFn}>
        <Dialog />
      </ModalPopup>));
    expect(wrapperPopup.exists('.pgn__modal-popup__arrow-left-start')).toBe(true);
  });
});
