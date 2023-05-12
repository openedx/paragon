import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { usePopper } from 'react-popper';

function PopperElement({
  children, target, strategy, placement, modifiers,
}) {
  const [popperElement, setPopperElement] = useState(null);
  const popperOptions = { modifiers, strategy, placement };
  const {
    styles,
    attributes,
  } = usePopper(target, popperElement, popperOptions);

  if (!target) {
    return null;
  }

  return (
    <div ref={setPopperElement} style={{ ...styles.popper, zIndex: 2000 }} {...attributes.popper}>
      {children}
    </div>
  );
}

PopperElement.defaultProps = {
  target: undefined,
};

PopperElement.propTypes = {
  children: PropTypes.node,
  target: PropTypes.shape({
    current: PropTypes.shape({}),
  }),
  strategy: PropTypes.oneOf(['absolute', 'fixed']),
  placement: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
  ]),
  modifiers: PropTypes.arrayOf(PropTypes.shape({})),
};

PopperElement.defaultProps = {
  children: undefined,
  strategy: 'absolute',
  placement: 'bottom-start',
  modifiers: [
    {
      name: 'flip',
      enabled: true,
    },
    {
      name: 'preventOverflow',
      options: {
        tether: false,
      },
    },
  ],
};

export default PopperElement;
