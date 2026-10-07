import React from 'react';
import { render } from '@testing-library/react';
import ActionRow from '.';

describe('<ActionRow />', () => {
  describe('stacked mode', () => {
    it('renders children in reverse DOM order so primary action leads focus', () => {
      const { getAllByRole } = render(
        <ActionRow isStacked>
          <button type="button">Secondary</button>
          <button type="button">Primary</button>
        </ActionRow>,
      );
      const buttons = getAllByRole('button');
      expect(buttons[0]).toHaveTextContent('Primary');
      expect(buttons[1]).toHaveTextContent('Secondary');
    });
  });

  describe('horizontal mode', () => {
    it('renders children in original DOM order', () => {
      const { getAllByRole } = render(
        <ActionRow>
          <button type="button">Secondary</button>
          <button type="button">Primary</button>
        </ActionRow>,
      );
      const buttons = getAllByRole('button');
      expect(buttons[0]).toHaveTextContent('Secondary');
      expect(buttons[1]).toHaveTextContent('Primary');
    });
  });
});
