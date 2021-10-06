import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Form } from '../..';
import { newId } from '../../utils';

const LabelledCheckbox = ({
  onChange, checked, label, id,
}) => {
  const idRef = useRef(newId(id));
  return (
    <div key={idRef.current} className="pgn__checkbox-filter">
      <Form.Check
        id={idRef.current}
        checked={checked}
        onChange={onChange}
        label={label}
      />
    </div>
  );
};

LabelledCheckbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  id: PropTypes.string.isRequired,
};

export default LabelledCheckbox;
