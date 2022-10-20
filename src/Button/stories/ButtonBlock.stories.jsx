import Button from '../index';

export default { title: 'Components/Button/Block', component: Button };

const Template = (args) => <Button {...args} />;

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
  variant: 'primary',
  size: 'lg',
  block: true,
};
