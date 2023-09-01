import * as React from "react";
const SvgRectangle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path d="M2 4h20v16H2z" fill="currentColor" />
  </svg>
);
export default SvgRectangle;
