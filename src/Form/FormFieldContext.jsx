import React from 'react';

const FormFieldContext = React.createContext();

const FormFieldContextProvider = ({ children ...props }) => (
  <FormFieldContext.Provider value={props}>
    {children}
  </FormFieldContext.Provider>
);

export default FormFieldContextProvider;
export { FormFieldContext };
