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

const arrowPlacements = [
  'auto',
  'auto-start',
  'auto-end',
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
];

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
    const popupArrowModalClass = '.pgn__modal-popup__arrow';
    arrowPlacements.forEach((side) => {
      it(`renders with placement ${side}`, () => {
        const wrapperPopup = shallow((
          <ModalPopup hasArrow placement={side} isOpen onClose={jest.fn()}>
            <Dialog />
          </ModalPopup>));
        expect(wrapperPopup.exists(`${popupArrowModalClass}-${side}`)).toBe(true);
      });
    });
    it('renders without arrow', () => {
      const wrapperPopup = shallow((
        <ModalPopup isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists(popupArrowModalClass)).toBe(false);
    });
    it('renders with arrow', () => {
      const wrapperPopup = shallow((
        <ModalPopup hasArrow isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>));
      expect(wrapperPopup.exists(popupArrowModalClass)).toBe(true);
    });
  });
});
