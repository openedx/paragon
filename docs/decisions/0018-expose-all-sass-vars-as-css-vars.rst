0018 CSS Variables
##################


Status
******

Draft

Context
*******

.. This section describes the forces at play, including technological, political, social, and project local. These forces are probably in tension, and should be called out as such. The language in this section is value-neutral. It is simply describing facts.

All Open edX MFEs use Bootstrap via Paragon for styling. Each MFE builds its
own styling which is a combination of common styles from Bootstrap + Paragon,
on which it addds its own SCSS.

If we want to be able to support a common pre-built core stylesheet that can be
deployed independently of MFEs, then MFEs cannot use any SCSS variables from
Paragon + Bootstrap since in that case any changes to the core theme will
require a rebuild of each MFE.

Decision
********

We will export all theme variables that an MFE could need as css variables so
that these can be applyed at runtime rather than build time.

Bootstrap already exports a number of CSS variables (these can be found in
`this document for Bootstrap 4.x`_), however they don't cover all usecases. For
instance, usage of colour variables like `primary-400`, or `light-300` are
abundant. Often they can be used via existing Bootstrap classes, but sometimes
they can't.

Paragon can create CSS variable exports like: `--pa-blue`, `--pa-primary`,
`--pa-primary-200`` etc. The reason for prefixing with `--pa` is to isolate
changes to these names in Bootstrap. For example, in Bootstrap 4.x these are
named as `--blue, --primary` etc. however in `Bootstrap 5`_, they are prefixed
with `--bs-blue, --bs-primary`.

Consequences
************

Wherever we are currently using SASS variables, we can now use CSS variables.
Since these will be defined in the common theme, that means rebuilding it once
and deploying it to all MFEs (or to a common place shared by all MFEs) will
automatically apply all the latest variables.

With this, the common branding theme becomes a runtime dependency rather than a
build time dependency, allowing it to be replaced at run time without needing to
rebuild a growing number of MFEs.

`CSS Variables are well supported`_ in major browsers since many years, and
aligns well with the currently supported browsers.

Rejected Alternatives
******************

1. Wherever an SCSS variable is deemed necessary, simply create a Paragon CSS
class instead. This can be worthwhile for specific cases where the styling has
broad use or can be made into a component, however there are cases where this
is less useful. For instance with one-off UI elements that only make sense in a
particular MFE (`example
<https://github.com/openedx/frontend-app-learning/blob/6257cb4b588fc4f9903113e22b318a63d1ddfe8e/src/course-home/progress-tab/course-completion/CompletionDonutChart.scss#L57-L74>`_)
2. Keep a common core theme but also rebuild each MFEs when it changes. This removes some of the benefits of a single theme file, such as a single common theme deployment, and quicker theme compilation and deployment.


References
**********

.. _Documenting Architecture Decisions: https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions
.. _this document for Bootstrap 4.x: https://getbootstrap.com/docs/4.6/getting-started/theming/#css-variables
.. _Bootstrap 5.x: https://getbootstrap.com/docs/5.0/customize/css-variables/#component-variables
.. _CSS Variables are well supported: https://caniuse.com/css-variables
