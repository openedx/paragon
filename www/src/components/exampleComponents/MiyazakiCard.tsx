import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { Card } from '~paragon-react'; // eslint-disable-line

export interface MiyazakiCardInterface {
  className: string,
  original: {
    title: string,
    director: string,
    release_date: number,
  },
}

const MiyazakiCard = ({ className, original }: MiyazakiCardInterface) => {
  const { title, director, release_date: releaseDate } = original;

  return (
    <Card className={className}>
      <Card.ImageCap src="https://source.unsplash.com/360x200/?nature,flower" />
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
};

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
