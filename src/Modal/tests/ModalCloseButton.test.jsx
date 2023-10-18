import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ModalContextProvider } from '../ModalContext';
import ModalCloseButton from '../ModalCloseButton';

describe('<ModalCloseButton />', () => {
  it('calls a modal context close function on click', async () => {
    const mockClose = jest.fn();
    render(
      <ModalContextProvider onClose={mockClose} isOpen>
        <ModalCloseButton>Close</ModalCloseButton>
      </ModalContextProvider>,
    );

    const closeButton = screen.getByText('Close');
    await userEvent.click(closeButton);

    expect(mockClose).toHaveBeenCalled();
  });

  it(
    'calls both the modal context close function and a passed click handler',
    async () => {
      const mockClose = jest.fn();
      const mockOnClick = jest.fn();
      render(
        <ModalContextProvider onClose={mockClose} isOpen>
          <ModalCloseButton onClick={mockOnClick}>Close</ModalCloseButton>
        </ModalContextProvider>,
      );

      const closeButton = screen.getByText('Close');
      await userEvent.click(closeButton);

      expect(mockClose).toHaveBeenCalled();
      expect(mockOnClick).toHaveBeenCalled();
    },
  );
});
