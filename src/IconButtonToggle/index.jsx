import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Container } from '..';

const IconButtonToggle = ({ activeValue, onChange, children }) => {
  const iconButtons = useMemo(
    () => React.Children.map(children, iconButton => (
      <>
        {React.cloneElement(iconButton, {
          onClick: () => { onChange(iconButton.props.value); },
          invertColors: iconButton.props.value === activeValue,
        })}
      </>
    )),
    [children],
  );
  return <Container>{iconButtons}</Container>;
};

IconButtonToggle.defaultProps = {
  onChange: () => {},
};

IconButtonToggle.propTypes = {
  activeValue: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default IconButtonToggle;
