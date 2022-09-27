import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ModalDialogHeroContent({
  as,
  children,
  ...props
}) {
  return React.createElement(
    as,
    {
      ...props,
      className: classNames('pgn__modal-hero-content', props.className),
    },
    children,
  );
}

ModalDialogHeroContent.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ModalDialogHeroContent.defaultProps = {
  as: 'div',
  className: undefined,
};

export default ModalDialogHeroContent;
