import React from 'react';
import { storiesOf } from '@storybook/react';

import AsyncActionButton from './index';
import Icon from '../Icon';
import README from './README.md';

storiesOf('Basics|AsyncActionButton', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => {
    const props = {
      labels: {
        default: 'Saved',
        pending: 'Saving',
        complete: 'Saved',
      },
      className: 'btn-primary mr-2',
    };
    return (
      <div>
        <AsyncActionButton {...props} />
        <AsyncActionButton state="pending" {...props} />
        <AsyncActionButton state="complete" {...props} />
      </div>
    );
  })
  .add('custom icons and disable during state', () => {
    const downloadButtonProps = {
      labels: {
        default: 'Download',
        pending: 'Downloading',
        complete: 'Downloaded',
      },
      icons: {
        default: <Icon className="fa fa-download" />,
        pending: <Icon className="fa fa-spinner fa-spin" />,
        complete: <Icon className="fa fa-check" />,
      },
      disabledStates: ['pending'],
      className: 'btn-primary mr-2',
    };
    return (
      <React.Fragment>
        <AsyncActionButton state="default" {...downloadButtonProps} />
        <AsyncActionButton state="pending" {...downloadButtonProps} />
        <AsyncActionButton state="complete" {...downloadButtonProps} />
      </React.Fragment>
    );
  })
  .add('custom states', () => {
    const buttonProps = {
      labels: {
        unedited: 'Save (no changes)',
        edited: 'Save Changes',
      },
      icons: {
        unedited: <Icon className="fa fa-save" />,
        edited: <Icon className="fa fa-save" />,
      },
      disabledStates: ['unedited'],
      className: 'btn-primary mr-2',
    };
    return (
      <React.Fragment>
        <AsyncActionButton state="unedited" {...buttonProps} />
        <AsyncActionButton state="edited" {...buttonProps} />
      </React.Fragment>
    );
  });
