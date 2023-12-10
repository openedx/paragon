---
title: 'FullscreenModal'
type: 'component'
components:
- FullscreenModal
- ModalDialog
categories:
- Overlays
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

The fullscreen `ModalDialog` composition. `FullscreenModal` passes all of its props through to an underlying `ModalDialog` component providing some limited customization. If you have unique needs, use the `ModalDialog` compound component family directly.

## Basic Usage

```jsx live
() => {
  const [isOpen, open, close] = useToggle(false);
  return (
    <>
      <Button variant="outline-primary" onClick={open}>Open fullscreen modal</Button>

      <FullscreenModal
        title="My dialog"
        isOpen={isOpen}
        onClose={close}
        footerNode={(
          <ActionRow>
            <p className="x-small text-muted">
              Please note, there are a limited number of fashion axe's.
            </p>
            <ActionRow.Spacer />
            <Button variant="tertiary" onClick={close}>Cancel</Button>
            <Button>Submit</Button>
          </ActionRow>
        )}
      >
        <Container size="md">
          <p>
            I'm baby palo santo ugh celiac fashion axe. La croix lo-fi venmo whatever. Beard man braid migas single-origin coffee forage ramps. Tumeric messenger bag bicycle rights wayfarers, try-hard cronut blue bottle health goth. Sriracha tumblr cardigan, cloud bread succulents tumeric copper mug marfa semiotics woke next level organic roof party +1 try-hard.
          </p>
          <p>
            I'm baby palo santo ugh celiac fashion axe. La croix lo-fi venmo whatever. Beard man braid migas single-origin coffee forage ramps. Tumeric messenger bag bicycle rights wayfarers, try-hard cronut blue bottle health goth. Sriracha tumblr cardigan, cloud bread succulents tumeric copper mug marfa semiotics woke next level organic roof party +1 try-hard.
          </p>
          <p>
            I'm baby palo santo ugh celiac fashion axe. La croix lo-fi venmo whatever. Beard man braid migas single-origin coffee forage ramps. Tumeric messenger bag bicycle rights wayfarers, try-hard cronut blue bottle health goth. Sriracha tumblr cardigan, cloud bread succulents tumeric copper mug marfa semiotics woke next level organic roof party +1 try-hard.
          </p>
        </Container>
      </FullscreenModal>
    </>
  )
}
```
