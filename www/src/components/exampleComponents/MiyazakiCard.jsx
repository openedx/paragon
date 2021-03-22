import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '~paragon-react'; // eslint-disable-line

const MiyazakiCard = ({ className, original }) => {
  const { title, director, release_date: releaseDate } = original;

  return (
    <Card className={className}>
      <Card.Img
        variant="top"
        src="https://source.unsplash.com/360x200/?nature,flower"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <dl>
          <dt>Director</dt>
          <dd>{director}</dd>
          <dt>Release Date</dt>
          <dd>{releaseDate}</dd>
        </dl>
      </Card.Body>
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
