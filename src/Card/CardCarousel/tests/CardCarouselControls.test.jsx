import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';
import { CardCarouselContext } from '../CardCarouselProvider';
import CardCarouselControls from '../CardCarouselControls';

const mockScrollToPrevious = jest.fn();
const mockScrollToNext = jest.fn();
const defaultCardCarouselContextValue = {
  isScrolledToStart: true,
  isScrolledToEnd: true,
  scrollToPrevious: mockScrollToPrevious,
  scrollToNext: mockScrollToNext,
  isOverflowElementVisible: true,
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

  it('renders with disabled controls when scrolled to start/end', () => {
    const tree = renderer.create((
      <CardCarouselControlsWrapper />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with disabled controls when overflow element is not visible', () => {
    const contextValue = {
      ...defaultCardCarouselContextValue,
      isOverflowElementVisible: true,
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
});
