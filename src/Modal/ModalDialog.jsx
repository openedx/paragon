import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalLayer from './ModalLayer';
import { Icon, IconButton } from '..';
import ModalCloseButton from './ModalCloseButton';
import { Close } from '../../icons';

const ModalHeader = ({
  as: Component,
  children,
  variant,
  ...props
}) => (
  <div className={classNames('pgn__modal-header', props.className)}>
    {children}
  </div>
);

ModalHeader.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ModalHeader.defaultProps = {
  as: 'div',
  variant: 'default',
  className: undefined,
};

const ModalTitle = ({
  as,
  children,
  ...props
}) => React.createElement(
  as,
  {
    ...props,
    className: classNames('pgn__modal-title', props.className),
  },
  children,
);

ModalTitle.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ModalTitle.defaultProps = {
  as: 'h3',
  className: undefined,
};

const ModalFooter = ({
  as: Component,
  children,
  isStacked,
  ...props
}) => (
  <Component
    className={classNames('pgn__modal-footer', props.className)}
    isStacked={isStacked}
  >
    {children}
  </Component>
);

ModalFooter.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  isStacked: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ModalFooter.defaultProps = {
  as: 'div',
  className: undefined,
  isStacked: false,
};

const ModalBody = ({
  as: Component,
  children,
  ...props
}) => {
  const className = classNames('pgn__modal-body', props.className);

  return (
    <Component {...props} className={className}>
      {children}
    </Component>
  );
};

ModalBody.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ModalBody.defaultProps = {
  as: 'div',
  className: undefined,
};

const ModalHero = ({
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

ModalHero.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ModalHero.defaultProps = {
  as: 'div',
  className: undefined,
};

const ModalHeroBackground = ({ children, backgroundSrc, style }) => (
  <div
    className="pgn__modal-hero-bg"
    style={{
      backgroundImage: backgroundSrc ? `url(${backgroundSrc})` : undefined,
      ...style,
    }}
  >
    {children}
  </div>
);

ModalHeroBackground.propTypes = {
  style: PropTypes.object, // eslint-disable-line
  children: PropTypes.node,
  backgroundSrc: PropTypes.string,
};

ModalHeroBackground.defaultProps = {
  backgroundSrc: undefined,
  style: {},
  children: null,
};

const ModalHeroContent = ({ children, ...props }) => (
  <div
    {...props}
    className={classNames('pgn__modal-hero-content', props.className)}
  >
    {children}
  </div>
);

ModalHeroContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ModalHeroContent.defaultProps = {
  className: undefined,
};

ModalHero.Content = ModalHeroContent;
ModalHero.Background = ModalHeroBackground;

function ModalDialog({
  children,
  title,
  isOpen,
  onClose,
  size,
  variant,
  hasCloseButton,
}) {
  return (
    <ModalLayer isOpen={isOpen} onClose={onClose}>
      <div
        role="dialog"
        aria-label={title}
        className={classNames(
          'pgn__modal',
          'pgn__modal-scroll-internal',
          {
            [`pgn__modal-${size}`]: size,
            [`pgn__modal-${variant}`]: variant,
          },
        )}
      >
        {hasCloseButton && (
          <div className="pgn__modal-close-container">
            <ModalCloseButton
              as={IconButton}
              iconAs={Icon}
              invertColors={variant === 'dark'}
              src={Close}
              alt="Close"
            />
          </div>
        )}
        {children}
      </div>
    </ModalLayer>
  );
}

ModalDialog.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  hasCloseButton: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string,
};

ModalDialog.defaultProps = {
  isOpen: false,
  hasCloseButton: true,
  size: 'md',
  variant: 'default',
};

ModalDialog.Header = ModalHeader;
ModalDialog.Title = ModalTitle;
ModalDialog.Footer = ModalFooter;
ModalDialog.CloseButton = ModalCloseButton;
ModalDialog.Body = ModalBody;
ModalDialog.Hero = ModalHero;

export {
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalHero,
  ModalTitle,
  ModalHeroContent,
  ModalHeroBackground,
};
export default ModalDialog;
