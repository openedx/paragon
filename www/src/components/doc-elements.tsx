import React from 'react';
import PropTypes from 'prop-types';

export type ComponentStatusProps = {
  status: string,
  noLeftMargin?: string,
};

export function ComponentStatus({ status, noLeftMargin }: ComponentStatusProps) {
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
