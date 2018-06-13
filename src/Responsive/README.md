# Responsive

Provides several wrapper components that support hiding/showing components for specific screen sizes based on [Bootstrap's responsive breakpoints](https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints). This enables `Paragon` components to create mobile-specific UIs (e.g., simplifying the UX of `Pagination` for mobile devices).

The following responsive components are available:

1. `ExtraSmall` (max-width: 575)
2. `Small` (min-width: 576; max-width: 767)
3. `Medium` (min-width: 768; max-width: 991)
4. `Large` (min-width: 992; max-width: 1199)
5. `ExtraLarge` (min-width: 1200)
6. `LargerThanExtraSmall` (min-width: 576)

## Example Usage

```jsx
<ExtraSmall>
    <p>This text will only show on extra small screens.</p>
</ExtraSmall>

<Large>
    <p>This text will only show on large screens.</p>
</Large>

<LargerThanExtraSmall>
    <p>This text will only show on screens larger than extra small.</p>
</LargerThanExtraSmall>
```
