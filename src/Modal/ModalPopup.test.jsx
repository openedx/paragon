import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalPopup from './ModalPopup';

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
      render(
        <ModalPopup
          positionRef={mockPositionRef}
          isOpen={isOpen}
          onClose={closeFn}
        >
          <Dialog />
        </ModalPopup>,
      );
      const dialog = screen.getByRole('dialog', { name: 'A dialog' });
      expect(dialog).toBeInTheDocument();
    });

    it('renders a focus-on component with appropriate props', () => {
      render(
        <ModalPopup
          positionRef={mockPositionRef}
          isOpen={isOpen}
          onClose={closeFn}
        >
          <Dialog />
        </ModalPopup>,
      );
      const focusOn = screen.getByTestId('focus-on');
      expect(focusOn).toBeInTheDocument();
      expect(focusOn).toHaveAttribute('scrolllock', 'false');
      expect(focusOn).toHaveAttribute('enabled', 'true');
    });
  });

  it('when isOpen is false the dialog is not rendered', () => {
    render(
      <ModalPopup positionRef={mockPositionRef} isOpen={false} onClose={jest.fn()}>
        <Dialog />
      </ModalPopup>,
    );
    const dialog = screen.queryByRole('dialog', { name: 'A dialog' });
    expect(dialog).not.toBeInTheDocument();
  });

  describe('withPortal', () => {
    it('renders no portal by default', () => {
      render(
        <ModalPopup positionRef={mockPositionRef} isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>,
      );
      const portal = screen.queryByTestId('portal');
      expect(portal).toBeNull();
    });

    it('renders with a portal if withPortal is true', () => {
      render(
        <ModalPopup withPortal positionRef={mockPositionRef} isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>,
      );
      const portal = screen.getByTestId('portal');
      expect(portal).not.toBeNull();
    });
  });

  describe('withArrow', () => {
    const popupArrowModal = 'modal-popup-arrow';

    arrowPlacements.forEach((side) => {
      it(`renders with placement ${side}`, () => {
        render(
          <ModalPopup positionRef={mockPositionRef} hasArrow placement={side} isOpen onClose={jest.fn()}>
            <Dialog />
          </ModalPopup>,
        );
        const arrow = screen.getByTestId(popupArrowModal);
        expect(arrow).not.toBeNull();
      });
    });

    it('renders without arrow', () => {
      render(
        <ModalPopup isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>,
      );
      const arrow = screen.queryByTestId(popupArrowModal);
      expect(arrow).toBeNull();
    });

    it('renders with arrow', () => {
      render(
        <ModalPopup positionRef={mockPositionRef} hasArrow isOpen onClose={jest.fn()}>
          <Dialog />
        </ModalPopup>,
      );
      const arrow = screen.getByTestId(popupArrowModal);
      expect(arrow).toBeInTheDocument();
    });
  });
});
