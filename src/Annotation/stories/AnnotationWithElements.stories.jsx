import Annotation from '../index';
import Button from '../../Button/index';

export default {
  title: 'Components/Annotation/WithElements',
  component: Annotation,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
    },
    arrowPlacement: {
      control: {
        type: null,
      },
    },
  },
};

const OnTop = (args) => (
  <div className="d-flex flex-column align-items-center">
    <Annotation {...args}>
      Annotation on top
    </Annotation>
    <Button>This is an example button</Button>
  </div>
);

export const Top = OnTop.bind({});
Top.args = { children: 'Annotation on top' };

const OnRight = (args) => (
  <div className="d-flex align-items-center">
    <Button>This is an example button</Button>
    <Annotation {...args}>
      Annotation on right
    </Annotation>
  </div>
);

export const Right = OnRight.bind({});
Right.args = { arrowPlacement: 'left' };

const OnLeft = (args) => (
  <div className="d-flex align-items-center">
    <Annotation {...args}>
      Annotation on left
    </Annotation>
    <Button>This is an example button</Button>
  </div>
);

export const Left = OnLeft.bind({});
Left.args = { arrowPlacement: 'right' };

const OnBottom = (args) => (
  <div className="d-flex flex-column align-items-center">
    <Button>This is an example button</Button>
    <Annotation {...args}>
      Annotation on bottom
    </Annotation>
  </div>
);

export const Bottom = OnBottom.bind({});
Bottom.args = { arrowPlacement: 'top' };
