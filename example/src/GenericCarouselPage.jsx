import React, { useState } from 'react';
import {
  Container, Stack, Truncate, Badge, Chip, OverflowScroll,
} from '@edx/paragon'; // eslint-disable-line
import { Close } from '@edx/paragon/icons'; // eslint-disable-line
import { faker } from '@faker-js/faker';

const ExampleBadge = () => (
  <Badge variant="light">{faker.random.words(1)}</Badge>
);

const ExampleChip = () => (
  <Chip
    variant="light"
    iconAfter={Close}
    onIconAfterClick={() => console.log('Remove Chip')}
  >{faker.random.words(1)}</Chip>
);

const ExampleBadgeCarousel = () => {
  return (
    <div />
  );
};

const ExampleChipCarousel = () => {
  return (
    <div />
  );
};

const GenericCarouselPage = () => {
  return (
    <Container size="lg" className="my-5">
      <Stack gap={5}>
        <div>
          <h2>Example <code>Badge</code> Carousel</h2>
          <ExampleBadgeCarousel />
        </div>
        <div>
          <h2>Example <code>Chip</code> Carousel</h2>
          <ExampleChipCarousel />
        </div>
      </Stack>
    </Container>
  );
};

export default GenericCarouselPage;
