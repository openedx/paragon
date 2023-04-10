import React from 'react';

export interface FormControlDecoratorProps {
    children: React.ReactNode;
    location?: 'leading' | 'trailing';
}

declare const FormControlDecorator = React.FC<FormControlDecoratorProps>;

export default FormControlDecorator;
