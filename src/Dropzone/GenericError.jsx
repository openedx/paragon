import React from 'react';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import { Info } from '../../icons';

function GenericError({ errorMsgs }) {
  return (
    <Alert
      variant="danger"
      icon={Info}
      className="pgn__dropzone-generic-alert"
    >
      {errorMsgs.map(msg => (
        <span key={msg}>{msg}</span>
      ))}
    </Alert>
  );
}

GenericError.propTypes = {
  errorMsgs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GenericError;
