import React, {
  useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import StringClampUtils from './utils';

const DEFAULT_TRUNCATE_LINES = 1;

const Truncate = ({
  children, lines, ellipsis, htmlElement, className, whiteSpace,
}) => {
  const [clampedText, setClampedText] = useState('');
  const [latestWidth, setLatestWidth] = useState();
  const textContainer = useRef();

  const clampText = () => {
    const newClampText = StringClampUtils.clampLines(children, textContainer.current, {
      ellipsis,
      whiteSpace,
      lines,
    });

    setClampedText(newClampText);
  };

  const observerResize = () => {
    if (!textContainer.current) { return; }

    const textContainerScrollWidth = Math.round(textContainer.current.scrollWidth);
    if (latestWidth !== textContainerScrollWidth) {
      setLatestWidth({
        textContainerScrollWidth,
      });
      setTimeout(clampText, 0);
    }
    window.requestAnimationFrame(observerResize);
  };

  useEffect(() => {
    clampText();
    setTimeout(observerResize, 0);
    // eslint-disable-next-line
  }, []);

  return React.createElement(htmlElement, {
    ref: textContainer,
    className,
  }, clampedText);
};

Truncate.defaultProps = {
  lines: DEFAULT_TRUNCATE_LINES,
  ellipsis: '...',
  whiteSpace: false,
  htmlElement: 'div',
  className: null,
};

Truncate.propTypes = {
  children: PropTypes.string.isRequired,
  lines: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ellipsis: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  whiteSpace: PropTypes.bool,
  htmlElement: PropTypes.string,
  className: PropTypes.string,
};

export default Truncate;
