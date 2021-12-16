14. Removal of Custom Responsive Components
-------------------------------------------

Status
------

Accepted

Context
_______

Paragon utilizes the `react-responsive <https://www.npmjs.com/package/react-responsive>`_
NPM package in some components, as well as providing some helper components from
react-responsive. However, often consumers of Paragon require additional responsive
functionality than is offered through Paragon itself and as such resort to installing
react-responsive as a standalone dependency in microfrontends.

If Paragon instead makes react-responsive a passthrough library, consumers of Paragon will
be able to use react-responsive directly (by importing it from Paragon) rather than needing
to install it separately. This shouldn’t necessarily have any impact on Paragon’s bundle
size since react-bootstrap already ships with Paragon; just not all its functionality is
importable by its consumers.

Decision
________

We will remove the following components:

- ExtraSmall
- Small
- Medium
- Large
- ExtraLarge
- ExtraExtraLarge
- LargerThanExtraSmall

We will pass through the following components and functionality from react-responsive:

- MediaQuery
- useMediaQuery
- Context (as ResponsiveContext)

Consequences
------------

- Consumers of the current `Responsive` components will need to refactor to the passthrough
  components from react-responsive.
- Consumers of Paragon will be able to use components from react-responsive directly, without
  having to install it separately.
