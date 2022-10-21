import Annotation from '../index';

export default {
  title: 'Components/Annotation',
  component: Annotation,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
    },
    arrowPlacement: {
      control: {
        type: 'select',
      },
    },
  },
};

function Template(args) {
  return <Annotation {...args} />;
}

export const Error = Template.bind({});
Error.args = { children: 'Error variant', variant: 'error' };

export const Success = Template.bind({});
Success.args = { children: 'Success variant', variant: 'success' };

export const Warning = Template.bind({});
Warning.args = { children: 'Warning variant', variant: 'warning' };

export const Light = Template.bind({});
Light.args = {
  children: 'Light variant. By default max width is set to 300px with wrapping text.',
  variant: 'light',
};

export const Dark = Template.bind({});
Dark.args = { children: 'Dark variant', variant: 'dark' };
