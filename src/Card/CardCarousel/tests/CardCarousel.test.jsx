import React from 'react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import { v4 as uuidv4 } from 'uuid';
import { IntlProvider } from 'react-intl';
import CardCarousel from '../CardCarousel';
import Card from '../..';
import { OverflowScroll, OverflowScrollContext } from '../../../OverflowScroll';

jest.mock('../../../OverflowScroll', () => ({
  ...jest.requireActual('../../../OverflowScroll'),
  OverflowScroll: jest.fn(),
}));

// eslint-disable-next-line react/prop-types
OverflowScroll.mockImplementation(({ children }) => {
  const overflowRef = { current: document.createElement('div') };
  const contextValue = {
    overflowRef,
    isScrolledToStart: true,
    isScrolledToEnd: false,
    scrollToPrevious: jest.fn(),
    scrollToNext: jest.fn(),
  };

  return (
    <OverflowScrollContext.Provider value={contextValue}>
      <div data-testid="overflow-scroll">{children}</div>
    </OverflowScrollContext.Provider>
  );
});

function ExampleCard(props) {
  return (
    <Card {...props}>
      <Card.ImageCap src="http://fake.image" />
      <Card.Body>
        <Card.Header>Card title</Card.Header>
        <Card.Section>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Section>
      </Card.Body>
      <Card.Footer textElement={<small className="text-muted">Last updated 3 mins ago</small>} />
    </Card>
  );
}

function getCardContent({ cardCount = 5, ...cardProps } = {}) {
  return Array.from({ length: cardCount }).map(() => <ExampleCard key={uuidv4()} {...cardProps} />);
}

function CardCarouselWrapper({ children, ...rest }) {
  return (
    <IntlProvider locale="en">
      <CardCarousel {...rest}>
        {children}
      </CardCarousel>
    </IntlProvider>
  );
}

CardCarouselWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string,
};

CardCarouselWrapper.defaultProps = {
  ariaLabel: 'example card carousel',
};

describe('<CardCarousel />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders default card carousel', () => {
    const cardContent = getCardContent();
    const tree = renderer.create((
      <CardCarouselWrapper>
        {cardContent}
      </CardCarouselWrapper>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders card carousel with title and subtitles', () => {
    const cardContent = getCardContent();
    const tree = renderer.create((
      <CardCarouselWrapper
        title="Example Title"
        subtitle="Example subtitle."
      >
        {cardContent}
      </CardCarouselWrapper>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders card carousel with custom title and subtitles elements', () => {
    const cardContent = getCardContent();
    const tree = renderer.create((
      <CardCarouselWrapper
        title={<h1>Example Title</h1>}
        subtitle={<p className="small">Example subtitle</p>}
      >
        {cardContent}
      </CardCarouselWrapper>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
