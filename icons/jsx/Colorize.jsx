import * as React from "react";
const SvgColorize = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="m21.42 6.34-3.75-3.75-3.82 3.82-1.94-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.92-1.92 3.84-3.83zM6.92 19 5 17.08l8.06-8.06 1.92 1.92L6.92 19z"
      fill="currentColor"
    />
  </svg>
);
export default SvgColorize;
