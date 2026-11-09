import { ReactNode } from 'react';

interface FormControlDecoratorProps {
  children: ReactNode;
  location?: 'leading' | 'trailing';
}

function FormControlDecorator({ children, location = 'leading' }: FormControlDecoratorProps) {
  return (
    <div className={`pgn__form-control-decorator pgn__form-control-decorator-${location}`}>
      {children}
    </div>
  );
}

export default FormControlDecorator;
