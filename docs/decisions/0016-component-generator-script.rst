16. Component Generator
-------------------------------------------

Status
------

Accepted

Context
_______

There are a lot of boilerplate actions need to be done when creating new components. These actions are:
- Create component directory
- Create an ``index.jsx`` file with defined component function, prop types and default export of the component
- Create a ``README.md`` file with frontmatter, and a live JSX code block that renders the component
- Create ``{ComponentName}.scss`` file for any styles required for the component
- Create ``_variables.scss`` for SASS variables required for the styles
- Create ``{ComponentName}.test.jsx`` file with tests for the new component
- Export the component from ``/src/index.js`` and styles from ``/src/index.scss``

It would be really helpful for the engineers who create new components to avoid manually performing these actions each time.

Decision
________

Implement a Node.js script which would create a template for new component automatically.
The script can be invoked by the following command:

.. code-block:: console

  npm run generate-component -- --componentName=MyComponent


where ``MyComponent`` is the name of the new component. The script will perform following actions:

1. Create a directory in ``/src/`` folder for the component with all necessary files and appropriate content configured:

::

MyComponent
├── index.jsx              # contains component definition and its export
├── README.md              # contains basic frontmatter with jsx live block that renders the component
├── MyComponent.scss       # contains empty CSS class for new component
├── _variables.scss        # empty file for SASS variables definitions
└── MyComponent.test.jsx   # contains single snapshot test


2. Export the component and its styles from Paragon, i.e. add following exports:
   - in ``/src/index.js`` add ``export { default as MyComponent } from './MyComponent';`` line
   - in ``/src/index.scss`` add ``@import "./MyComponent/MyComponent.scss";`` line

3. Add all files from ``MyComponent`` folder to git.

Consequences
------------

The script will greatly improve quality of life for engineers, they will be able to instantly start working on developing new component instead of spending time to set everything up.  
