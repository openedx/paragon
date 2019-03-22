import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Pagination from './index';
import README from './README.md';

storiesOf('Pagination', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <Pagination
      paginationLabel="pagination navigation"
      pageCount={20}
      onPageSelect={action('page-selected')}
    />
  ))
  .add('with initial page selected', () => (
    <Pagination
      paginationLabel="pagination navigation"
      pageCount={20}
      currentPage={15}
      onPageSelect={action('page-selected')}
    />
  ))
  .add('with max pages displayed', () => (
    <Pagination
      paginationLabel="pagination navigation"
      pageCount={20}
      onPageSelect={action('page-selected')}
      maxPagesDisplayed={9}
    />
  ))
  .add('with custom string labels', () => (
    <Pagination
      paginationLabel="pagination navigation"
      pageCount={20}
      onPageSelect={action('page-selected')}
      buttonLabels={{
        previous: 'Anterior',
        next: 'Siguiente',
        page: 'Página',
        currentPage: 'Página actual',
        pageOfCount: 'de',
      }}
    />
  ))
  .add('with custom element labels', () => (
    <Pagination
      paginationLabel="pagination navigation"
      pageCount={20}
      onPageSelect={action('page-selected')}
      buttonLabels={{
        previous: <span>Anterior</span>,
        next: <span>Siguiente</span>,
        page: <span>Página</span>,
        currentPage: <span>Página actual</span>,
        pageOfCount: <span>de</span>,
      }}
    />
  ));
