import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ModalDialogHeroBackground({
  as,
  backgroundSrc,
  children,
  ...props
}) {
  return React.createElement(
    as,
    {
      ...props,
      className: classNames('pgn__modal-hero-bg', props.className),
      style: {
        backgroundImage: backgroundSrc ? `url(${backgroundSrc})` : undefined,
        ...props.style,
      },
    },
    children,
  );
}

ModalDialogHeroBackground.propTypes = {
  as: PropTypes.elementType,
  backgroundSrc: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
};

ModalDialogHeroBackground.defaultProps = {
  as: 'div',
  backgroundSrc: undefined,
  children: null,
  className: undefined,
  style: {},
};

export default ModalDialogHeroBackground;
