import React from 'react';
import classNames from 'classnames';
import { ELLIPSIS } from '../constants';

export default function Ellipsis() {
  return (
    <li className={classNames('page-item', 'disabled')}>
      <span className={classNames('btn', 'page-link', 'ellipsis')}>
        {ELLIPSIS}
      </span>
    </li>
  );
}
