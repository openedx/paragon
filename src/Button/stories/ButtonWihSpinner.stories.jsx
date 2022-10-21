import Button from '../index';
import Spinner from '../../Spinner/index';

export default { title: 'Components/Button/WithSpinner', component: Button };

function Template(args) {
  return (
    <Button {...args}>
      <Spinner animation="border" />
    </Button>
  );
}

export const Primary = Template.bind({});
Primary.args = { variant: 'primary' };

export const Brand = Template.bind({});
Brand.args = { variant: 'brand' };

export const OutlinePrimary = Template.bind({});
OutlinePrimary.args = { variant: 'outline-primary' };

export const OutlineBrand = Template.bind({});
OutlineBrand.args = { variant: 'outline-brand' };

export const InversePrimary = Template.bind({});
InversePrimary.args = { variant: 'inverse-primary' };

export const InverseBrand = Template.bind({});
InverseBrand.args = { variant: 'inverse-brand' };
