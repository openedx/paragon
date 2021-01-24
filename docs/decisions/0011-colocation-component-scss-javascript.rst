11. Colocate Component Javascript and Styles
--------------------------------------------

Status
------

Accepted

Context
-------

It is difficult for contributing developers new to Paragon to understand where new SCSS should be added or modified. The majority of Paragon styles sit inside the `scss` directory. Most component related scss is in this directory mixed with common variables or styles.

There is an `extensions` directory and `overrides` directory in `scss/core` for extensions or overrides to Bootstrap SCSS used in Paragon. It's difficult to distinguish between what style changes in Paragon are extensions to Bootstrap or simply overrides. Often this is determined by how the Bootstrap styles are implemeneted and whether they are extensible.

Decision
--------

We will colocate component-related SCSS and javascript in `src/{componentName}` directories. SCSS variables related to a component will be moved into the component directory in a distinct file `_variables.scss`. An example directory for Button:

```
src/Button/_variables.scss
src/Button/Button.scss
src/Button/Button.jsx
src/Button/Button.test.jsx
```

The root `src/index.scss` will be responsible for including this SCSS files.


Consequences
------------

This will involve moving component styles from the `scss` directory into the `src directory`. Moving forward all component-related styles will in component directories.

Colocating SCSS and Javascript will bring us closer to more modularized component code that is more discoverable and easier to reason. This decision will simplify our future adoption of CSS-in-JS or CSS Modules + CSS Variables – a decision to be made in the coming months.

References
----------

* https://kentcdodds.com/blog/colocation
