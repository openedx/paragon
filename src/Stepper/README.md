---
title: 'Stepper'
type: 'component'
status: 'Stable'
components:
- Stepper
- StepperStep
- StepperActionRow
- StepperHeader
- StepperHeaderStep
categories:
- Navigation
- Content
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

### Basic Usage

A `Stepper` must wrap a set of composed subcomponents:
- `Stepper.Header`
- `Stepper.Step`
- `Stepper.ActionRow`

The order of steps is dictated by the order of `Stepper.Step` components in the code.

 `Stepper.Step` and `Stepper.ActionRow` are hidden until their `eventKey` props match the `activeKey` on `Stepper`.

```jsx live
() => {
  const steps = ['welcome', 'choose-cats', 'review'];
  const [currentStep, setCurrentStep] = useState(steps[0]);

  return (
    <Stepper activeKey={currentStep}>
      <Stepper.Header />

      <Container size="sm" className="py-5">
        <Stepper.Step eventKey="welcome" title="Welcome">
          <h2>Welcome to the cat workflow</h2>
          <HipsterIpsum numParagraphs={2} />
        </Stepper.Step>

        <Stepper.Step eventKey="choose-cats" title="Chooseth a cat">
          <h2>Choose a cat!</h2>
          <HipsterIpsum numParagraphs={2} />
        </Stepper.Step>

        <Stepper.Step eventKey="review" title="Review">
          <h2>Review your work</h2>
          <HipsterIpsum numParagraphs={2} />
        </Stepper.Step>
      </Container>

      <div className="py-3">
        <Stepper.ActionRow eventKey="welcome">
          <Button variant="outline-primary" onClick={() => alert('Cancel')}>
            Cancel
          </Button>
          <Stepper.ActionRow.Spacer />
          <Button onClick={() => setCurrentStep('choose-cats')}>Next</Button>
        </Stepper.ActionRow>

        <Stepper.ActionRow eventKey="choose-cats">
          <Button variant="outline-primary" onClick={() => setCurrentStep('welcome')}>
            Previous
          </Button>
          <Stepper.ActionRow.Spacer />
          <Button onClick={() => setCurrentStep('review')}>Next</Button>
        </Stepper.ActionRow>

        <Stepper.ActionRow eventKey="review">
          <Button variant="outline-primary" onClick={() => setCurrentStep('choose-cats')}>
            Previous
          </Button>
          <Stepper.ActionRow.Spacer />
          <Button onClick={() => alert('Completed')}>Apply</Button>
        </Stepper.ActionRow>
      </div>
    </Stepper>
  )
}
```

### In a modal

A composition of a stepper with a `FullscreenModal`.

```jsx live
() => {
  const steps = ['welcome', 'choose-cats', 'review'];
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [isOpen, open, close] = useToggle(false);
  return (
    <>
      <Button variant="outline-primary" onClick={open}>Open fullscreen modal</Button>

      <Stepper activeKey={currentStep}>
        <FullscreenModal
          title="My dialog"
          className="bg-light-200"
          isOpen={isOpen}
          onClose={close}
          beforeBodyNode={<Stepper.Header className="border-bottom border-light" />}
          footerNode={(
            <>
              <Stepper.ActionRow eventKey="welcome">
                <Button variant="outline-primary" onClick={close}>
                  Cancel
                </Button>
                <Stepper.ActionRow.Spacer />
                <Button onClick={() => setCurrentStep('choose-cats')}>Next</Button>
              </Stepper.ActionRow>

              <Stepper.ActionRow eventKey="choose-cats">
                <Button variant="outline-primary" onClick={() => setCurrentStep('welcome')}>
                  Previous
                </Button>
                <Stepper.ActionRow.Spacer />
                <Button onClick={() => setCurrentStep('review')}>Next</Button>
              </Stepper.ActionRow>

              <Stepper.ActionRow eventKey="review">
                <Button variant="outline-primary" onClick={() => setCurrentStep('choose-cats')}>
                  Previous
                </Button>
                <Stepper.ActionRow.Spacer />
                <Button onClick={close}>Apply</Button>
              </Stepper.ActionRow>
            </>
          )}
        >
          <Container size="md">
            <Stepper.Step eventKey="welcome" title="Welcome">
              <h2>Welcome to the cat workflow</h2>
              <HipsterIpsum numParagraphs={2} />
            </Stepper.Step>

            <Stepper.Step eventKey="choose-cats" title="Chooseth a cat">
              <h2>Choose a cat!</h2>
              <HipsterIpsum numParagraphs={2} />
            </Stepper.Step>

            <Stepper.Step eventKey="review" title="Review">
              <h2>Review your work</h2>
              <HipsterIpsum numParagraphs={2} />
            </Stepper.Step>
          </Container>
        </FullscreenModal>
      </Stepper>
    </>
  )
}
```
