import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';

import SearchField from './index';
import README from './README.md';

storiesOf('SearchField', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .addDecorator(withReadme(README))
  .add('basic usage', () => (
    <SearchField
      onSubmit={action('search-submitted')}
    />
  ))
  .add('with placeholder', () => (
    <SearchField
      onSubmit={action('search-submitted')}
      placeholder="Search"
    />
  ))
  .add('with value', () => (
    <SearchField
      onSubmit={action('search-submitted')}
      placeholder="Search"
      value="foobar"
    />
  ))
  .add('with callbacks', () => (
    <SearchField
      onSubmit={action('search-submitted')}
      onChange={action('value-changed')}
      onFocus={action('search-focused')}
      onBlur={action('search-blurred')}
      onClear={action('search-cleared')}
    />
  ))
  .add('with custom label and screenreader text', () => (
    <SearchField
      onSubmit={action('search-submitted')}
      inputLabel="Buscar:"
      screenReaderText={{
        clearButton: 'Borrar búsqueda',
        searchButton: 'Enviar búsqueda',
      }}
    />
  ));
