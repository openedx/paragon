import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { usePopper } from 'react-popper';
import PopperElement from './PopperElement';

jest.mock('react-popper', () => ({
  usePopper: jest.fn(() => ({
    styles: {
      popper: {
        content: 'someValue',
      },
    },
    attributes: {
      popper: {
        'data-testid': 'someValue',
      },
    },
  })),
}));

const defaultPopperOptions = {
  strategy: 'absolute',
  placement: 'bottom-start',
  modifiers: [
    {
      name: 'flip',
      enabled: true,
    },
    {
      name: 'preventOverflow',
      options: {
        tether: false,
      },
    },
  ],
};

describe('<PopperElement />', () => {
  it('should use Popper and apply styles and attributes to child div', () => {
    const targetRef = { current: <div /> };
    const { container, getByText } = render(
      <PopperElement target={targetRef}>
        <div id="popper-content">Popper content</div>
      </PopperElement>,
    );

    const popperEl = getByText('Popper content');

    expect(usePopper).toHaveBeenCalledWith(targetRef, null, defaultPopperOptions);
    expect(popperEl).toBeInTheDocument();
    expect(container.firstChild).toHaveAttribute('data-testid', 'someValue');
    expect(container.firstChild).toHaveStyle('content: someValue');
  });
});
