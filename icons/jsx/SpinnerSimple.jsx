import * as React from "react";
const SvgSpinnerSimple = (props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M22 12A10 10 0 1 1 6.122 3.91l1.176 1.618A8 8 0 1 0 20 12h2Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSpinnerSimple;
