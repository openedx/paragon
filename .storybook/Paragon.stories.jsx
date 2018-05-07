/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import styles from './storystyle.scss';

storiesOf('Paragon', module)
  .add('Welcome', () => (
    <div className={styles['titlediv']}>
      <h1>💎 Paragon</h1>
      <p>
        This is a documentation and demo space for the Paragon accessible UI component
        library. Better docs coming soon, but for now, check out our existing components
        via the links to the left-hand side.
      </p>
      <p>
        Documentation generated with <a
          href="https://github.com/kadirahq/react-storybook"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Storybook
        </a>.
      </p>
    </div>
  ));
