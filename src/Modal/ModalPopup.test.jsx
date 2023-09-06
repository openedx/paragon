import React from 'react';
import { render } from '@testing-library/react';
import ModalPopup from './ModalPopup';
import '@testing-library/jest-dom/extend-expect';

/* eslint-disable react/prop-types */
jest.mock('./Portal', () => function PortalMock(props) {
  const { children, ...otherProps } = props;
  return (
    <paragon-portal data-testid="portal" {...otherProps}>
      {children}
    </paragon-portal>
  );
});

jest.mock('react-focus-on', () => ({
  FocusOn: (props) => {
    const { children, ...otherProps } = props;
    return (
      <focus-on data-testid="focus-on" {...otherProps}>{children}</focus-on>
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

    it('renders the dialog', () => {
      const { getByRole } = render(
        <ModalPopup
          positionRef={mockPositionRef}
          isOpen={isOpen}
          onClose={closeFn}
        >
          <Dialog />
        </ModalPopup>,
      );
      const dialog = getByRole('dialog', { name: 'A dialog' });
      expect(dialog).toBeInTheDocument();
    });

    it('renders a focus-on component with appropriate props', () => {
      const { getByTestId } = render(
        <ModalPopup
          positionRef={mockPositionRef}
          isOpen={isOpen}
          onClose={closeFn}
        >
          <Dialog />
        </ModalPopup>,
      );
      const focusOn = getByTestId('focus-on');
      expect(focusOn).toBeInTheDocument();
      expect(focusOn).toHaveAttribute('scrolllock', 'false');
      expect(focusOn).toHaveAttribute('enabled', 'true');
    });
  });

  it('when isOpen is false the dialog is not rendered', () => {
    const { queryByRole } = render(
      <ModalPopup positionRef={mockPositionRef} isOpen={false} onClose={jest.fn()}>
        <Dialog />
      </ModalPopup>,
    );
    const dialog = queryByRole('dialog', { name: 'A dialog' });
    expect(dialog).not.toBeInTheDocument();
  });

  describe('withPortal', () => {
    it('renders no portal by default', () => {
      const { queryByTestId } = render(
        <ModalPopup positionRef={mockPositionRef} isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>,
      );
      const portal = queryByTestId('portal');
      expect(portal).toBeNull();
    });

    it('renders with a portal if withPortal is true', () => {
      const { getByTestId } = render(
        <ModalPopup withPortal positionRef={mockPositionRef} isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>,
      );
      const portal = getByTestId('portal');
      expect(portal).not.toBeNull();
    });
  });

  describe('withArrow', () => {
    const popupArrowModalClass = '.pgn__modal-popup__arrow';

    arrowPlacements.forEach((side) => {
      it(`renders with placement ${side}`, () => {
        const { container } = render(
          <ModalPopup positionRef={mockPositionRef} hasArrow placement={side} isOpen onClose={jest.fn()}>
            <Dialog />
          </ModalPopup>,
        );
        const arrow = container.querySelector(`${popupArrowModalClass}-${side}`);
        expect(arrow).not.toBeNull();
      });
    });

    it('renders without arrow', () => {
      const { container } = render(
        <ModalPopup isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>,
      );
      const arrow = container.querySelector(popupArrowModalClass);
      expect(arrow).toBeNull();
    });

    it('renders with arrow', () => {
      const { container } = render(
        <ModalPopup positionRef={mockPositionRef} hasArrow isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>,
      );
      const arrow = container.querySelector(popupArrowModalClass);
      expect(arrow).toBeInTheDocument();
    });
  });
});
