import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { CollapsibleContext } from './index';

export default function CollapsibleHeader(props) {
  const {
    isOpen,
    open,
    close,
    toggle,
  } = useContext(CollapsibleContext);

  return (
    <div
      className="collapse-header"
      onClick={toggle} 
    >
      {props.children}
    </div>
  )
}
