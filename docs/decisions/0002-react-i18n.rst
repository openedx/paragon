2. ``react-intl``
-----------------

Status
------

Accepted

Context
-------

We have business needs to translate or otherwise internationalize
strings of text used within ``paragon``
components. Internationalization is critical to the goal of extending
access to education globally, a core aspect of the mission of the
edX platform.

The React community has demonstrated fairly widespread adoption of
react-intl_ for addressing this need in various contexts.
The ``edx/studio-frontend`` project has used react-intl_ for some
time.

Decision
--------

We will adopt the use of react-intl_ for all new learner- and
educator-facing web development using React.
We will attempt to standardize our use of internationalization
libraries (including but not limited to react-intl_) for existing
React-based web development.

Consequences
------------

react-intl_ uses the `React context API`_ when using the
``FormattedMessage``, ``React.Component``-based approach to using the
API. Because of this reliance on context, folks passing components
to ``paragon`` components (e.g. as ``children``) will expect that
these components will be rendered within the same React component
hierarchy as the ``paragon`` component, rather than some other,
independent component hierarchy. This way, the underlying ``Consumer``
will be in the same hierarchy as the corresponding ``Provider``. We,
as developers of the ``paragon`` library, must not foil this
assumption.

Thus a corollary decision: any ``prop`` for a ``paragon`` component
which accepts and renders inputs of type ``PropType.element`` must
include that element within the same React component hierarchy in
which it itself is found (and no others). `An example of issues that
arise if this isn't done can be found here.`_ As a result,
getTextFromElement_ (and any other utilities which rely on rendering
such props in another React component hierarchy) are deprecated
according to the process outlined in OEP-21_.

Because getTextFromElement was used to reduce duplication of strings
used both as a11y strings (e.g. ``aria-label``) and as html-wrapped
copy placed in the DOM outside an attribute (e.g. ``label``), we
advise that in these cases we redesign our component interfaces to
demand that these details be duplicated on the component-user's
side. To restate: we will force these two distinct use cases to be
provided as two separate props.

Questions
---------

1. `Support for multiple plurals`_

References
----------

.. target-notes::

.. _react-intl: https://github.com/yahoo/react-intl
.. _`React context API`: https://reactjs.org/docs/context.html
.. _`An example of issues that arise if this isn't done can be found here.`: https://github.com/matthugs/trouble-in-intl-land
.. _getTextFromElement: https://github.com/openedx/paragon/blob/9a025c7702c4ebd28a318b15f7aca90c556854ba/src/utils/getTextFromElement.js
.. _OEP-21: https://open-edx-proposals.readthedocs.io/en/latest/oep-0021-proc-deprecation.html
.. _`Support for multiple plurals`: https://github.com/openedx/paragon/pull/349#issuecomment-434395311
