import * as React from "react";
const SvgSwitch = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    fill="none"
    {...props}
  >
    <path
      d="M330-290h300v-380H330v380Zm60-60v-260h180v260H390Zm60-140h60v-60h-60v60ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSwitch;
