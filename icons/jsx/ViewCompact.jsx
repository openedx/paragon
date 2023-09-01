import * as React from "react";
const SvgViewCompact = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M3 19h6v-7H3v7zm7 0h12v-7H10v7zM3 5v6h19V5H3z"
      fill="currentColor"
    />
  </svg>
);
export default SvgViewCompact;
