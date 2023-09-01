import * as React from "react";
const SvgSquare = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M3 3h18v18H3z" fill="currentColor" />
  </svg>
);
export default SvgSquare;
