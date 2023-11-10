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
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

Steppers display progress through a sequence of separate steps towards a particular goal for more complex tasks. This provides a more manageable experience by allowing the user to focus on smaller pieces of the task at hand.

This stepper can be used not only for initial setup, but also for future configuration changes over time by linking to the relevant step.

## Steps

On page load, all steps will display a number and short label to help the user understand the sequence of actions towards setup or creation.
Steppers should follow a linear progression, requiring the user to navigate between all steps in chronological order for initial setup
Incomplete and active steps will always display a number. Completed steps will display a checkmark icon. Steps missing required input from the user will display the step error state.

## Navigation

The "Next" button, positioned on the right side of the footer, is used to progress to the next step in the process. This button should be active and available at all times. On the final workflow step, this button can display a contextual label related to the action (ex: 'FINISH', or 'APPLY').
When the user has moved past the first step, display a Secondary outline button with a 'Back' label all the way to the left in the footer to allow them to move backwards in a linear progression.
The user can navigate back a single step, or multiple, but can only move forward with the 'Next' button in the footer. (The numbered steps and check marks are not interactive)
The user may move back a step if they have not completed the active step without validation being required for the current step. Any actions that have been taken on the current step should be retained (data should not be cleared unless the user is warned.
Note: Future use cases may require a third action button, positioned directly before the “Next” button, on the right. Examples include saving a draft or launching a preview within the flow.

## Errors and warnings

Display the step error state and do not allow the user to move ahead on any step missing required input from the user. The error state should display a contextual label related to the active step.
Request confirmation from users who choose to exit and discontinue before completing all steps in the workflow. The user should understand that all edits and changes will be lost if they do so.
Display a browser confirmation dialog when closing the tab or navigating with the browser back button before completing all steps in the workflow. The user should understand that all edits and changes will be lost if they proceed.

## Basic Usage

A ``Stepper`` must wrap a set of composed subcomponents:
- ``Stepper.Header``
- ``Stepper.Step``
- ``Stepper.ActionRow``

The order of steps is dictated by the order of ``Stepper.Step`` components in the code.

``Stepper.Step`` and ``Stepper.ActionRow`` are hidden until their ``eventKey`` props match the ``activeKey`` on ``Stepper``.

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

## Clickable Header

Use ``Stepper.Step``'s ``onClick`` prop to enable clickable behaviour for step's header. This should primarily be used to
implement navigation between steps by clicking on their headers.

**Note**: this prop takes effect (i.e., header becomes clickable) only after the step has been visited.

### Basic usage

```jsx live
() => {
  const steps = ['introduction', 'benefits', 'finally'];
  const [currentStep, setCurrentStep] = useState(steps[0]);

  return (
    <Stepper activeKey={currentStep}>
      <Stepper.Header />

      <Container size="sm" className="py-5">
        <Stepper.Step onClick={() => setCurrentStep('introduction')} eventKey="introduction" title="Introduction">
          <h2>Introduction</h2>
          <HipsterIpsum numParagraphs={1} />
        </Stepper.Step>

        <Stepper.Step onClick={() => setCurrentStep('benefits')} eventKey="benefits" title="Benefits">
          <h2>Benefits</h2>
          <HipsterIpsum numParagraphs={1} />
        </Stepper.Step>

        <Stepper.Step onClick={() => setCurrentStep('finally')} eventKey="finally" title="Finally!">
          <h2>Finally</h2>
          <HipsterIpsum numParagraphs={1} />
        </Stepper.Step>
      </Container>

      <div className="py-3">
        <Stepper.ActionRow eventKey="introduction">
          <Button variant="outline-primary" onClick={() => alert('Cancel')}>
            Cancel
          </Button>
          <Stepper.ActionRow.Spacer />
          <Button onClick={() => setCurrentStep('benefits')}>Next</Button>
        </Stepper.ActionRow>

        <Stepper.ActionRow eventKey="benefits">
          <Button variant="outline-primary" onClick={() => setCurrentStep('introduction')}>
            Previous
          </Button>
          <Stepper.ActionRow.Spacer />
          <Button onClick={() => setCurrentStep('finally')}>Next</Button>
        </Stepper.ActionRow>

        <Stepper.ActionRow eventKey="finally">
          <Button variant="outline-primary" onClick={() => setCurrentStep('benefits')}>
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

### With Error State

```jsx live
() => {
  const steps = ['checkbox', 'success'];
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [isChecked, check, uncheck, toggleChecked] = useToggle(false);
  const [hasError, setError, removeError] = useToggle(false);
  const [isAlertOpen, openAlert, closeAlert] = useToggle(false)

  const evaluateCheckbox = () => {
    if (isChecked) {
      removeError();
      setCurrentStep('success');
    } else {
      setError();
    }
  };

  const resetCheckbox = () => {
    closeAlert();
    uncheck();
    removeError();
  };

  return (
    <Stepper activeKey={currentStep}>
      <Stepper.Header />

      <AlertModal
        title="Confirm reset"
        isOpen={isAlertOpen}
        onClose={closeAlert}
        footerNode={(
          <ActionRow>
            <Button variant="tertiary" onClick={closeAlert}>Cancel</Button>
            <Button variant="danger" onClick={resetCheckbox}>Confirm</Button>
          </ActionRow>
        )}
      >
        <p>
          Are you sure you wish to reset the checkbox?
        </p>
      </AlertModal>

      <Container size="sm" className="py-5">
        <Stepper.Step
          eventKey="checkbox"
          title="Check the Box"
          index={steps.indexOf('checkbox')}
          description={hasError ? 'Please check the box to continue.' : ''}
          hasError={hasError}
          onClick={() => setCurrentStep('checkbox')}
        >
          <h2>Check the box</h2>
          <Form.Checkbox checked={isChecked} onChange={toggleChecked}>
            Check me!
          </Form.Checkbox>
        </Stepper.Step>

        <Stepper.Step
          eventKey="success"
          title="Success!"
          index={steps.indexOf('success')}
          onClick={evaluateCheckbox}
        >
          <h2>Success!</h2>
          <p>You may now complete this demo.</p>
        </Stepper.Step>
      </Container>

      <div className="py-3">
        <Stepper.ActionRow eventKey="checkbox">
          <Button variant="outline-primary" onClick={openAlert}>
            Reset
          </Button>
          <Stepper.ActionRow.Spacer />
          <Button onClick={() => evaluateCheckbox()}>Next</Button>
        </Stepper.ActionRow>

        <Stepper.ActionRow eventKey="success">
          <Button
            variant="outline-primary"
            onClick={() => setCurrentStep('checkbox')}
          >
            Previous
          </Button>
          <Stepper.ActionRow.Spacer />
          <Button onClick={() => alert('Completed')}>Complete</Button>
        </Stepper.ActionRow>
      </div>
    </Stepper>
  )
}
```

## In a modal

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

## Error State

A composition of a stepper with the `hasError` prop. Note that the `index` prop is
also required for steps to rerender correctly here.

```jsx live
() => {
  const steps = ['checkbox', 'success'];
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [isChecked, check, uncheck, toggleChecked] = useToggle(false);
  const [hasError, setError, removeError] = useToggle(false);
  const [isAlertOpen, openAlert, closeAlert] = useToggle(false)

  const evaluateCheckbox = () => {
    if (isChecked) {
      removeError();
      setCurrentStep('success');
    } else {
      setError();
    }
  };

  const resetCheckbox = () => {
    closeAlert();
    uncheck();
    removeError();
  };

  return (
    <Stepper activeKey={currentStep}>
      <Stepper.Header />

      <AlertModal
        title="Confirm reset"
        isOpen={isAlertOpen}
        onClose={closeAlert}
        footerNode={(
          <ActionRow>
            <Button variant="tertiary" onClick={closeAlert}>Cancel</Button>
            <Button variant="danger" onClick={resetCheckbox}>Confirm</Button>
          </ActionRow>
        )}
      >
        <p>
          Are you sure you wish to reset the checkbox?
        </p>
      </AlertModal>

      <Container size="sm" className="py-5">
        <Stepper.Step
          eventKey="checkbox"
          title="Check the Box"
          index={steps.indexOf('checkbox')}
          description={hasError ? 'Please check the box to continue.' : ''}
          hasError={hasError}
        >
          <h2>Check the box</h2>
          <Form.Checkbox checked={isChecked} onChange={toggleChecked}>
            Check me!
          </Form.Checkbox>
        </Stepper.Step>

        <Stepper.Step
          eventKey="success"
          title="Success!"
          index={steps.indexOf('success')}
        >
          <h2>Success!</h2>
          <p>You may now complete this demo.</p>
        </Stepper.Step>
      </Container>

      <div className="py-3">
        <Stepper.ActionRow eventKey="checkbox">
          <Button variant="outline-primary" onClick={openAlert}>
            Reset
          </Button>
          <Stepper.ActionRow.Spacer />
          <Button onClick={() => evaluateCheckbox()}>Next</Button>
        </Stepper.ActionRow>

        <Stepper.ActionRow eventKey="success">
          <Button
            variant="outline-primary"
            onClick={() => setCurrentStep('checkbox')}
          >
            Previous
          </Button>
          <Stepper.ActionRow.Spacer />
          <Button onClick={() => alert('Completed')}>Complete</Button>
        </Stepper.ActionRow>
      </div>
    </Stepper>
  )
}
```
