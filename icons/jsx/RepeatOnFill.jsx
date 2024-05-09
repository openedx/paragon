import * as React from "react";
const SvgRepeatOnFill = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M100-40q-24 0-42-18t-18-42v-761q0-23 18-41.5t42-18.5h761q23 0 41.5 18.5T921-861v761q0 24-18.5 42T861-40H100Zm180-40 42-44-86-86h524v-220h-60v160H236l86-86-42-44-160 160L280-80Zm-80-450h60v-160h464l-86 86 42 44 160-160-160-160-42 44 86 86H200v220Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgRepeatOnFill;
