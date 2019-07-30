import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export function ComponentStatus({ status, noLeftMargin }) {
  if (!status) return null;
  return (
    <span
      className={`status-indicator ${noLeftMargin &&
        'status-no-left-margin'} ${status.toLowerCase().replace(' ', '-')}`}
    >
      <span>{status}</span>
    </span>
  );
}

ComponentStatus.propTypes = {
  status: PropTypes.string.isRequired,
};
