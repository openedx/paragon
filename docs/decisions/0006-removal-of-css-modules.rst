6. Removal of CSS Module Support
--------------------------------

Status
------

Proposed with this PR

Context
-------

Paragon utilizes CSS modules to create a namespaced version of Paragon components. This namespaced version included an export of bootstrap and paragon styles with the .paragon__ prefix. It's purpose was to allow Paragon to be used in pages that didn't include bootstrap and would like have conflicts if it was added. This "static" version is consumed in edx-platform in 11 places today.

A resulting complication of using CSS Modules is that each component JSX file must include a SCSS file that contains all the classes it will use. In most situations this is perfectly fine, but in our case we are including partials from bootstrap that contain variable names and mixins that have changed between minor versions. The result is that if a consuming application is using a 4.1.x version of bootstrap and Paragon's latest export is 4.2.x, there may be SCSS compile errors in the consuming app.

Decision
--------

Remove our usage of CSS Modules. If we find a need to have CSS modules in the future we should look at other solutions. Concretely this decision includes this changes:

* Remove all SCSS imports in Paragon components (JSX).
* Delete SCSS files that had no other purpose than to supply namespaced class names

Consequences
------------

Paragon will rely on bootstrap class names being present for styling. It will no longer attempt to solve CSS conflicts for consuming applications.

References
----------

* https://css-tricks.com/css-modules-part-1-need/
