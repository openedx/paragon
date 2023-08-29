import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ModalContextProvider } from './ModalContext';
import ModalCloseButton from './ModalCloseButton';

describe('<ModalCloseButton />', () => {
  it('calls a modal context close function on click', () => {
    const mockClose = jest.fn();
    const { getByText } = render(
      <ModalContextProvider onClose={mockClose} isOpen>
        <ModalCloseButton>Close</ModalCloseButton>
      </ModalContextProvider>,
    );

    const closeButton = getByText('Close');
    fireEvent.click(closeButton);

    expect(mockClose).toHaveBeenCalled();
  });

  it('calls both the modal context close function and a passed click handler', () => {
    const mockClose = jest.fn();
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <ModalContextProvider onClose={mockClose} isOpen>
        <ModalCloseButton onClick={mockOnClick}>Close</ModalCloseButton>
      </ModalContextProvider>,
    );

    const closeButton = getByText('Close');
    fireEvent.click(closeButton);

    expect(mockClose).toHaveBeenCalled();
    expect(mockOnClick).toHaveBeenCalled();
  });
});
