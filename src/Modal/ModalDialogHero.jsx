import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalDialogHeroContent from './ModalDialogHeroContent';
import ModalDialogHeroBackground from './ModalDialogHeroBackground';

const ModalDialogHero = ({
  as: Component,
  children,
  ...props
}) => {
  const className = classNames('pgn__modal-hero', props.className);

  return (
    <Component {...props} className={className}>
      {children}
    </Component>
  );
};

ModalDialogHero.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ModalDialogHero.defaultProps = {
  as: 'div',
  className: undefined,
};

ModalDialogHero.Content = ModalDialogHeroContent;
ModalDialogHero.Background = ModalDialogHeroBackground;

export default ModalDialogHero;
