7. Component API Guidelines
---------------------------

Status
------

Accepted

Context
-------

Paragon components have very different interfaces and inconsistencies with how they handle common attributes. This cause friction when using the library, causing developers to use documentation more often ultimately slowing them down.

Decision
--------

We should think of Paragon components as a set, they should behave and be used in consistent ways. This will decrease developer reliance on documentation over time increasing productivity. Here are a some guidelines in no particular order:

**children**
When creating a component that should have content use children instead of a prop (such as content, or label) unless there is a compelling reason not to do so.

**className**
Whenever we wish to allow consumers of a component to add a class name, the prop should be named className (not classNames) and should expect a string (not an array).

**Other considerations**

- Name props from the perspective of the component (not the component's parent or consumer).
- "Mirror the DOM wherever possible" `React Prop Type Best Practices <https://davidwells.io/blog/react-prop-type-best-practices/>`_

Consequences
------------

We will need to deprecate currently used props and consuming applications of Paragon will need to update their usage.

Over time Paragon component prop names and types will be easier guess making Paragon easier to use.

References
----------

* https://dlinau.wordpress.com/2016/02/22/how-to-name-props-for-react-components/
* https://davidwells.io/blog/react-prop-type-best-practices/
