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
  {
    name: 'Long Cat',
    color: 'russian white',
    famous_for: 'being loooooooooooooooooooooooooooooooooooooooooooooooooooooong',
  },
];

const catColumns = [
  {
    label: 'Name',
    key: 'name',
    columnSortable: true,
    onSort: () => {},
    width: 'col-3',
  },
  {
    label: 'Famous For',
    key: 'famous_for',
    columnSortable: false,
    onSort: () => {},
    width: 'col-6',
  },
  {
    label: 'Coat Color',
    key: 'color',
    columnSortable: false,
    hideHeader: true,
    onSort: () => {},
    width: 'col-3',
  },
];

const sort = function sort(firstElement, secondElement, key, direction) {
  const directionIsAsc = direction === 'asc';

  if (firstElement[key] > secondElement[key]) {
    return directionIsAsc ? 1 : -1;
  } else if (firstElement[key] < secondElement[key]) {
    return directionIsAsc ? -1 : 1;
  }
  return 0;
};

storiesOf('Table', module)
  .add('unstyled', () => (
    <Table
      data={catData}
      columns={catColumns}
      caption="Famous Internet Cats"
    />
  ))
  .add('table-striped', () => (
    <Table
      data={catData}
      columns={catColumns}
      caption="Famous Internet Cats"
      className={['table-striped']}
    />
  ))
  .add('default heading', () => (
    <Table
      data={catData}
      columns={catColumns}
      caption="Famous Internet Cats"
      headingClassName={['thead-default']}
    />
  ))
  .add('responsive', () => (
    <Table
      data={catData}
      columns={catColumns}
      caption="Famous Internet Cats"
      className={['table-responsive']}
    />
  ))
  .add('sortable', () => {
    const catDataSortable = catData.slice();

    return (<Table
      data={catDataSortable.sort((firstElement, secondElement) => sort(firstElement, secondElement, catColumns[0].key, 'desc'))}
      columns={catColumns.map(column => ({
        ...column,
        onSort(direction) {
          catDataSortable.sort((firstElement, secondElement) =>
            sort(firstElement, secondElement, column.key, direction));
        },
      }))}
      caption="Famous Internet Cats"
      tableSortable
      defaultSortedColumn={catColumns[0].key}
      defaultSortDirection="desc"
    />);
  })
  .add('fixed', () => (
    <Table
      data={catData}
      columns={catColumns}
      caption="Famous Internet Cats"
      hasFixedColumnWidths
    />
  ));
