import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const MiyazakiCard = ({ className, original  }) => {
  const { title, director, producer, release_date, rt_score } = original;

  return (
    <Card className={className}>
      <Card.Img variant="top" src="https://source.unsplash.com/360x200/?nature,flower" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <dl>
          <dt>Director</dt><dd>{director}</dd>
          <dt>Release Date</dt><dd>{release_date}</dd>
        </dl>
      </Card.Body>
    </Card>
  );
};

MiyazakiCard.defaultProps = {
  className: '',
  title: null,
};

MiyazakiCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
};

export default MiyazakiCard;