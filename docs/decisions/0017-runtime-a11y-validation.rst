17.  Accessibility validation at runtime via ``@axe-core/react``
----------------------------------------------------------------

Status
------

Accepted

Context
_______

Accessibility (a11y) is a critical element to the Paragon design system and the Open edX platform at large, in that we conform to WGAC standards.

Paragon already uses some tooling around accessibility in that it utilizes the ``eslint-plugin-jsx-a11y`` ESLint plugin that helps catch a11y issues at the code/implementation level (e.g., an ``alt`` prop is missing from an ``img`` element).

However, most a11y bugs are actually found at runtime, when elements are fully rendered in the DOM. We currently have no way to validate a11y issues at runtime outside of manual QA.

Decision
________

We will introduce ``@axe-core/react`` into Paragon in order to catch accessibility issues at runtime, where any a11y issues are automatically flagged in the Developer Console. See `documentation <https://github.com/dequelabs/axe-core-npm/blob/develop/packages/react/README.md>`_ for more details.

``@axe-core/react`` will be enabled by default in the Paragon code repository, however there will be an environment variable that may be optionally configured to turn off the automated a11y checking during development, if desired.

Consequences
------------

* As with any tool, ``@axe-core/react`` is not perfect; it may return `false positives <https://www.deque.com/blog/the-cost-of-accessibility-false-positives/>`_. If there are questions or concerns about an identified issue, please `file an issue <https://github.com/openedx/paragon/issues/new?labels=a11y>`_ and the Paragon team will provide support where possible. 
* ``@axe-core/react`` generally "works best in the Chrome browser, with limited functionality in Safari and Firefox." (`source <https://www.npmjs.com/package/@axe-core/react>`_).
