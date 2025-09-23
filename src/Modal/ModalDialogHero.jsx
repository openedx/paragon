import { createElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalDialogHeroContent from './ModalDialogHeroContent';
import ModalDialogHeroBackground from './ModalDialogHeroBackground';

function ModalDialogHero({
  as,
  children,
  ...props
}) {
  return createElement(
    as,
    {
      ...props,
      className: classNames('pgn__modal-hero', props.className),
    },
    children,
  );
}

ModalDialogHero.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ModalDialogHero.defaultProps = {
  as: 'div',
  className: undefined,
};

ModalDialogHero.Content = ModalDialogHeroContent;
ModalDialogHero.Background = ModalDialogHeroBackground;

export default ModalDialogHero;
