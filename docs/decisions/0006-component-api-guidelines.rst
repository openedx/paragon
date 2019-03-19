6. Component API Guidelines
---------------------------

Status
------

Proposed

Context
-------

Paragon components have very different interfaces and inconsistencies with how they handle common attributes. This cause friction when using the library, causing developers to use documentation more often ultimately slowing them down.

Decision
--------

We should think of Paragon components as a set, they should behave and be used in consistent ways. This will decrease developer reliance on documentation over time increasing productivity. Here are a set of guidelines in no particular order:

children
When creating a component that should have content use children instead of a prop (such as content, or label) unless there is a compelling reason not to do so.

className
Whenever we wish to allow consumers of a component to add a class name, the prop should be named className (not classNames) and should expect a string (not an array).

Auto generation of Ids
Avoid auto generating ids where unneccessary. Be aware that auto generation of ids may cause issues with snapshot tests in consuming apps.


Consequences
------------

Consumers of Paragon components will need to relearn how to use them.

References
----------

* https://github.com/edx/paragon
