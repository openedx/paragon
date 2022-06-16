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
  describe('withArrow', () => {
    it('renders without arrow', () => {
      const wrapperPopup = shallow((
        <ModalPopup isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow')).toBe(false);
    });
    it('renders with arrow', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow')).toBe(true);
    });
    it('renders with placement auto', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="auto" isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-auto')).toBe(true);
    });
    it('renders with placement auto-start', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="auto-start" isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-auto-start')).toBe(true);
    });
    it('renders with placement auto-end', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="auto-end" isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-auto-end')).toBe(true);
    });
    it('renders with placement right', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="right" isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-right')).toBe(true);
    });
    it('renders with placement right-start', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="right-start" isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-right-start')).toBe(true);
    });
    it('renders with placement right-end', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="right-end" isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-right-end')).toBe(true);
    });
    it('renders with placement left', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="left" isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-left')).toBe(true);
    });
    it('renders with placement left-start', () => {
      const isOpen = true;
      const closeFn = jest.fn();
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="left-start" isOpen={isOpen} onClose={closeFn}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-left-start')).toBe(true);
    });
    it('renders with placement left-end', () => {
      const isOpen = true;
      const closeFn = jest.fn();
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="left-end" isOpen={isOpen} onClose={closeFn}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-left-end')).toBe(true);
    });
    it('renders with placement top', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="top" isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-top')).toBe(true);
    });
    it('renders with placement top-start', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="top-start" isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-top-start')).toBe(true);
    });
    it('renders with placement top-end', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="top-end" isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-top-end')).toBe(true);
    });
    it('renders with placement bottom', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="bottom" isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-bottom')).toBe(true);
    });
    it('renders with placement bottom-start', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="bottom-start" isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-bottom-start')).toBe(true);
    });
    it('renders with placement bottom-end', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow placement="bottom-end" isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists('.pgn__modal-popup__arrow-bottom-end')).toBe(true);
    });
  });
});
