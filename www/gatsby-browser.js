import React from 'react'
import { ParagonProvider } from '~paragon-react';

const wrapRootElement = ({ element }) => <ParagonProvider>{element}</ParagonProvider>;

export { wrapRootElement };
