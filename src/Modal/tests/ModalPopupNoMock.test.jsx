import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModalPopup from '../ModalPopup';

describe('<ModalPopup />', () => {
  const mockPositionRef = React.createRef();

  describe('when isOpen', () => {
    const isOpen = true;
    const closeFn = jest.fn();

    it('calls close on click events but not touchstart events', async () => {
      render(
        <ModalPopup
          positionRef={mockPositionRef}
          isOpen={isOpen}
          onClose={closeFn}
        >
          <div>Modal Contents</div>
        </ModalPopup>,
      );
      await fireEvent.touchStart(document.body);
      expect(closeFn).not.toHaveBeenCalled();
      await userEvent.click(document.body);
      expect(closeFn).toHaveBeenCalled();
    });
  });
});
