import Button from '../index';

export default { title: 'Components/Button/Block', component: Button };

function Template(args) {
  return <Button {...args} />;
}

export const BlockButtonPrimary = Template.bind({});
BlockButtonPrimary.args = {
  children: 'Block level button',
  variant: 'primary',
  size: 'lg',
  block: true,
};

export const BlockButtonSecondary = Template.bind({});
BlockButtonSecondary.args = {
  children: 'Block level button',
  variant: 'secondary',
  size: 'lg',
  block: true,
};
