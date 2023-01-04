import React, { useContext, isValidElement } from 'react';
import PropTypes from 'prop-types';
import CardCarouselTitle from './CardCarouselTitle';
import CardCarouselSubtitle from './CardCarouselSubtitle';
import DefaultCardCarouselControls from './CardCarouselControls';
import { CardCarouselContext } from './CardCarouselProvider';

const getFormattedTitle = (title) => {
  if (!title) {
    return null;
  }
  if (isValidElement(title)) {
    return title;
  }
  return <CardCarouselTitle>{title}</CardCarouselTitle>;
};

const getFormattedSubtitle = (subtitle) => {
  if (!subtitle) {
    return null;
  }
  if (isValidElement(subtitle)) {
    return subtitle;
  }
  return <CardCarouselSubtitle>{subtitle}</CardCarouselSubtitle>;
};

function CardCarouselHeader({ title, subtitle }) {
  const { CardCarouselControls: customCardCarouselControls } = useContext(CardCarouselContext);
  const CardCarouselControls = customCardCarouselControls || DefaultCardCarouselControls;

  const carouselTitle = getFormattedTitle(title);
  const carouselSubtitle = getFormattedSubtitle(subtitle);

  return (
    <div className="pgn__card-carousel-header">
      <div>
        {carouselTitle}
        {carouselSubtitle}
      </div>
      <CardCarouselControls />
    </div>
  );
}

CardCarouselHeader.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
};

CardCarouselHeader.defaultProps = {
  title: undefined,
  subtitle: undefined,
};

export default CardCarouselHeader;
