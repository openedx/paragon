import React from 'react';
import PropTypes from 'prop-types';

export function ComponentStatus({ status, children }) {
  if (!status) return null;
  return (
    <span className={`status-indicator ${status.toLowerCase().replace(' ', '-')}`}>
      <span>{status}</span>
    </span>
  );
}