import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Tabs from '.';

const props = {
  labels: [
    'first',
    'second',
    'third',
  ],
  children: [
    <div key="first">first</div>,
    <div key="second">second</div>,
    <div key="third">third</div>,
  ],
};

const tabSelectedAtIndex = (index, container) => {
  const tabButtons = container.querySelectorAll('button');
  const tabPanes = container.querySelectorAll('.tab-pane');

  tabButtons.forEach((node, i) => {
    expect(node.getAttribute('aria-selected')).toEqual(i === index ? 'true' : 'false');
  });

  tabPanes.forEach((node, i) => {
    expect(node.classList.contains('active')).toEqual(i === index);
  });
};

describe('<Tabs />', () => {
  it('renders with first tab selected', () => {
    const { container } = render(<Tabs {...props} />);
    tabSelectedAtIndex(0, container);
  });

  describe('switches tab selection', () => {
    it('on click', async () => {
      const user = userEvent.setup();
      const { container } = render(<Tabs {...props} />);
      const tabButtons = container.querySelectorAll('button');

      for (const [i, node] of tabButtons.entries()) {
        // eslint-disable-next-line no-await-in-loop
        await user.click(node);
        tabSelectedAtIndex(i, container);
      }
    });
  });
});
