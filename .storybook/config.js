import React from 'react';
import { addParameters, addDecorator, configure } from '@storybook/react';

// Style applied to all stories
import "bootstrap/scss/bootstrap.scss";


// Option defaults:
addParameters({
  options: {
    name: '💎 PARAGON',
    url: 'https://github.com/edx/paragon',
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullScreen: false,
    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,
    /**
     * where to show the addon panel
     * @type {String}
     */
    panelPosition: 'bottom',
    /**
     * sorts stories
     * @type {Boolean}
     */
    sortStoriesByKind: false,
    /**
     * regex for finding the hierarchy separator
     * @example:
     *   null - turn off hierarchy
     *   /\// - split by `/`
     *   /\./ - split by `.`
     *   /\/|\./ - split by `/` or `.`
     * @type {Regex}
     */
    hierarchySeparator: /\/|\./,
    /**
     * regex for finding the hierarchy root separator
     * @example:
     *   null - turn off multiple hierarchy roots
     *   /\|/ - split by `|`
     * @type {Regex}
     */
    hierarchyRootSeparator: /\|/,
    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,
    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,
    /**
     * theme storybook, see link below
     */
    theme: 'undefined',
  },
  info: {
    // Make a default for all stories in this book,
    inline: false, // where the components are inlined
    source: true,
    styles: {
      header: {
        h1: {
          // color: 'red', // and the headers of the sections are red.
        },
      },
    },
  },
});


addDecorator(storyFn => <div className="p-5">{storyFn()}</div>);


const req = require.context('../src', true, /\.stories\.jsx$/);

function loadStories() {
  require('./Paragon.stories.jsx');
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
