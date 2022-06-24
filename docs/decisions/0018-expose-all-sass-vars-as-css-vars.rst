0018 Expose CSS Variables for Consumers of Paragon
##################################################


Status
******

Draft

Context
*******

CSS traditionally did not support variables, which meant that to reuse colour
codes, or standardise margins, paddings, fonts or other styles we needed to use
a CSS pre-processor that supports variables, but removes variables from the
output CSS. This meant that any changes to a variable would require recompiling
the CSS from the source SCSS.

CSS now supports its own form of variables, and they now have `broad support
across browsers`_ . Since these are natively supported by CSS these can be used
at run time, and don't need a compilation step. They offer a couple of
advantages over SCSS variables such as:

- they can be changed at runtime by changing the stylesheet, and can be
  mainpulated using JavaScript.
- they can be scoped to a particular CSS class or media query.

SCSS/SASS still offers a number of other advantages such as nested classes,
mixins, functions, and utilities that are currently not available with CSS.

All Open edX MFEs use Bootstrap via Paragon for styling. Each MFE builds its
own stylesheet which is a combination Bootstrap, Paragon, and some MFE-specific
styling.

Currently the SCSS code is structured as follows:

- At the code we have Bootstrap
- Then we have Paragon, which uses Bootstrap and react-bootstrap
- Then we have the branding package which has SCSS files that can override
  Paragon defaults and add additional SCSS code
- Then we have MFEs that import from the branding package and Paragon, and
  usually hav some of their own SCSS code

Paragon uses Bootstrap variables, and the branding theme uses Paragon/Bootstrap
variables, any changes to any variables mean that the entire codebase needs to
be rebuilt. However, this need not be the case, if the dependencies between
these packages is expressed via CSS variables instead of SCSS variables, then
any changes to values will be picked up at runtime. Such a setup would allow
building Bootstrap + Paragon + the branding package into a stylesheet that
contains all the variables MFEs need so they can use the stylesheet directly
and not need recompilation if this common stylesheet changes.

This ADR only concerns itself consumers of Paragon, and as such still expects
Paragon to continue using SCSS variables itself.

If we want to be able to support a common pre-built core stylesheet that can be
used by all MFEs and deployed independently of MFEs, then MFEs cannot use any
SCSS variables from Paragon + Bootstrap since in that case any changes to the
core theme will require a rebuild of each MFE, and as such these variables
should instead be used as CSS variables so that they can be looked up at
runtime rather then build time.

Bootstrap already exports a number of CSS variables (these can be found in
`this document for Bootstrap 4.x`_), however they don't cover all usecases. For
instance, usage of colour variables like `primary-400`, or `light-300` are
abundant in MFEs, however these are not expored by Bootstrap even though they
are available as SCSS variables.

Decision
********

We will export all theme variables that an MFE could need as CSS variables so
that these can be applyed at runtime rather than build time.

Paragon can create CSS variable exports like: `--pgn-blue`, `--pgn-primary`,
`--pgn-primary-200`` etc. The reason for prefixing with `--pgn` is to isolate
changes to these names in Bootstrap. For example, in Bootstrap 4.x these are
named as `--blue, --primary` etc. However in `Bootstrap 5`_, they are prefixed
with `--bs-blue, --bs-primary`, this incompatibility can be handled at the
Paragon level whenever it switches from 4.x to 5.x without needing changes from
MFEs.

Paragon will pick up a standardised set of SCSS variables such as those
relating to colours, colour shades, font styles, and responsible breakpoints
and expose these as CSS variables with a ``--pgn`` prefix. These variables will
be exported by the Paragon package, however, they will be use variables defined
in the branding package thus allowing them to be redefined easily.

Any current usage of SCSS variables in MFEs can then be replaced with the
equivalent CSS variable.


Consequences
************

Once this is implemented, MFEs, and other consumers of Pargaon can start using
CSS variables, wherever they are currently using SASS variables. The
limitiation right now is that many of the variables needed by MFEs are only
available as SCSS variables.

Since these will be defined in the common theme, that means rebuilding it once
and deploying it to all MFEs (or to a common place shared by all MFEs) will
automatically apply all the latest variables.

After this ADR we can create a common stylesheet containing Bootstrap + Paragon
+ the Branding package that is loaded by all MFEs. The MFEs themselves should
not import this as SCSS but as compiled CSS and only use CSS variables. This
way each MFE will then have two stylesheets, a common stylesheet used by all
MFEs which also includes variable definitions, and an MFE-specific stylesheet
that uses only CSS variables. So the common stylesheet becomes a runtime
dependency rather than a build time dependency, allowing it to be built and
replaced at run time without needing to rebuild a growing number of MFEs.

Implementing this ADR will not accomplish the above, however it paves the way
for such a change. The above will be the subject of a future ADR.

`CSS Variables are well supported`_ in major browsers since many years, and
align well with the currently supported browsers.

Rejected Alternatives
*********************

1. Wherever an SCSS variable is deemed necessary, simply create a Paragon CSS
class instead. This can be worthwhile for specific cases where the styling has
broad use or can be made into a component, however there are cases where this
is less useful. For instance with one-off UI elements that only make sense in a
particular MFE (`example
<https://github.com/openedx/frontend-app-learning/blob/6257cb4b588fc4f9903113e22b318a63d1ddfe8e/src/course-home/progress-tab/course-completion/CompletionDonutChart.scss#L57-L74>`_)
2. Keep a common core theme but also rebuild each MFE when it changes. This
removes some of the benefits of a single theme file, such as a single common
theme deployment, and quicker theme compilation and deployment.
3. Run-time compilation of SASS using `sass.js`_. This is a major performance
hit and adds around 4.5MB of minified JavaScript.

References
**********

.. _Documenting Architecture Decisions: https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions
.. _this document for Bootstrap 4.x: https://getbootstrap.com/docs/4.6/getting-started/theming/#css-variables
.. _Bootstrap 5.x: https://getbootstrap.com/docs/5.0/customize/css-variables/#component-variables
.. _CSS Variables are well supported: https://caniuse.com/css-variables
.. _broad support across browsers: https://caniuse.com/css-variables
.. _sass.js: https://github.com/medialize/sass.js
