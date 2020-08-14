5. Removal of edX.org assets
----------------------------


Status
------

Accepted


Context
-------

Paragon currently contains:

  - SCSS framework based on Bootstrap
  - edX SCSS theme
  - React components
  - Documentation site

Merges to master trigger work to:

  - Publish @edx/paragon to npm.
  - Build and deploy Paragon documentation with the edX.org theme to https://edx.github.io/paragon

There are pros and cons to this project's current structure. First the pros:

  - The edX theme is represented in the doc site with little technical complexity. This is good for edX employees to understand what our visual styles are.
  - edX theme changes are easily seen during development of components.

Cons:

  - edX theme changes are coupled with Paragon component changes. This can block teams from upgrading the edX theme in their projects.
  - The default theme is not represented in documentation.
  - This project is open source but not for general use by default.


Decision
--------

We will create a new project for edX.org branding. It will include the edX theme and other edX brand assets. Paragon will no longer have any specific tie to edX,org visuals. The new structure

Paragon:

  - SCSS framework based on Bootstrap
  - React components
  - Documentation site

Merges to Paragon master trigger work to:

  - Publish @edx/paragon to npm.
  - Build and deploy Paragon documentation with no theme to https://edx.github.io/paragon
  - Build and deploy a version of the Paragon documentation with the edX.org theme at https://paragon.edx.org

edX Brand:

  - edX theme
  - edX brand assets (e.g. logo.svg)

Merges to edX Brand trigger work to:

  - Build and deploy a version of the Paragon documentation with the edX.org theme at https://paragon.edx.org

This structure has pros and cons as well:

Pros:
  - The edX theme is decoupled from Paragon. Adopting theme updates is easier for teams.
  - The default and edX themes are both documented.
  - There is a new common location for brand assets.
  - Paragon is an independent open source library

Cons:
  - Two documentation sites one for edX and one for Paragon makes for some additional CI complexity.
  - edX.org theme changes may be more difficult to see during development. We will need to determine an efficient way to do this.

Consequences
------------

This change will simplify this Paragon and make it easier to use for the general public. It will also help edX teams update the themes of their edX applications more quickly and help them theme applications in a way similar to what Open edX operators will need to do.

References
----------

* https://docs.google.com/presentation/d/1Hpwn0fwsSOhanrHrQ5YPP3yAXdS8hwHlb5SUPL_B06M/edit?usp=sharing
