import React from 'react';
import { storiesOf } from '@storybook/react';

import Table from './index';

const catData = [
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
  {
    name: 'Maru',
    color: 'brown tabby',
    famous_for: 'being a lovable oaf',
  },
  {
    name: 'Keyboard Cat',
    color: 'orange tabby',
    famous_for: 'piano virtuoso',
  },
];

const catHeadings = [
  {
    label: 'Name',
    key: 'name',
  },
  {
    label: 'Famous For',
    key: 'famous_for',
  },
  {
    label: 'Coat Color',
    key: 'color',
  },
];

storiesOf('Table', module)
  .add('unstyled', () => (
    <Table
      data={catData}
      headings={catHeadings}
      caption="Famous Internet Cats"
    />
  ))
  .add('table-striped', () => (
    <Table
      data={catData}
      headings={catHeadings}
      caption="Famous Internet Cats"
      className={['table-striped']}
    />
  ))
  .add('default heading', () => (
    <Table
      data={catData}
      headings={catHeadings}
      caption="Famous Internet Cats"
      headingClassName={['thead-default']}
    />
  ));
