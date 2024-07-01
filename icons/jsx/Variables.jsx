import * as React from "react";
const SvgVariables = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M120-280v-400h720v400H120Zm60-60h600v-280H180v280Zm0 0v-280 280Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgVariables;
