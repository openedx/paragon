import React, {
  useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import StringClampUtils from './utils';

const DEFAULT_TRUNCATE_LINES = 1;

const Truncate = ({
  children, lines, ellipsis, typeElement, className, whiteSpace,
}) => {
  const [clampedText, setClampedText] = useState('');
  const textContainer = useRef();

  useEffect(() => {
    const clampText = () => {
      const newClampText = StringClampUtils.clampLines(children, textContainer.current, {
        ellipsis,
        whiteSpace,
        lines,
      });

      setClampedText(newClampText);
    };

    clampText();
  }, [children, ellipsis, lines, whiteSpace]);

  return React.createElement(typeElement, {
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
  typeElement: PropTypes.string,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
};

Truncate.defaultProps = {
  lines: DEFAULT_TRUNCATE_LINES,
  ellipsis: '...',
  whiteSpace: false,
  typeElement: 'div',
  className: null,
};

export default Truncate;
