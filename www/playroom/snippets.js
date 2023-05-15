const snippets = [
  {
    group: 'Components',
    name: 'Button',
    code: '<Button variant="primary">Button</Button>',
  },
  {
    group: 'Components',
    name: 'AlertModal',
    code: `{(() => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Button variant="outline-primary" onClick={() => setOpen(true)}>Open alert modal</Button>

      <AlertModal
        title="Heads up!"
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        footerNode={(
          <ActionRow>
            <Button variant="tertiary" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="danger">Submit</Button>
          </ActionRow>
        )}
      >
        <p>
          I'm baby palo santo ugh celiac fashion axe. La croix lo-fi venmo whatever.
        </p>
      </AlertModal>
    </>
  )
})()}`,
  },
];

export default snippets;
