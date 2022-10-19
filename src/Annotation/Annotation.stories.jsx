import Annotation from './index';

export default {
  title: 'Annotation',
  component: Annotation,
  argTypes: {
    arrowPlacement: {
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args) => <Annotation {...args} />;

export const Error = Template.bind({});
Error.args = { children: 'Error', variant: 'error' };

export const Success = Template.bind({});
Success.args = { children: 'Success', variant: 'success' };

export const Warning = Template.bind({});
Warning.args = { children: 'Warning', variant: 'warning' };

export const Light = Template.bind({});
Light.args = { children: 'Light', variant: 'light' };

export const Dark = Template.bind({});
Dark.args = { children: 'Dark', variant: 'dark' };
