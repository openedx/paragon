import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '~paragon-react';

export interface IMiyazakiCard {
  className: string,
  original: {
    title: string,
    director: string,
    release_date: number,
  },
}

function MiyazakiCard({ className, original }: IMiyazakiCard) {
  const { title, director, release_date: releaseDate } = original;

  return (
    <Card className={className}>
      <Card.ImageCap src="https://picsum.photos/360/200/" srcAlt="Card image" />
      <Card.Header title={title} />
      <Card.Section>
        <dl>
          <dt>Director</dt>
          <dd>{director}</dd>
          <dt>Release Date</dt>
          <dd>{releaseDate}</dd>
        </dl>
      </Card.Section>
    </Card>
  );
}

MiyazakiCard.defaultProps = {
  className: '',
  original: {},
};

MiyazakiCard.propTypes = {
  className: PropTypes.string,
  original: PropTypes.shape({
    title: PropTypes.string,
    director: PropTypes.string,
    release_date: PropTypes.string,
  }),
};

export default MiyazakiCard;
