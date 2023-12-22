import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { SearchFieldContext } from './SearchFieldAdvanced';

function SearchFieldLabel({ children, ...props }) {
  const { screenReaderText, inputId } = useContext(SearchFieldContext);

  return (
    <label
      htmlFor={inputId.current}
      className={classNames('m-0', { 'has-label-text': !!children })}
      {...props}
    >
      {children || <span className="sr-only">{screenReaderText.label}</span>}
    </label>
  );
}

SearchFieldLabel.propTypes = {
  /**
   * specifies the label to use for the input field (e.g., for i18n translations).
   * Note: if `children` is not provided, a screenreader-only label will be used in
   * its placed based on the `screenReaderText.label` prop for `SearchField.Advanced`.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

SearchFieldLabel.defaultProps = {
  children: undefined,
};

export default SearchFieldLabel;
