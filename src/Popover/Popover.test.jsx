import React from 'react';
import { render } from '@testing-library/react';

import Popover from '.';

describe('<Popover />', () => {
  describe('correct rendering', () => {
    it('renders with correct class for variant success', () => {
      const { getByTestId } = render(
        <Popover
          id="popover-id"
          variant="success"
          data-testid="popover"
        />,
      );
      const popover = getByTestId('popover');
      expect(popover).toHaveClass('popover-success');
    });
    it('renders with correct class for variant warning', () => {
      const { getByTestId } = render(
        <Popover
          id="popover-id"
          variant="warning"
          data-testid="popover"
        />,
      );
      const popover = getByTestId('popover');
      expect(popover).toHaveClass('popover-warning');
    });
    it('renders with correct class for variant danger', () => {
      const { getByTestId } = render(
        <Popover
          id="popover-id"
          variant="danger"
          data-testid="popover"
        />,
      );
      const popover = getByTestId('popover');
      expect(popover).toHaveClass('popover-danger');
    });
  });
});
