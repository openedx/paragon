---
title: 'ModalDialog'
type: 'component'
components:
- ModalDialog
- ModalDialogTitle
- ModalDialogHeader
- ModalDialogHero
- ModalDialogBody
- ModalDialogFooter
- ModalDialogCloseButton
categories:
- Overlays
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

A set of components for making all kinds of modal dialogs. Remember to supply
the required `title` prop to `ModalDialog` in order ensure there is an accessible
label for the dialog element.

## Basic Usage

```jsx live
() => {
  const [isOpen, open, close] = useToggle(false);
  const sizes = ['sm', 'md', 'lg', 'xl', 'fullscreen'];
  const variants = ['default', 'warning', 'danger', 'success', 'dark'];
  const [modalSize, setModalSize] = useState('md');
  const [modalVariant, setModalVariant] = useState('default');
  return (
    <>
      <div className="d-flex">
        <Button variant="outline-primary" onClick={open}>Open standard modal dialog</Button>
      </div>
      <ModalDialog
        title="My dialog"
        isOpen={isOpen}
        onClose={close}
        size={modalSize}
        variant={modalVariant}
        hasCloseButton
        isFullscreenOnMobile
      >
        <ModalDialog.Header>
          <ModalDialog.Title>
            I'm a dialog box
          </ModalDialog.Title>
        </ModalDialog.Header>

        <ModalDialog.Body>
          <Form.Group>
            <Form.Label>Size</Form.Label>
            <Form.RadioSet
              name="size"
              value={modalSize}
              onChange={(e) => setModalSize(e.target.value)}
            >
              {sizes.map(s => <Form.Radio key={s} value={s}>{s}</Form.Radio>)}
            </Form.RadioSet>
          </Form.Group>
          <Form.Group>
            <Form.Label>Variant</Form.Label>
            <Form.RadioSet
              name="variant"
              value={modalVariant}
              onChange={(e) => setModalVariant(e.target.value)}
            >
              {variants.map(v => <Form.Radio key={v} value={v}>{v}</Form.Radio>)}
            </Form.RadioSet>
          </Form.Group>
          <p>
            I'm baby palo santo ugh celiac fashion axe. La croix lo-fi venmo whatever. Beard man braid migas single-origin coffee forage ramps. Tumeric messenger bag bicycle rights wayfarers, try-hard cronut blue bottle health goth. Sriracha tumblr cardigan, cloud bread succulents tumeric copper mug marfa semiotics woke next level organic roof party +1 try-hard.
          </p>
        </ModalDialog.Body>

        <ModalDialog.Footer>
          <ActionRow>
            <ModalDialog.CloseButton variant="tertiary">
              Cancel
            </ModalDialog.CloseButton>
            <Button variant="primary">
              A button
            </Button>
          </ActionRow>
        </ModalDialog.Footer>
      </ModalDialog>
    </>
  )
}
```

## With header content

```jsx live
() => {
  const [isOpen, open, close] = useToggle(false);
  const sizes = ['sm', 'md', 'lg', 'xl', 'fullscreen'];
  const variants = ['default', 'warning', 'danger', 'success', 'dark'];
  const [modalSize, setModalSize] = useState('md');
  const [modalVariant, setModalVariant] = useState('dark');
  return (
    <>
      <div className="d-flex">
        <Button variant="outline-primary" onClick={open}>Open marketing modal dialog</Button>
      </div>
      <ModalDialog
        title="My dialog"
        isOpen={isOpen}
        onClose={close}
        size={modalSize}
        variant={modalVariant}
        hasCloseButton
      >
        <ModalDialog.Hero>
          <ModalDialog.Hero.Background
            backgroundSrc="https://picsum.photos/1600/800/"
          />
          <ModalDialog.Hero.Content style={{ maxWidth: '15rem' }}>
            <ModalDialog.Title as="h1">
              I'm a dialog box
            </ModalDialog.Title>
          </ModalDialog.Hero.Content>
        </ModalDialog.Hero>

        <ModalDialog.Body>
          <Form.Group>
            <Form.Label>Size</Form.Label>
            <Form.RadioSet name="size" value={modalSize} onChange={(e) => setModalSize(e.target.value)}>
              {sizes.map(size => (
                <Form.Radio key={size} value={size}>{size}</Form.Radio>
              ))}
            </Form.RadioSet>
          </Form.Group>
          <Form.Group>
            <Form.Label>Variant</Form.Label>
            <Form.RadioSet name="variant" value={modalVariant} onChange={(e) => setModalVariant(e.target.value)}>
              {['default', 'dark'].map(variant => (
                <Form.Radio key={variant} value={variant}>{variant}</Form.Radio>
              ))}
            </Form.RadioSet>
          </Form.Group>
          <p>
            I'm baby palo santo ugh celiac fashion axe. La croix lo-fi venmo whatever. Beard man braid migas single-origin coffee forage ramps. Tumeric messenger bag bicycle rights wayfarers, try-hard cronut blue bottle health goth. Sriracha tumblr cardigan, cloud bread succulents tumeric copper mug marfa semiotics woke next level organic roof party +1 try-hard.
          </p>
        </ModalDialog.Body>

        <ModalDialog.Footer>
          <ActionRow isStacked>
            <ModalDialog.CloseButton variant="tertiary">
              Cancel
            </ModalDialog.CloseButton>
            <Button variant="primary">
              A button
            </Button>
          </ActionRow>
        </ModalDialog.Footer>
      </ModalDialog>
    </>
  )
}
```
