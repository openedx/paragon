import React from 'react'
import { ParagonProvider } from '~paragon-react';
import applyTheme from '@edx/brand/paragon/theme';

const wrapRootElement = ({ element }) => (
  <ParagonProvider theme={applyTheme}>
    {element}
  </ParagonProvider>
);

export { wrapRootElement };
