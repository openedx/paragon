import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalDialogHeroContent = ({ children, ...props }) => (
  <div
    {...props}
    className={classNames('pgn__modal-hero-content', props.className)}
  >
    {children}
  </div>
);

ModalDialogHeroContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ModalDialogHeroContent.defaultProps = {
  className: undefined,
};

export default ModalDialogHeroContent;
