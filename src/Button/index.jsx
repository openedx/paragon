import React, { createRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import ButtonBase from 'react-bootstrap/Button';

import { useHandleLogClick } from '../hooks/analytics';

import ButtonDeprecated from './deprecated';

const Button = React.forwardRef(({
  children,
  analyticEvents,
  ...attrs
}, forwardedRef) => {
  const ref = useMemo(() => forwardedRef || createRef(), [forwardedRef]);

  const handleLogClick = useHandleLogClick({
    event: analyticEvents?.onClick,
    onClick: attrs?.onClick,
    ref,
  });

  return (
    <ButtonBase
      ref={ref}
      {...attrs}
      onClick={handleLogClick}
    >
      {children}
    </ButtonBase>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  analyticEvents: PropTypes.shape({
    onClick: PropTypes.shape({
      name: PropTypes.string,
      properties: PropTypes.shape({}),
      dispatchers: PropTypes.arrayOf(PropTypes.func),
    }),
  }),
};

Button.defaultProps = {
  onClick: undefined,
  analyticEvents: undefined,
};

Button.Deprecated = ButtonDeprecated;

export default Button;
export { default as ButtonGroup } from 'react-bootstrap/ButtonGroup';
export { default as ButtonToolbar } from 'react-bootstrap/ButtonToolbar';
