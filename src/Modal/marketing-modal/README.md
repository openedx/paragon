---
title: 'MarketingModal'
type: 'component'
components:
- MarketingModal
- ModalDialog
categories:
- Overlays
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

``MarketingModal`` is similar to the alert modal, providing friendly messaging to our users to encourage greater engagement than the simpler confirmation dialogs. They should enable platform understanding, highlight opportunities, and support workflow engagement.

The ``MarketingModal`` is a preconfigured `ModalDialog` that accepts an image and center aligns buttons.

## Basic Usage

```jsx live
() => {
  const [isOpen, open, close] = useToggle(false);
  return (
    <>
      <div className="d-flex">
        <Button variant="outline-primary" onClick={open}>Open marketing modal</Button>
      </div>
      <MarketingModal
        title="My dialog"
        isOpen={isOpen}
        onClose={close}
        heroIsDark
        heroNode={(
          <ModalDialog.Hero>
            <ModalDialog.Hero.Background
              backgroundSrc="https://picsum.photos/1600/800/"
            />
            <ModalDialog.Hero.Content style={{ maxWidth: '15rem' }}>
              <ModalDialog.Title as="h1">
                All kinds of things.
              </ModalDialog.Title>
            </ModalDialog.Hero.Content>
          </ModalDialog.Hero>
        )}
        footerNode={(
          <ActionRow isStacked>
            <Button variant="tertiary" onClick={close}>Cancel</Button>
            <Button>Submit</Button>
          </ActionRow>
        )}
      >
        <p>
          I'm baby palo santo ugh celiac fashion axe. La croix lo-fi venmo whatever. Beard man braid migas single-origin coffee forage ramps. Tumeric messenger bag bicycle rights wayfarers, try-hard cronut blue bottle health goth. Sriracha tumblr cardigan, cloud bread succulents tumeric copper mug marfa semiotics woke next level organic roof party +1 try-hard.
        </p>
      </MarketingModal>
    </>
  )
}
```

