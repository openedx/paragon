5. Abandon Reactstrap
---------------------

Status
------

Superseded by ADR-0009

Context
-------

As proposed in ADR-0005, we experimented with Reactstrap components in the Profile micro-frontend application. On the plus side, Reactstrap is clean to look at, easy to use and removes the need to know Bootstrap class names to get started.

This comes at the cost of abstracting away raw html and introducing yet another API to learn and remember. In some cases, Reactstrap components serve little purpose: The <Form /> component, for example, offers just one boolean prop (<Form inline />) to toggle the Bootstrap class name "form-inline".

Decision
--------

We will abandon our intention to leverage Reactstrap in Paragon.

Paragon should offer useful tools while keeping developers as close to the html as possible. It should discourage unneccessary abstractions that may create future complications (e.g. passing refs, added difficulty satisfying accessibility needs, conflicts with other tools like Redux forms).

Where we prefer applications to use raw HTML, we should add succinct documentation within Paragon describing the HTML element and its related Bootstrap class names.

Consequences
------------

We will not add passthrough components for Reactstrap.

We will consider adding documentation in Paragon for some raw HTML elements and their related Bootstrap class names (e.g. For input fields: .form-control, .form-control-sm, .form-control-file, etc).

References
----------

* https://github.com/openedx/paragon
* https://reactstrap.github.io/
