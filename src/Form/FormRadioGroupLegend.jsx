import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useRadioGroupContext } from './FormRadioGroupContext';

const FormRadioGroupLegend = ({ children, ...props }) => {
  const { getNewDescriptorId, addNewDescriptorId, removeDescriptorId } = useRadioGroupContext();
  const [id, setId] = useState(props.id);
  useEffect(() => {
    if (props.id) {
      addNewDescriptorId(props.id)
    } else {
      setId(getNewDescriptorId());
    }
    return () => removeDescriptorId(id);
  }, []);
  const className = classNames('pgn__form-radio-group-legend', props.className);
  return (
    <legend {...props} id={id} className={className}>
      {children}
    </legend>
  );
};

FormRadioGroupLegend.propTypes = {

};

FormRadioGroupLegend.defaultProps = {

};

export default FormRadioGroupLegend;
