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

Truncate.propTypes = {
  /** The expected text to which the ellipsis would be applied. */
  children: PropTypes.string.isRequired,
  /** The number of lines the text to be truncated to. */
  lines: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Text content for the ellipsis - will appear after the truncated lines. */
  ellipsis: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  /** The whitespace from before the ellipsis. */
  whiteSpace: PropTypes.bool,
  /** Custom html element for truncated text. */
  htmlElement: PropTypes.string,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
};

Truncate.defaultProps = {
  lines: DEFAULT_TRUNCATE_LINES,
  ellipsis: '...',
  whiteSpace: false,
  htmlElement: 'div',
  className: null,
};

export default Truncate;
