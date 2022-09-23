4. Usage of Bootstrap
----------------------

Status
------

Accepted

Context
-------

Our current understanding (though it was not documented as an ADR) is that Paragon was created with the assumption that its codebase could be separable from Bootstrap, in the sense that a consumer may wish to use Paragon without backing it with Bootstrap.

Practically speaking, many Paragon components directly import styles from Bootstrap. The code will not compile in webpack unless Bootstrap is present in node_modules. Bootstrap is not listed as a dependency in @edx/paragon's package.json file - it is, however, a dependency of @edx/edx-bootstrap, which Paragon itself depends on. Currently the paragon-reset.scss imports the edx-bootstrap theme.

Furthermore, Paragon makes use of Bootstrap utility class names for its styling. Technically one could use these names without using Bootstrap itself, but any stylesheet besides Bootstrap's that were used to back Paragon's reusable components would have to conform to Bootstrap's class names anyway.

Decision
--------

Paragon will formally be backed by Bootstrap, which is mostly just an affirmation of what's already happening. The exact import/module relationship between Paragon and Bootstrap can be handled in a separate ADR. More specifically, Paragon will be backed by edx-bootstrap, which has already been updated with input from the UX team. Paragon components should make use of Bootstrap's utility classes wherever possible, rather than creating custom styling.

Consequences
------------

This decision will simplify conversations about Paragon and edx-bootstrap by taking talk of a "Bootstrap-less" Paragon off the table. This will allow us to make decisions about the relationship between Paragon, edx-bootstrap, and our codebase that are best for developers using the libraries.

It frees us up to couple Paragon and edx-bootstrap as tightly (or loosely) as necessary to simplify the use of Paragon and the extension/theming of edx-bootstrap.

Given that Paragon already has a relatively strong dependency on Bootstrap in the codebase, this is highly unlikely to affect any current consumers of Paragon.

References
----------

* https://github.com/openedx/paragon
* https://github.com/openedx/edx-bootstrap
