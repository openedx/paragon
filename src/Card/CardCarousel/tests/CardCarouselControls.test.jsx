import React from 'react';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { CardCarouselContext } from '../CardCarouselProvider';
import CardCarouselControls from '../CardCarouselControls';

const mockScrollToPrevious = jest.fn();
const mockScrollToNext = jest.fn();
const defaultCardCarouselContextValue = {
  isScrolledToStart: false,
  isScrolledToEnd: false,
  scrollToPrevious: mockScrollToPrevious,
  scrollToNext: mockScrollToNext,
};

function CardCarouselControlsWrapper({
  cardCarouselContextValue,
  ...rest
}) {
  return (
    <IntlProvider locale="en">
      <CardCarouselContext.Provider value={cardCarouselContextValue}>
        <CardCarouselControls {...rest} />
      </CardCarouselContext.Provider>
    </IntlProvider>
  );
}

CardCarouselControlsWrapper.propTypes = {
  cardCarouselContextValue: PropTypes.shape(),
};

CardCarouselControlsWrapper.defaultProps = {
  cardCarouselContextValue: defaultCardCarouselContextValue,
};

describe('<CardCarouselControls />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with disabled previous control when scrolled to start', () => {
    const contextValue = {
      ...defaultCardCarouselContextValue,
      isScrolledToStart: true,
    };
    const tree = renderer.create((
      <CardCarouselControlsWrapper cardCarouselContextValue={contextValue} />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with disabled next control when scrolled to end', () => {
    const contextValue = {
      ...defaultCardCarouselContextValue,
      isScrolledToEnd: true,
    };
    const tree = renderer.create((
      <CardCarouselControlsWrapper cardCarouselContextValue={contextValue} />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with enabled controls when not scrolled to start/end', () => {
    const contextValue = {
      ...defaultCardCarouselContextValue,
      isScrolledToStart: false,
      isScrolledToEnd: false,
    };
    const tree = renderer.create((
      <CardCarouselControlsWrapper cardCarouselContextValue={contextValue} />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without controls when both previous/next controls would be disabled', () => {
    const contextValue = {
      ...defaultCardCarouselContextValue,
      isScrolledToStart: true,
      isScrolledToEnd: true,
    };
    const tree = renderer.create((
      <CardCarouselControlsWrapper cardCarouselContextValue={contextValue} />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handles scroll to previous click', async () => {
    const user = userEvent.setup();
    const contextValue = {
      ...defaultCardCarouselContextValue,
      isScrolledToStart: false,
    };
    render((
      <CardCarouselControlsWrapper cardCarouselContextValue={contextValue} />
    ));
    await user.click(screen.getByLabelText('Scroll to previous'));
    expect(mockScrollToPrevious).toHaveBeenCalledTimes(1);
  });

  it('handles scroll to next click', async () => {
    const user = userEvent.setup();
    const contextValue = {
      ...defaultCardCarouselContextValue,
      isScrolledToEnd: false,
    };
    render((
      <CardCarouselControlsWrapper cardCarouselContextValue={contextValue} />
    ));
    await user.click(screen.getByLabelText('Scroll to next'));
    expect(mockScrollToNext).toHaveBeenCalledTimes(1);
  });
});
