import React, { useContext, useMemo } from 'react';
import classNames from 'classnames';
import {
  Button, Container, Card, Truncate, CardCarousel, CardDeck, Chip, OverflowScroll, OverflowScrollContext, Stack,
} from '@edx/paragon'; // eslint-disable-line
import { Close } from '@edx/paragon/icons'; // eslint-disable-line
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

const ExampleCard = () => (
  <Card isClickable>
    <Card.ImageCap
      src={faker.image.animals(null, null, true)}
      srcAlt="Card image"
    />
    <Card.Header
      title={<Truncate lines={3}>{faker.lorem.lines(1)}</Truncate>}
    />
    <Card.Section>
      {faker.lorem.lines(1)}
    </Card.Section>
    <Card.Footer textElement="Course" />
  </Card>
);

const ExampleChip = ({ className }) => (
  <Chip variant="light" className={className}>
    {faker.lorem.words(1)}
  </Chip>
);

const ExampleCardCarouselControls = () => {
  const {
    scrollToPrevious,
    scrollToNext,
    isScrolledToStart,
    isScrolledToEnd,
  } = useContext(OverflowScrollContext);

  return (
    <Stack direction="horizontal" gap={2} className="mb-2">
      <Button onClick={scrollToPrevious} disabled={isScrolledToStart}>
        Previous
      </Button>
      <Button onClick={scrollToNext} disabled={isScrolledToEnd}>
        Next
      </Button>
    </Stack>
  );
};

const ExampleChipCarouselControls = () => {
  const {
    scrollToPrevious,
    scrollToNext,
    isScrolledToStart,
    isScrolledToEnd,
  } = useContext(OverflowScrollContext);

  return (
    <Stack direction="horizontal" gap={2} className="mb-2">
      <Button onClick={scrollToPrevious} disabled={isScrolledToStart}>
        Previous
      </Button>
      <Button onClick={scrollToNext} disabled={isScrolledToEnd}>
        Next
      </Button>
    </Stack>
  );
};

const ExampleChipCarouselItems = () => {
  const { overflowRef } = useContext(OverflowScrollContext);
  const chipCount = 48;
  const chips = useMemo(
    () => Array.from({ length: chipCount }).map((index) => (
      <ExampleChip
        key={uuidv4()}
        className={classNames({ 'mr-2': index !== chipCount - 1  })}
      />
    )),
    [],
  );

  return (
    <div
      ref={overflowRef}
      className="d-flex"
    >
      <OverflowScroll.StartSentinel />
      {chips}
      <OverflowScroll.EndSentinel />
    </div>
  );
};

const ExampleCardCarousel = () => {
  const cards = useMemo(() => Array.from({ length: 12 }).map(() => <ExampleCard key={uuidv4()} />), []);

  return (
    <CardCarousel
      title={faker.lorem.words(3)}
      subtitle={faker.lorem.words(6)}
      hasInteractiveChildren
      canScrollHorizontal={false}
    >
      {cards}
    </CardCarousel>
  );
};

const ExampleChipCarousel = () => {
  return (
    <div>
      <h1>Example <code>ChipCarousel</code></h1>
      <OverflowScroll childQuerySelector=".pgn__chip">
        <ExampleChipCarouselControls />
        <ExampleChipCarouselItems />
      </OverflowScroll>
    </div>
  );
};

const ExampleCardDeck = () => {
  const cards = Array.from({ length: 12 }).map(() => <ExampleCard key={uuidv4()} />);
  return (
    <div>
      <h1>Example <code>CardDeck</code></h1>
      <CardDeck>
        {cards}
      </CardDeck>
    </div>
  );
};

const ExampleCardDeckPage = () => {
  return (
    <Container size="lg" className="my-5">
      {/* <ExampleCardDeck /> */}
      <ExampleCardCarousel />
      <ExampleCardCarousel />
      {/* <ExampleChipCarousel /> */}
    </Container>
  );
};

export default ExampleCardDeckPage;
