import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const useIsVisible = (defaultIsVisible = true) => {
  const sentinelRef = useRef();
  const [isVisible, setIsVisible] = useState(defaultIsVisible);

  useEffect(() => {
    if (sentinelRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(({ isIntersecting }) => {
          setIsVisible(isIntersecting);
        });
      }, {});
      observer.observe(sentinelRef.current);
      return () => {
        observer.disconnect();
      };
    }
    return () => {};
  }, [sentinelRef.current]);

  return [isVisible, sentinelRef];
};

const ModalDialogBody = ({
  as,
  children,
  ...props
}) => {
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
        <div className="pgn_modal-body-scroll-sentinel-top" ref={topSentinelRef} />
        {children}
        <div ref={bottomSentinelRef} />
      </>
    ),
  );
};

ModalDialogBody.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ModalDialogBody.defaultProps = {
  as: 'div',
  className: undefined,
};

export default ModalDialogBody;
