import React from 'react';
import PropTypes from 'prop-types';

export interface IComponentStatus {
  status: string,
  noLeftMargin?: string,
}

// eslint-disable-next-line import/prefer-default-export
export function ComponentStatus({ status, noLeftMargin }: IComponentStatus) {
  if (!status) { return null; }
  return (
    <span
      className={`status-indicator ${noLeftMargin
          && 'status-no-left-margin'} ${status.toLowerCase().replace(' ', '-')}`}
    >
      <span>{status}</span>
    </span>
  );
}

ComponentStatus.propTypes = {
  status: PropTypes.string.isRequired,
  noLeftMargin: PropTypes.bool,
};

ComponentStatus.defaultProps = {
  noLeftMargin: false,
};
