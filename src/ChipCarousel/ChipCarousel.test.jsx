import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import ChipCarousel from './index';

const items = [
  {
    onClick: jest.fn(),
    title: 'Item 1',
  },
  {
    onClick: jest.fn(),
    title: 'Item 2',
  },
  {
    onClick: jest.fn(),
    title: 'Item 3',
  },
];

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
    expect(chipItems).toHaveLength(items.length);
  });

  it('should call onClick when a chip item is clicked', () => {
    render(<TestingChipCarousel />);

    const chipItems = document.getElementsByClassName('pgn__chip');
    for (let i = 0; i < chipItems.length; i++) {
      fireEvent.click(chipItems[i]);
      expect(items[i].onClick).toHaveBeenCalledTimes(1);
    }
  });
  it('should not display previous and next buttons when innerControls is false', () => {
    render(<TestingChipCarousel innerControls={false} />);

    const previousButton = screen.queryByLabelText('Scroll to previous');
    const nextButton = screen.queryByLabelText('Scroll to next');

    expect(previousButton).toBeNull();
    expect(nextButton).toBeNull();
  });
  it('should apply the provided className to the root element', () => {
    const customClassName = 'custom-carousel';
    render(<TestingChipCarousel className={customClassName} />);

    const carousel = document.getElementsByClassName('pgn__chip-carousel')[0];
    expect(carousel).toHaveClass(customClassName);
  });
});
