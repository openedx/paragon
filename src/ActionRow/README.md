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
### Basic Usage

```jsx live
<ActionRow>
  <Form.Checkbox>Don't ask me again.</Form.Checkbox>
  <ActionRow.Spacer />
  <Button variant="tertiary">
    Cancel
  </Button>
  <Button variant="primary">
    Submit
  </Button>
</ActionRow>
```

### Stacked Usage


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