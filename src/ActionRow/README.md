---
title: 'ActionRow'
type: 'component'
components:
- ActionRow
- ActionRowSpacer
categories:
- Buttonlike
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

A layout utility for the common use case of aligning buttons, links or text
in a row in a control bar or nav.

ActionRow assumes that its last child is the primary action and lays out actions so that the last item is in a primary location. If horizontal, the primary action sits on the right. If stacked, the primary action sits at the top of the stack (this is done via `flex-direction: column-reverse;`).
## Basic Usage

```jsx live
<ActionRow>
  <Button variant="tertiary">
    Cancel
  </Button>
  <Button variant="primary">
    Submit
  </Button>
</ActionRow>
```

## Usage with a Spacer

ActionRow can also be used with a helper component `ActionRow.Spacer` to insert empty space between children

```jsx live
<ActionRow>
  <Form.Checkbox className="flex-column flex-sm-row">Don't ask me again.</Form.Checkbox>
  <ActionRow.Spacer />
  <Button variant="tertiary">
    Cancel
  </Button>
  <Button variant="primary">
    Submit
  </Button>
</ActionRow>
```

## Stacked Usage


```jsx live
<ActionRow isStacked>
  <p className="x-small">
    Bespoke leggings yuccie, portland umami readymade craft beer vaporware sriracha.
  </p>
  <Button variant="tertiary">
    Go back
  </Button>
  <Button variant="primary">
    Continue
  </Button>
</ActionRow>
```
