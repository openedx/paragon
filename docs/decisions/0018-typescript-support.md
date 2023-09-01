18. TypeScript support.
----------------------------------------------------------------

Status
------

Accepted

Context
_______

TypeScript has grown to be quite popular and commonplace for JavaScript developers, providing many great advantages at the short term cost of a small learning curve.

While developing Paragon components it is important to make them reliable, clear, easy to use and override. That is where TypeScript advantages can be helpful:

1. TypeScript is more reliable
In contrast to JavaScript, TypeScript code is more reliable and easier to refactor. This enables developers to evade errors and do rewrites much easier.

2. TypeScript is more explicit
Making types explicit focuses our attention on how exactly our system is built, and how different parts of it interact with each other. In large-scale systems, it is important to be able to abstract away the rest of the system while keeping the context in mind. Types enable us to do that.

3. TypeScript and JavaScript are practically interchangeable.
Since JavaScript is a subset of TypeScript, all JavaScript libraries can be used in TypeScript code.

Decision
________

We will introduce TypeScript in our project:
- Existing components will still be written in JavaScript but during new features development can be rewritten to TypeScript.
- New components will use TypeScript.

Consequences
------------

* Usage of new/rewritten Typescript components that rely on big number of props will be simplified due to types specification. 
* Since light-weighted components don't contain complex logic, TypeScript won't affect reliability of such components like `Badge`, `Icon`, `Stack`. In contrast, advanced components will be more reliable and error-proof.
