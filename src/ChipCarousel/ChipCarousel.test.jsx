import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import ChipCarousel from '.';

const items = [
  {
    props: {
      onClick: jest.fn(),
      children: 'Item 1',
    },
  },
  {
    props: {
      onClick: jest.fn(),
      children: 'Item 2',
    },
  },
  {
    props: {
      onClick: jest.fn(),
      children: 'Item 3',
    },
  },
  {
    props: {
      onClick: jest.fn(),
    },
  },
  'Test string',
];

const mockScrollTo = jest.fn();
Element.prototype.scrollTo = mockScrollTo;

const ariaLabel = 'Test aria label';
function TestingChipCarousel(props) {
  return (
    <IntlProvider locale="en">
      <ChipCarousel ariaLabel={ariaLabel} items={items} {...props} />
    </IntlProvider>
  );
}

describe('<ChipCarousel />', () => {
  it('should render the carousel correctly', () => {
    render(<TestingChipCarousel />);

    const carousel = document.getElementsByClassName('pgn__chip-carousel');
    expect(carousel.length).toBeGreaterThan(0);

    const chipItems = document.getElementsByClassName('pgn__chip');
    expect(chipItems).toHaveLength(items.length - 2);
    for (let i = 0; i < chipItems.length - 2; i++) {
      expect(chipItems[i].textContent).toBe(items[i].props.children);
    }
  });

  it('should call onClick when a chip item is clicked', () => {
    render(<TestingChipCarousel />);

    const chipItems = document.getElementsByClassName('pgn__chip');
    for (let i = 0; i < chipItems.length; i++) {
      fireEvent.click(chipItems[i]);
      expect(items[i].props.onClick).toHaveBeenCalledTimes(1);
    }
  });
});
