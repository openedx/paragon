import React from 'react';
import { storiesOf } from '@storybook/react';


import Input from './index';

storiesOf('User Input|Input', module)
  .add('minimal usage', () => (
    <div>
      <div className="form-group">
        <Input
          type="select"
          defaultValue="Foo Bar"
          options={[
            { value: 'Foo Bar', label: 'Foo Bar' },
            { value: 'Foos Bar', label: 'Bar foo' },
            { value: 'Foo sBar', label: 'FoBaro' },
            { value: 'Foo ssBar', label: 'Farboo' },
            {
              label: 'But there is more',
              group: [
                { value: 'vFoo Bar', label: 'Foov Bar' },
                { value: 'vFoos Bar', label: 'Barv foo' },
                { value: 'vFoo sBar', label: 'FoBarov' },
                { value: 'vFoo ssBar', label: 'Farboov' },
              ],
            },
          ]}
        />
      </div>
      <div className="form-group">
        <Input
          type="textarea"
          defaultValue="Hammock semiotics pok pok jianbing venmo, crucifix taiyaki stumptown irony ennui knausgaard bitters synth slow-carb iPhone."
        />
      </div>

      <div className="form-group">
        <Input type="text" defaultValue="Some text input" />
      </div>
      <div className="form-group">
        <Input type="date" />
      </div>
      <div className="form-group">
        <Input type="file" />
      </div>
      <div className="form-group">
        <Input type="range" />
      </div>
    </div>
  ));
