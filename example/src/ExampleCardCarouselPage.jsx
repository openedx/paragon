import React, { useState } from 'react';
import {
  Container, Card, CardCarousel, Stack, Truncate
} from '@edx/paragon'; // eslint-disable-line
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

const ExampleCardCarousel = ({ title, subtitle }) => (
  <CardCarousel
      title={title}
      subtitle={subtitle}
      columnSizes={{
        xs: 12,
        md: 6,
        lg: 4,
        xl: 3,
      }}
      hasInteractiveChildren
    >
      <ExampleCard />
      <ExampleCard />
      <ExampleCard />
      <ExampleCard />
      <ExampleCard />
      <ExampleCard />
      <ExampleCard />
      <ExampleCard />
      <ExampleCard />
      <ExampleCard />
      <ExampleCard />
      <ExampleCard />
    </CardCarousel>
);

const ExampleCardCarouselPage = () => {
  return (
    <Container size="lg" className="my-5">
      <Stack gap={5}>
        <ExampleCardCarousel
          title={<h1>Recommended for Marketing</h1>}
          subtitle={<p className="small">Enroll in content selected for you by your organization.</p>}
        />
        <ExampleCardCarousel
          title={<h1>Recommended for Finance</h1>}
          subtitle={<p className="small">Enroll in content selected for you by your organization.</p>}
        />
      </Stack>
    </Container>
  );
};

export default ExampleCardCarouselPage;
