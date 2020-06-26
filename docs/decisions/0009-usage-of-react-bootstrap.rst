5. Usage of Reactstrap
----------------------


Status
------

Adopted


Context
-------

Paragon is built on top of the Bootstrap CSS Framework. The Paragon React component library aims to mirror Bootstrap's HTML and Javascript components. To date we have not expanded the Paragon React component library to include all Bootstrap components.

ADR 5 Made the case for adoption of Reactstrap. ADR 8 abandoned the idea because adopting Reactstrap "This comes at the cost of abstracting away raw html and introducing yet another API to learn and remember." Since then, we have added very few homegrown components. Designers and engineers are often needing components that exist in Bootstrap but not build as Paragon components.

By not building these components ourselves or adopting third-party react components, we are wasting time and generating confusion in the edX organization.

React-bootstrap is a mature component library with full coverage of Bootstrap components. Component design in react-bootstrap is similar to Paragon's more recent approach to component design reflected in Dropdown and Collapsible. We judge react-bootstrap to be a high-quality library with healthy activity.


Decision
--------

We will include react-bootstrap components in Paragon. Paragon will continue to contain custom-written components, but for any component that exists in react-bootstrap we will use the react-bootstrap version instead of building our own. This will provide us comprehensive coverage of Bootstrap features in react and allow us to focus on adding value by creating components outside the scope of Bootstrap.


This will be accomplished by:

1. React-bootstrap will be included as a dependency of this project. We will pin to a minor version. (Right now 1.0.x).

2. Components will be passed-through from react-bootstrap by adding shell components in Paragon. (e.g. Modal.js in Paragon will simply include Modal from react-bootstrap and re-export it). This will provide us flexibility to swap the implementation in the future or enforce a11y rules if needed.

3. Documentation for components included from react-bootstrap will:

  - Include an interactive demo of the component in use, similar to today's components.
  - The API will not be documented on the Paragon doc-site for now. (see next bullet)
  - Include links to the component doc on react-bootstrap documentation site. We do this, aware that some day in the future react-bootstrap will upgrade to Bootstrap 5 and change the doc site. They did this for the switch from Bootstrap 3 to Bootstrap 4. The Bootstrap 3 doc site moved urls, but is still on the web. When that happens we will update our documentation to the new location.

Other notes:

- As we build new components outside the scope of Bootstrap, we will likely want to use other components to compose larger ones. For example, we may use Buttons and Cards in a CourseCard component. When we do this we must import the components from Paragon's shell components and not react-bootstrap directly. Importing from local Paragon component shells and not react-bootstrap will keep dependencies on react-bootstrap components in a single place, making future architectural changes easier.

- We will ensure that the method in which we include react-bootstrap components is not a single, grouped import. It should be capable of being tree-shaken.


Consequences
------------

We have many components that will be replaced by react-bootstrap components. For these Paragon components (ex: Modal) we will move them to a new `deprecated` folder so that they can continue to be supported until they are no longer used in Open edX.

This decision will replace all components in the Paragon react library except:

- Collapsible
- Hyperlink
- Icon
- MailtoLink
- Responsive
- SearchField
- StatefulButton
- ValidationFormGroup
- TransitionReplace

References
----------

* https://react-bootstrap.github.io/
