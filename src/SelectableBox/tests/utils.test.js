import { Form } from '../..';
import { getInputType } from '../utils';

describe('utils', () => {
  it('getInputType returns correct type', () => {
    expect(getInputType('SelectableBox', undefined)).toEqual(Form.Radio);
    expect(getInputType('SelectableBox', 'wrongtype')).toEqual(Form.Radio);
    expect(getInputType('SelectableBox', 'radio')).toEqual(Form.Radio);
    expect(getInputType('SelectableBox', 'checkbox')).toEqual(Form.Checkbox);
    expect(getInputType('SelectableBoxSet', undefined)).toEqual(Form.RadioSet);
    expect(getInputType('SelectableBoxSet', 'wrongtype')).toEqual(Form.RadioSet);
    expect(getInputType('SelectableBoxSet', 'radio')).toEqual(Form.RadioSet);
    expect(getInputType('SelectableBoxSet', 'checkbox')).toEqual(Form.CheckboxSet);
  });
});
