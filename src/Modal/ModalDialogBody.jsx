import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useIsVisible from '../hooks/useIsVisible';

function ModalDialogBody({
  as,
  children,
  ...props
}) {
  const [isScrolledToTop, topSentinelRef] = useIsVisible();
  const [isScrolledToBottom, bottomSentinelRef] = useIsVisible();
  const className = classNames(
    'pgn__modal-body',
    props.className,
    {
      'pgn__modal-body-scroll-top': isScrolledToTop,
      'pgn__modal-body-scroll-bottom': isScrolledToBottom,
    },
  );
  return React.createElement(
    as,
    { ...props, className },
    (
      <>
        <div ref={topSentinelRef} />
        <div className="pgn__modal-body-content">
          {children}
        </div>
        <div ref={bottomSentinelRef} />
      </>
    ),
  );
}

ModalDialogBody.propTypes = {
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Specifies the contents of the header */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
};

ModalDialogBody.defaultProps = {
  as: 'div',
  className: undefined,
};

export default ModalDialogBody;
