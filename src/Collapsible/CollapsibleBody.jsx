import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { CollapsibleContext } from './index';

export default function CollapsibleBody(props) {
  const { isOpen } = useContext(CollapsibleContext);

  if (!isOpen) return null;

  return (
    <div className="collapse-body">
      {props.children}
    </div>
  )
}
