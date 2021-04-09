import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalDialogHeroBackground = ({ children, backgroundSrc, ...props }) => (
  <div
    {...props}
    className={classNames('pgn__modal-hero-bg', props.className)}
    style={{
      backgroundImage: backgroundSrc ? `url(${backgroundSrc})` : undefined,
      ...props.style,
    }}
  >
    {children}
  </div>
);

ModalDialogHeroBackground.propTypes = {
  style: PropTypes.object, // eslint-disable-line
  className: PropTypes.string,
  children: PropTypes.node,
  backgroundSrc: PropTypes.string,
};

ModalDialogHeroBackground.defaultProps = {
  backgroundSrc: undefined,
  style: {},
  children: null,
  className: undefined,
};

export default ModalDialogHeroBackground;
