import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './index';

storiesOf('Table', module)
  .add('basic usage', () => (
    <Table
      data={[
        {
          name: 'Lil Bub',
          color: 'brown tabby',
          famous_for: 'weird tongue',
        },
        {
          name: 'Grumpy Cat',
          color: 'siamese',
          famous_for: 'serving moods',
        },
        {
          name: 'Smoothie',
          color: 'orange tabby',
          famous_for: 'modeling',
        },
      ]}
      headings={[
        {
          display: 'Name',
          key: 'name',
        },
        {
          display: 'Famous For',
          key: 'famous_for',
        },
        {
          display: 'Coat Color',
          key: 'color',
        },
      ]}
    />
  ));
