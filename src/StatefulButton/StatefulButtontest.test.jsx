import React from 'react';
import renderer from 'react-test-renderer';

import StatefulButton from './index';
import Icon from '../Icon';

describe('StatefulButton', () => {
  it('renders basic usage', () => {
    const props = {
      labels: {
        default: 'Saved',
        pending: 'Saving',
        complete: 'Saved',
      },
      className: 'mr-2',
      variant: 'primary',
    };
    const tree = renderer.create((
      <div>
        <StatefulButton {...props} />
        <StatefulButton state="pending" {...props} />
        <StatefulButton state="complete" {...props} />
      </div>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders custom icons and disable during state', () => {
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
      className: 'mr-2',
      variant: 'primary',
    };
    const tree = renderer.create((
      <>
        <StatefulButton state="default" {...downloadButtonProps} />
        <StatefulButton state="pending" {...downloadButtonProps} />
        <StatefulButton state="complete" {...downloadButtonProps} />
      </>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders custom states', () => {
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
      className: 'mr-2',
      variant: 'primary',
    };
    const tree = renderer.create((
      <>
        <StatefulButton state="unedited" {...buttonProps} />
        <StatefulButton state="edited" {...buttonProps} />
      </>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
