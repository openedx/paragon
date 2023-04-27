import React, {
  useLayoutEffect, useRef,
} from 'react';
import PropTypes from 'prop-types';
import { truncateLines } from './utils';
import useWindowSize from '../hooks/useWindowSize';

const DEFAULT_TRUNCATE_LINES = 1;
const DEFAULT_TRUNCATE_ELLIPSIS = '...';
const DEFAULT_TRUNCATE_ELEMENT_TYPE = 'div';

function Truncate({
  children, lines, ellipsis, elementType, className, whiteSpace, onTruncate,
}) {
  const textContainer = useRef();
  const { width } = useWindowSize();

  useLayoutEffect(() => {
    if (textContainer.current) {
      const [truncated, original] = truncateLines(children, textContainer.current, {
        ellipsis,
        whiteSpace,
        lines,
      });
      textContainer.current.setAttribute('title', original);
      textContainer.current.setAttribute('aria-label', original);
      textContainer.current.innerHTML = '';
      truncated.forEach(element => {
        textContainer.current.appendChild(element);
      });
      if (onTruncate) {
        onTruncate(truncated);
      }
    }
  }, [children, ellipsis, lines, onTruncate, whiteSpace, width]);

  return React.createElement(elementType, {
    ref: textContainer,
    className,
  });
}

Truncate.propTypes = {
  /** The expected text to which the ellipsis would be applied. */
  children: PropTypes.string.isRequired,
  /** The number of lines the text to be truncated to. */
  lines: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Text content for the ellipsis - will appear after the truncated lines. */
  ellipsis: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node]),
  /** Adds the whitespace from before the ellipsis. */
  whiteSpace: PropTypes.bool,
  /** Custom html element for truncated text. */
  elementType: PropTypes.string,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Callback fired when a text truncating */
  onTruncate: PropTypes.func,
};

Truncate.defaultProps = {
  lines: DEFAULT_TRUNCATE_LINES,
  ellipsis: DEFAULT_TRUNCATE_ELLIPSIS,
  whiteSpace: false,
  elementType: DEFAULT_TRUNCATE_ELEMENT_TYPE,
  className: undefined,
  onTruncate: undefined,
};

export default Truncate;
