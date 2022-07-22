import React, {
  useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { truncateLines } from './utils';
import { useWindowSize } from '../index';

const DEFAULT_TRUNCATE_LINES = 1;
const DEFAULT_TRUNCATE_ELLIPSIS = '...';
const DEFAULT_TRUNCATE_ELEMENT_TYPE = 'div';

const Truncate = ({
  children, lines, ellipsis, elementType, className, whiteSpace,
}) => {
  const [truncateText, setTruncateText] = useState('');
  const textContainer = useRef();
  const { width } = useWindowSize();

  useEffect(() => {
    const newTruncateText = truncateLines(children, textContainer.current, {
      ellipsis,
      whiteSpace,
      lines,
    });
    setTruncateText(newTruncateText);
  }, [children, ellipsis, lines, whiteSpace, width]);

  return React.createElement(elementType, {
    ref: textContainer,
    className,
  }, truncateText);
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
  elementType: PropTypes.string,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
};

Truncate.defaultProps = {
  lines: DEFAULT_TRUNCATE_LINES,
  ellipsis: DEFAULT_TRUNCATE_ELLIPSIS,
  whiteSpace: false,
  elementType: DEFAULT_TRUNCATE_ELEMENT_TYPE,
  className: null,
};

export default Truncate;
