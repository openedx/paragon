import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IntlProvider } from 'react-intl';
import ChipCarousel from '.';
import Chip from '../Chip';

const items = Array.from({ length: 4 }, (_, i) => (
  <Chip onClick={jest.fn()}>
    {`Item ${i + 1}`}
  </Chip>
));

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

    const chipItems = screen.queryAllByRole('button');
    expect(chipItems).toHaveLength(items.length);
    for (let i = 0; i < chipItems.length; i++) {
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
