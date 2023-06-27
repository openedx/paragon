import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import ChipCarousel from '.';

const items = [
  {
    props: {
      onClick: jest.fn(),
      children: 'Item 1',
      'data-testid': 'chip',
    },
  },
  {
    props: {
      onClick: jest.fn(),
      children: 'Item 2',
      'data-testid': 'chip',
    },
  },
  {
    props: {
      onClick: jest.fn(),
      children: 'Item 3',
      'data-testid': 'chip',
    },
  },
  {
    props: {
      onClick: jest.fn(),
      'data-testid': 'chip',
    },
  },
  'Test string',
];

const ariaLabel = 'Test aria label';
function TestingChipCarousel(props) {
  return (
    <IntlProvider locale="en">
      <ChipCarousel data-testid="chip-carousel" ariaLabel={ariaLabel} items={items} {...props} />
    </IntlProvider>
  );
}

describe('<ChipCarousel />', () => {
  it('should render the carousel correctly', () => {
    render(<TestingChipCarousel />);

    const carousel = screen.getByTestId('chip-carousel');
    expect(carousel).toBeTruthy();

    const chipItems = screen.queryAllByTestId('chip');
    expect(chipItems).toHaveLength(items.length - 2);
    for (let i = 0; i < chipItems.length - 2; i++) {
      expect(chipItems[i].textContent).toBe(items[i].props.children);
    }
  });

  it('should call onClick when a chip item is clicked', async () => {
    render(<TestingChipCarousel />);

    const chipItems = screen.getByTestId('chip-carousel');
    for (let i = 0; i < chipItems.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      await userEvent.click(chipItems[i]);
      expect(items[i].props.onClick).toHaveBeenCalledTimes(1);
    }
  });
});
